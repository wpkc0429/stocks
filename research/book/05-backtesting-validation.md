# 第五章：回測與策略驗證方法論

研究日期：2026-08-11

## 一、回測最致命的四種偏誤

**過度擬合／曲線擬合（Overfitting）**
- 陷阱：反覆調參數直到歷史績效「看起來完美」，本質是把雜訊當成訊號。警訊指標：夏普比率 >3、最大回撤 <5%、參數超過 30 個，都是曲線擬合的紅旗訊號。
- 避免：限制參數數量、用樣本外測試與前推分析驗證、對多重測試做統計校正（見下方 Deflated Sharpe Ratio）。
- 來源：[A Practical Guide To The Backtesting Mistakes That Kill Quant Strategies](https://hedgefundalpha.com/education/backtesting-mistakes-kill-quant-strategies-guide/)

**存活者偏誤（Survivorship Bias）**
- 陷阱：回測資料庫只包含目前仍存在（未下市、未破產）的標的，導致報酬被高估、風險被低估。存活者偏誤可能使年化報酬虛增 1–4%，且效果會隨時間複利放大。
- 避免：使用包含已下市證券的時間點（point-in-time）資料庫，例如 CRSP 或同等級的學術資料庫。
- 來源：[Survivorship Bias in Backtesting Explained](https://www.luxalgo.com/blog/survivorship-bias-in-backtesting-explained/)

**前視偏誤（Look-ahead Bias）**
- 陷阱：回測中不小心用到「當下決策時點還不存在」的資訊（例如用季報最終數字回填到季報公布前的日期、用未來股價分割調整值往前套用）。
- 避免：全程使用時間點（point-in-time）資料，是防範前視偏誤最有效的單一做法。
- 來源：[How To Avoid Bias in Backtesting](https://fortraders.com/blog/how-to-avoid-bias-in-backtesting)

**資料窺探偏誤（Data Snooping Bias）**
- 陷阱：在同一份歷史資料上反覆測試大量策略／參數組合，最終「碰巧」找到一個表現優異者——這只是統計上的偶然，並非真正的市場規律。嘗試夠多種變體，總會憑運氣跑出一個漂亮的回測結果。
- 避免：保留完全未觸碰過的樣本外測試窗口、做前推分析、並用統計方法（如 Deflated Sharpe Ratio）針對「測試過幾次策略」做校正。
- 來源：[The Deflated Sharpe Ratio (SSRN)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2460551)、[The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)

## 二、樣本外測試與前推分析（Walk-Forward Analysis）的正確做法

- 前推分析目前被業界廣泛視為策略驗證的「黃金標準」：採滾動視窗，每一段用「樣本內」資料做參數優化，緊接著在「樣本外」資料上測試，確保曲線上每一筆交易都是由「未包含該筆交易」的資料所優化出的參數產生。
- 實務建議：至少要跑 6–8 個滾動視窗才算可靠，12–20 個更佳（但需要更多資料）；每個樣本內視窗至少要有 100 筆交易，理想上 200 筆以上。
- 若策略用到長期移動平均（如 200 日均線），樣本外期間開始前要留「隔離期（embargo）」——例如至少間隔 200 個交易日（約 10 個月），該區間不得用於優化或測試，避免資訊洩漏。
- 常見陷阱：若反覆調整視窗大小、步進長度、目標函數，直到前推分析結果「看起來漂亮」為止——這等於是把過度擬合搬到前推分析本身，應事先依資料量與交易頻率固定參數，不要事後調整。
- 來源：[Walk forward optimization – Wikipedia](https://en.wikipedia.org/wiki/Walk_forward_optimization)、[Walk-Forward Optimization: How It Works, Its Limitations](https://blog.quantinsti.com/walk-forward-optimization-introduction/)、[Walk-Forward Analysis vs. Backtesting: Best Practices](https://surmount.ai/blogs/walk-forward-analysis-vs-backtesting-pros-cons-best-practices)

## 三、多少交易樣本數才有參考價值

- 業界經驗法則：200 筆交易是「具統計意義」回測的最低可信門檻，且這 200 筆必須分散在不同市場狀態（多頭、空頭、盤整）中，而非集中在單一趨勢年份；至少 100 筆才有基本統計意義，200 筆以上才算高信心水準。
- 學術上更嚴謹的作法是 Marcos López de Prado 與 David Bailey 提出的 **Deflated Sharpe Ratio（DSR）**：針對「測試過多少種策略／參數組合（多重檢定）」以及報酬分布的非常態性做校正，避免把「篩選偏誤」誤認為真實的績效邊際。同系列還有「最小回測長度（Minimum Backtest Length）」與「機率夏普比率（Probabilistic Sharpe Ratio）」，用來估算要多長的回測期間才能讓夏普比率在統計上顯著不為零。
- 統計顯著性上常見門檻是 p 值 <0.05；但樣本數不足時即使勝率高（如 20 筆交易中 65% 勝率）p 值仍可能 >0.2，無法排除純屬運氣。
- 來源：[The Deflated Sharpe Ratio (davidhbailey.com)](https://www.davidhbailey.com/dhbpapers/deflated-sharpe.pdf)、[Deflated Sharpe ratio – Wikipedia](https://en.wikipedia.org/wiki/Deflated_Sharpe_ratio)、[Minimum Trades for a Valid Backtest?](https://www.backtestbase.com/education/how-many-trades-for-backtest)

## 四、回測績效優異但實盤失敗的常見原因

- **滑價與交易成本被低估**：回測常假設零滑價、即時成交，但實盤存在下單到成交間的執行延遲；流動性不足時，大單的平均成交價可能比預期高出數個百分點。
- **策略容量問題**：策略在小資金規模下獲利，放大資金後績效會衰減；常見經驗法則是單筆交易量不應超過該標的日均成交量的 5–10%。
- **市場結構／狀態改變**：例如純多頭趨勢策略在多年牛市中表現亮眼，但市場轉入盤整或空頭後失效——策略往往只是「剛好適應了測試期間的市況」。
- **延遲與時序落差**：從訊號產生到實際下單間的網路延遲、券商處理時間、交易所排隊，都會造成回測未模擬到的額外滑價。
- 避免方式：用保守（甚至刻意誇大）的成本與滑價假設做壓力測試、限制策略資金規模在容量範圍內、搭配模擬盤（paper trading）驗證執行落差後才上實盤。
- 來源：[Why Your "Profitable" Backtest Fails the Moment You Go Live](https://hackernoon.com/why-your-profitable-backtest-fails-the-moment-you-go-live)、[Backtesting vs Live Trading: 4 Reasons Why Your Results Don't Match](https://www.ebc.com/forex/backtesting-vs-live-trading-4-reasons-why-your-results-dont-match)

## 與本專案的關聯

`stock-research` workflow 本身不是量化回測系統，但「Verify 階段交叉比對 agy 與 WebSearch」這件事，精神上等同於用「樣本外」的第二來源去驗證第一個來源的結論，避免只信單一資料來源產生的偏誤——詳見 [`research/methodology.md`](../methodology.md)。
