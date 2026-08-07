export const meta = {
  name: 'stock-research',
  description: '研究一個投資標的：總體/技術/新聞/籌碼四角度並行蒐集，用 agy 深度研究交叉驗證，寫入分類研究筆記',
  phases: [
    { title: 'Gather', detail: '總體/技術/新聞/籌碼四個角度並行搜尋' },
    { title: 'DeepResearch', detail: '呼叫 agy 做交叉驗證的深度研究' },
    { title: 'Verify', detail: '比對 agy 與 WebSearch 結果，抓出衝突與錯誤' },
    { title: 'Synthesize', detail: '寫入 research/<slug>.md 並更新索引' },
  ],
}

let a = args
if (typeof a === 'string') {
  try { a = JSON.parse(a) } catch (e) { a = {} }
}
a = a || {}

// 專案根目錄：預設為使用者本機路徑，但允許呼叫端用 args.project_root 覆寫，
// 這樣在雲端/web session（路徑不同，例如 /home/user/stocks）也能正確寫入研究筆記。
const PROJECT_ROOT = a.project_root || '/var/www/docker/html/ks-devworks/stocks'

const target = a.target
if (!target) {
  log('缺少 args.target，無法執行研究')
  return { error: '缺少 args.target，呼叫時需提供 { target: "標的名稱", run_date: "YYYY-MM-DD" }', received_args_type: typeof args }
}

const slug = a.slug || String(target)
  .toLowerCase()
  .replace(/[^a-z0-9一-鿿]+/g, '-')
  .replace(/(^-+|-+$)/g, '')

const runDate = a.run_date || '（呼叫時未提供研究基準日期，請以查到的新聞時間戳為準）'
const focusQuestions = a.focus_questions || []
const angles = a.angles || [
  { key: '總體/政策面', prompt: '整理這個標的相關的總體經濟與央行/政策面最新狀況（例如利率、政策會議、法規變化），並附上你查到的資料來源網址。' },
  { key: '技術面/價位', prompt: '整理這個標的目前的價格、近期走勢，以及市場上公認的關鍵支撐/阻力價位或技術分析觀點，並附上資料來源網址。\n\n除此之外，請務必明確查詢並回報以下四項技術指標的「最新數值與解讀」，缺一不可，結果請放進 technical_indicators 欄位：\n1. RSI（相對強弱指標，日線14日）：目前數值，以及是否處於超買（>70）或超賣（<30）區間。\n2. MACD（日線）：DIF/DEA數值或至少方向、目前是金叉還是死叉、柱狀圖是擴大還是收斂（動能增強或減弱）。\n3. 布林通道（Bollinger Bands，20日）：目前價格相對上軌/中軌/下軌的位置、通道正在收窄還是擴張（代表盤整或即將變盤）。\n4. 成交量趨勢：近期成交量是放大還是萎縮、有沒有異常爆量、跟價格走勢是背離還是同步。\n每一項都要附上資料來源網址；如果某項指標真的查不到公開數據，在該項目明確寫「查無資料」，不要自己編造數字或用記憶回答。' },
  { key: '新聞/催化事件', prompt: '整理這個標的最近的重大新聞、市場異動原因，以及未來已知的關鍵時間點/事件（例如財報、會議、到期日），並附上資料來源網址。' },
  { key: '籌碼/資金流向', prompt: '整理這個標的目前的籌碼/持倉/資金流向狀況（例如期貨COT報告、法人買賣超、選擇權未平倉），並附上資料來源網址。若這個標的沒有這類公開數據，請明確說明查不到，不要編造。' },
]

const FACT_SCHEMA = {
  type: 'object',
  properties: {
    claim: { type: 'string' },
    value: { type: 'string' },
    source_url: { type: 'string' },
  },
  required: ['claim'],
}

const GATHER_SCHEMA = {
  type: 'object',
  properties: {
    angle: { type: 'string' },
    summary: { type: 'string' },
    key_facts: { type: 'array', items: FACT_SCHEMA },
    key_price_levels: { type: 'array', items: { type: 'string' } },
    key_dates: { type: 'array', items: { type: 'string' } },
    technical_indicators: {
      type: 'object',
      description: '只有「技術面/價位」角度需要填寫；其他角度留空即可',
      properties: {
        rsi: { type: 'string' },
        macd: { type: 'string' },
        bollinger_bands: { type: 'string' },
        volume_trend: { type: 'string' },
      },
    },
  },
  required: ['angle', 'summary', 'key_facts'],
}

const DEEPRESEARCH_SCHEMA = {
  type: 'object',
  properties: {
    agy_available: { type: 'boolean' },
    summary: { type: 'string' },
    key_facts: { type: 'array', items: FACT_SCHEMA },
  },
  required: ['agy_available', 'summary'],
}

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    verified_facts: { type: 'array', items: { type: 'string' } },
    conflicting_facts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          topic: { type: 'string' },
          note: { type: 'string' },
        },
        required: ['topic', 'note'],
      },
    },
    agy_errors: { type: 'array', items: { type: 'string' } },
  },
  required: ['verified_facts', 'conflicting_facts', 'agy_errors'],
}

phase('Gather')
log(`開始研究：${target}`)

const gatheredRaw = await parallel(angles.map(a => () =>
  agent(
    `你正在研究投資標的「${target}」。研究基準日期：${runDate}。\n\n${a.prompt}\n\n` +
    `請務必使用 WebSearch 工具查詢最新資訊，不要憑記憶回答。每一項事實都要附上來源網址；查不到就不要編造，直接說查無資料。`,
    { label: `gather:${a.key}`, phase: 'Gather', schema: GATHER_SCHEMA }
  )
))
const gatherResults = gatheredRaw.filter(Boolean)

