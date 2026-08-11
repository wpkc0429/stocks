# 第十一章：投資組合績效評估的量化指標

研究日期：2026-08-11

## 核心原則

**1. 夏普比率（Sharpe Ratio）**
公式：`(Rp − Rf) / σ`（投資組合報酬減無風險利率，除以報酬標準差），直覺意義是「每承擔一單位總波動，換得多少超額報酬」。經驗法則：>1 算可接受、>2 很好、>3 優異；但要注意 S&P 500 長期夏普僅約 0.5～0.7，門檻應依資產類別、比較基準調整，並非放諸四海皆準（[Win-Vector](https://win-vector.com/2015/06/27/what-is-a-good-sharpe-ratio/)、[PortfoliosLab](https://portfolioslab.com/tools/sharpe-ratio)）。**但這個「>3優異」的經驗法則，前提是這個夏普比率來自實盤或已通過樣本外驗證的績效；若是來自未經前推分析/樣本外測試的策略回測，>3反而應比照[第五章](./05-backtesting-validation.md)視為過度擬合的紅旗警訊，而非好事——同一個數字，出處不同，該給的解讀完全相反。**最大統計侷限：假設報酬呈常態分布，但真實報酬常有負偏態與肥尾；偏態肥尾會壓低標準差、使夏普比率「被灌水」，掩蓋尾端風險——這正是賣出價外選擇權等策略常見的陷阱：崩盤前夏普漂亮，一次黑天鵝就現形（[NumberAnalytics](https://www.numberanalytics.com/blog/a-complete-guide-to-sharpe-ratio)、[QuantPy](https://medium.com/@TheQuantPy/is-your-sharpe-ratio-lying-to-you-meet-the-probabilistic-sharpe-ratio-d06077e423e8)）。

**2. 索提諾比率（Sortino Ratio）**
與夏普的差異：分母改用「下檔標準差」（僅計算低於目標報酬的負報酬離散程度），上檔波動不算風險。公式：`(Rp − Rf) / σd`。適用情境：報酬呈正偏態、選擇權型策略，或退休族／保本型投資人只在乎虧損風險時，比夏普更貼近真實風險認知（[Quantt](https://www.quantt.co.uk/resources/sortino-ratio-explained)、[Schwab](https://www.schwab.com/learn/story/using-sortino-ratio-to-gauge-downside-risk)）。

**3. 卡瑪比率（Calmar Ratio）**
邏輯：分子為年化報酬，分母改用「最大回撤」而非標準差，直接回答「賺這個報酬要先撐過多深的虧損谷底」。適用情境：波段／趨勢交易、CTA 基金常用，因為這類策略報酬本身非常態，用回撤衡量比標準差更貼近實際承受痛苦（[QuantVPS](https://www.quantvps.com/blog/how-to-calculate-the-calmar-ratio)、[FinanceStrategists](https://www.financestrategists.com/wealth-management/financial-ratios/calmar-ratio/)）。

**4. 最大回撤本身（Max Drawdown）**
回本所需報酬呈非線性、且隨跌深急速惡化：跌 10% 需漲 11.1% 才回本、跌 25% 需漲 33.3%、跌 50% 則要漲 100%（[TradeZella](https://www.tradezella.com/blog/drawdown-recovery)）。這也是實務交易者比起報酬率更重視回撤的核心理由：一是心理承受度——20% 回撤在財務上或許還撐得住，但心理上足以逼投資人恐慌斬倉、賣在阱底；二是時間成本——若 50% 回撤要靠每年 10% 報酬填補，得花約 7 年才回本，這 7 年等於錯失了複利時間（[TradingMetrics](https://docs.tradingmetrics.com/en/technical-analysis/risk-management/drawdown)）。

## 常見陷阱

- **短期／牛市區間美化指標**：只取多頭噴出段計算夏普或卡瑪，波動小、回撤淺，數字亮眼卻未涵蓋完整景氣循環（升息、崩盤），一旦拉長至熊市樣本，指標往往大幅崩壞。
- **倖存者偏誤**：回測或基金比較資料若只用「還存活」的樣本，剔除已清盤、失敗的策略／基金，會系統性高估夏普比率。研究顯示存活偏誤可讓夏普從真實值 1.063 膨脹到 1.160，剛好跨過機構常用的 1.0 門檻，足以影響資金配置決策（[Bookmap](https://bookmap.com/blog/survivorship-bias-in-market-data-what-traders-need-to-know)）。
- **指標間弱相關、可被「策略性選秀」**：夏普、崔納、索提諾、資訊比率彼此相關性並不高，基金經理人可能只公布對自己最有利的那個指標，對其餘避而不談（[CFA Institute Enterprising Investor](https://blogs.cfainstitute.org/investor/2023/09/18/how-do-performance-metrics-correlate-might-fund-managers-cherry-pick/)）。
- **只秀報酬率、不秀波動度／回撤**：兩檔年化報酬相同的商品，波動與回撤路徑可能天差地遠；忽略回撤等於忽略投資人是否真能撐過那段路，是行銷資料最常見的誤導手法。
- **指標本身可被刻意操弄**：系統性賣出價外選擇權等策略能在短期內做出極低波動、極高夏普的假象，直到尾端風險一次性爆發，學界稱為「Gaming Your Sharpe Ratio」（[ResearchGate](https://www.researchgate.net/publication/247906257_How_to_Game_Your_Sharpe_Ratio)）。

## 補充

夏普比率信賴區間與統計檢定方法可參考 [Two Sigma 技術報告](https://www.twosigma.com/wp-content/uploads/sharpe-tr-1.pdf)；針對小樣本與非常態報酬的修正版本可參考「去膨脹夏普比率」（Deflated Sharpe Ratio, [David H. Bailey](https://www.davidhbailey.com/dhbpapers/deflated-sharpe.pdf)，與第五章回測方法論同源）。

## 與本書其他章節的關聯

本章的指標（夏普、索提諾、卡瑪、最大回撤）是替[第五章：回測與策略驗證方法論](./05-backtesting-validation.md)與[第一章：風險管理與部位大小](./01-risk-management-position-sizing.md)提供量化的共同語言——判斷一個策略「好不好」不能只看報酬率，要搭配這些風險調整後指標一起看。
