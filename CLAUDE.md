# CLAUDE.md

這份文件是給 Claude Code（claude.ai/code）在這個專案裡工作時的說明。

## 專案目前的狀態

這個資料夾目前是空的：還沒有任何程式碼、沒有 `package.json`、也還沒有 git 版本控管。
之後這裡會用來做「股票研究與分析」的專案。

因為目前還沒有程式碼，所以暫時沒有建置（build）、檢查（lint）、測試（test）指令可以寫。
等專案實際用 Node.js / TypeScript 建立起來之後，記得回來把這裡更新成真正會用到的指令
（例如 `npm install`、`npm run build`、`npm test`），並補充架構說明。

## 這個專案要做什麼

目標是研究「最新的股票資訊」並做分析，會混合使用兩種搜尋/研究方式：
- Claude Code 內建的網路搜尋功能
- `agy`（Antigravity CLI）做更深入的研究（deep research）

## 什麼是 `agy`，要怎麼用

`agy` 是這台電腦上另外安裝好的一個指令列工具（Google 的 Antigravity CLI，底層是 Gemini），
安裝路徑在 `~/.local/bin/agy`，跟 Claude Code 是分開的工具。

用途：當一個問題需要比較深入、或想要「找第二個意見」交叉確認時（例如驗證某支股票的分析、
確認財報數字、或是需要跑比較久的研究），可以呼叫 `agy` 來補強 Claude 自己的搜尋結果。

常用的呼叫方式：

```bash
# 一次性、非互動模式的研究查詢（適合寫在腳本裡自動執行）
agy -p "研究 <股票代號/主題> 的最新財報與分析" --output-format text

# 需要「結構化」的結果時，可以指定 JSON schema，讓輸出變成固定格式好解析
agy -p "..." --output-format stream-json --json-schema '<schema 的 JSON 或檔案路徑>'

# 調整這次查詢要「想得多深」（低/中/高）
agy -p "..." --effort high

# 接續上一次跟 agy 的對話，而不是重新開始一個新的
agy -c -p "後續問題"
```

需要注意的地方：
- `agy` 需要先登入才能用（直接打 `agy` 不帶任何參數就會進入登入畫面）。如果指令失敗、
  出現要求登入的錯誤訊息，直接跟使用者說「需要先登入 agy」，不要一直重試。
- 建議都用 `--print` / `-p`（非互動模式）來呼叫，這樣輸出結果才能被程式抓下來、
  用在後續的分析裡，而不是卡在一個互動式的對話視窗中。
- 如果之後要「用程式解析」agy 回傳的研究結果（例如抓出股票的數字資料），
  可以搭配 `--json-schema` 讓輸出是固定格式的 JSON，而不是一段散文式的文字。

## 研究筆記存放位置

每個投資標的研究完的結論，分類記錄在 `research/<slug>.md`（例如 `research/jpy-futures.md`），
並在 `research/README.md` 索引表格登記。新標的就照這個結構新增檔案，不要只寫在對話裡。

## `stock-research` Workflow（可重複呼叫的研究流程）

`.claude/workflows/stock-research.js` 是一個可重複呼叫的 Workflow 腳本，把「研究一個投資標的」的
標準流程自動化：四個角度（總體/政策面、技術面/價位、新聞/催化事件、籌碼/資金流向）並行用 WebSearch
蒐集 → 呼叫 `agy` 做深度研究 → 交叉驗證（抓出 agy 跟 WebSearch 之間的衝突或錯誤）→ 寫入
`research/<slug>.md` 並更新 `research/README.md` 索引。

呼叫方式（**必須用 `scriptPath`，不能用 `name`**——實測過 `Workflow({name: 'stock-research', ...})` 會報錯
「not found, available: deep-research, code-review」，這個環境的 `name` 呼叫似乎只認得內建workflow，
不會掃描 `.claude/workflows/`，所以要用完整路徑）：

```
Workflow({
  scriptPath: '/var/www/docker/html/ks-devworks/stocks/.claude/workflows/stock-research.js',
  args: {
    target: '日圓期貨（CME 6J / USD-JPY）',   // 標的名稱，必填
    slug: 'jpy-futures',                      // 檔名 slug，選填（沒給會從target自動產生）
    run_date: '2026-08-04',                   // 研究基準日期，建議每次都給，因為腳本本身無法取得目前日期
    focus_questions: ['...'],                 // 使用者特別想知道的問題，選填
  }
})
```

注意事項：
- `run_date` 一定要傳，因為 Workflow 腳本內不能呼叫 `Date.now()`，日期要由呼叫端（也就是這次對話當下的日期）帶進去。
- 這個工具的 `args` 參數偶爾會被當成字串而不是物件傳進腳本（已知的呼叫介面問題），腳本內已加上防呆
  （會先判斷是不是字串、是的話再 `JSON.parse`），呼叫時仍應盡量把 `args` 當成真正的 JSON 物件傳入。
- 已實測跑過三次（日圓期貨x2、台指期），驗證階段確實能抓出 agy 的錯誤（例如查錯 FOMC 日期、干預金額換算出錯、
  合約規格數字有誤等），比單純只用 agy 或只用 WebSearch 更可靠，值得每次研究新標的都用這個流程跑一次。
- 技術面角度會明確要求 RSI、MACD、布林通道、成交量趨勢四項指標（結果放在 `technical_indicators` 欄位），
  不是只給支撐/阻力價位。