phase('DeepResearch')
const deepResearchRaw = await agent(
  `請對投資標的「${target}」執行深度研究（deep research）。研究基準日期：${runDate}。\n\n` +
  `作法：使用 Bash 工具呼叫 Antigravity CLI（指令是 agy），指令格式類似：\n` +
  `timeout 280 agy -p "<針對這個標的的總體面、價位、催化事件、進場時機的研究提示>" --output-format text --effort high\n\n` +
  `如果指令逾時、卡住、或出現要求登入（sign in）的錯誤訊息，代表 agy 目前無法使用，請直接回報 agy_available=false，並在 summary 說明「agy 未登入或逾時，本次跳過，請使用者執行 \`agy\` 完成登入」，不要重試、不要編造內容。\n` +
  `如果成功取得結果，把裡面具體的事實/數字整理成 key_facts，並在 summary 做整體摘要，設 agy_available=true。`,
  { label: 'agy-deep-research', phase: 'DeepResearch', schema: DEEPRESEARCH_SCHEMA }
)
const deepResearch = deepResearchRaw || { agy_available: false, summary: 'agy 呼叫失敗（agent無回應）', key_facts: [] }

phase('Verify')
const verify = await agent(
  `以下是針對投資標的「${target}」，從不同角度蒐集到的研究資料（JSON），以及另外用 agy 深度研究工具得到的結果（JSON）。\n\n` +
  `WebSearch蒐集結果：\n${JSON.stringify(gatherResults)}\n\n` +
  `agy深度研究結果：\n${JSON.stringify(deepResearch)}\n\n` +
  `請你交叉比對這些資料：\n` +
  `1. verified_facts：哪些事實在多個來源之間是一致的、可信的，列出簡短陳述。\n` +
  `2. conflicting_facts：哪些主題上，不同來源給出的數字/說法互相衝突或差異很大（例如持倉口數、機率預測），請列出主題與衝突內容，誠實呈現落差，不要幫忙猜一個「正確答案」。\n` +
  `3. agy_errors：agy深度研究結果中，有沒有跟WebSearch多方來源明顯矛盾、看起來是查錯或編造的具體事實（例如把利率數字記錯）。若agy_available=false或沒發現明顯錯誤，回傳空陣列即可，不要為了填內容硬找。`,
  { label: 'cross-verify', phase: 'Verify', schema: VERIFY_SCHEMA }
)

phase('Synthesize')
const notesPath = `${PROJECT_ROOT}/research/${slug}.md`
const indexPath = `${PROJECT_ROOT}/research/README.md`
const synthesis = await agent(
  `你要把投資標的「${target}」的研究結果整理成一份研究筆記檔案。研究基準日期：${runDate}。\n\n` +
  `背景資料：\n` +
  `1. 各角度蒐集結果（JSON）：${JSON.stringify(gatherResults)}\n` +
  `2. agy深度研究結果（JSON）：${JSON.stringify(deepResearch)}\n` +
  `3. 交叉驗證結果（JSON）：${JSON.stringify(verify)}\n` +
  (focusQuestions.length ? `4. 使用者特別想知道的問題：${JSON.stringify(focusQuestions)}\n` : '') +
  `\n請執行以下步驟：\n` +
  `1. 用 Read 工具檢查 ${notesPath} 是否已存在。如果已存在，讀取內容，把新研究結果併入更新（保留還有效的舊結論，更新過時或已被新資料推翻的部分），而不是整篇砍掉重寫；如果不存在則視為新建。\n` +
  `2. 用 Write 工具把最終研究筆記寫入 ${notesPath}，用繁體中文、清楚易懂的寫法（不要用英文），格式比照以下分類結構：\n` +
  `   # <標的名稱> 研究筆記\n` +
  `   最後更新：<研究基準日期>\n` +
  `   ## 現況快照\n` +
  `   ## 總體/政策面\n` +
  `   ## 技術關鍵價位（除了支撐/阻力價位表，也要有一個小節整理RSI、MACD、布林通道、成交量趨勢這四項指標目前的數值與解讀；查無資料的項目要註明「查無資料」）\n` +
  `   ## 籌碼/資金流向（查無公開資料要註明「查無公開資料」，不要編造）\n` +
  `   ## 進場策略框架（列出偏多/偏空兩個方向各自的進場區間、停損、目標；如果目前價位卡在區間中段、沒有邊界確認訊號，要明確寫「目前不建議進場」並說明原因，不要為了給結論硬湊一個進場建議）\n` +
  `   ## 待觀察催化事件\n` +
  `   ## 分析師分歧觀點\n` +
  `   ## 資料衝突與查證備註（把 verify 階段的 conflicting_facts 跟 agy_errors 誠實列出來，不要隱藏）\n` +
  `3. 用 Read 工具讀取 ${indexPath}（如果不存在就視為要新建一份索引，格式比照：一個「進行中」表格，欄位是 標的/檔案/狀態/最後更新，以及一個「待研究」區塊）。用 Edit 或 Write 工具更新或新增這個標的在索引表格中的那一列（狀態欄位要精簡摘要目前是否建議進場）。\n` +
  `4. 最後，回傳一段給使用者看的中文摘要（3-6句話），講清楚：現在的結論是什麼、建不建議進場、下一個該觀察的價位或事件是什麼。`,
  { label: 'write-notes', phase: 'Synthesize' }
)

log('研究筆記已寫入並更新索引')
return {
  target,
  slug,
  notesPath,
  agy_available: deepResearch.agy_available,
  verify,
  summary: synthesis,
}
