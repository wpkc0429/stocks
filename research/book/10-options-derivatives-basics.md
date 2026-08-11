# 第十章：選擇權與衍生性商品基礎

研究日期：2026-08-11

## 一、選擇權基本概念

**核心原則：**

- **買權(Call)/賣權(Put)**：選擇權是「權利而非義務」的合約。買權讓持有人有權在到期日前以「履約價」買進標的；賣權則是有權賣出。履約價通常以固定級距（如每股 $1、$2.5、$5）分布多檔可選 [ChartMini](https://chartmini.com/blog/calls-puts-basic-options-strategies)。
- **權利金 = 內含價值 + 時間價值**：內含價值是選擇權「現在」的實際價值（例：股價 $60、履約價 $50 的買權，內含價值即 $10）；時間價值反映距到期日越久、標的價格仍有機會變動的「潛力」，時間價值會隨到期日接近而遞減 [Ventura Securities](https://www.venturasecurities.com/blog/options-trading-understanding-delta-gamma-theta-and-vega/)。
- **買方最大損失＝權利金**：這是買進選擇權（無論call或put）唯一的下檔風險上限 [ChartMini](https://chartmini.com/blog/calls-puts-basic-options-strategies)。
- **希臘字母的直覺意義**（給一般讀者不需數學公式）：
  - **Delta**：股價每動 $1，選擇權價格大約會動多少 —— 可理解為「這張選擇權目前有多像真的持有股票」，買權 Delta 介於 0~1，賣權介於 -1~0。
  - **Theta**：「每天在流失的價值」，即使股價不動，時間流逝本身就會侵蝕權利金，且到期前最後兩週衰減最快。
  - **Vega**：反映市場對未來波動度預期的變化對權利金的影響——市場越緊張、越不確定，Vega 效果越明顯。
  - 對新手而言，最該優先掌握的是 Delta（曝險程度）與 Theta（時間成本）[Options Playbook](https://www.optionsplaybook.com/options-introduction/option-greeks)、[Ventura Securities](https://www.venturasecurities.com/blog/options-trading-understanding-delta-gamma-theta-and-vega/)。

## 二、散戶入門策略

- **保護性買權 (Protective Put)**：持有股票的同時買進價外賣權作為「保險」，最大損失被鎖在「股價-履約價+權利金」之內，同時仍保留股價上漲的獲利空間。適用於「看多但擔心短期下跌」的情境，代價是需持續支付保險費（權利金）[TradingBlock](https://www.tradingblock.com/strategies/protective-put)、[Wall Street Mojo](https://www.wallstreetmojo.com/protective-put/)。
- **掩護性買權 (Covered Call)**：持有股票並賣出價外買權賺取權利金，屬保守的「增加收益」策略。適用於「中性偏多、預期股價短期橫盤或緩漲」的情境；風險在於一旦股價大漲超過履約價，上漲獲利被鎖死在履約價，只能賺到有限的權利金收入 [AnalystPrep CFA](https://analystprep.com/cfa-level-1-exam/derivatives/covered-calls-protective-puts/)、[Piranha Profits](https://www.piranhaprofits.com/blog/covered-call-and-protective-put)。
- 兩者的本質差異：保護性買權是「買保險防守」，掩護性買權是「賣保險收租」[Wall Street Mojo](https://www.wallstreetmojo.com/protective-put/)。

## 三、散戶最危險的陷阱

- **裸賣選擇權(Naked Options)＝無限風險**：賣出未持有對應股票或避險部位的買權，因股價理論上可無限上漲，虧損也無上限；裸賣賣權則在股價跌至 0 時面臨最大虧損。2020年3月美股單月重挫36%期間，許多裸賣賣權的交易者因保證金不足而爆倉，付出慘痛代價，這是實際案例佐證 [FasterCapital](https://fastercapital.com/content/Naked-option--The-Naked-Truth--Uncovering-the-Risks-of-Naked-Options.html)。美國 SEC 與券商亦明確要求裸選必須開通保證金帳戶並設有分級審核機制，正是為了防止散戶承擔超出能力的風險 [SEC Options Trading Risk Alert](https://www.sec.gov/about/offices/ocie/options-trading-risk-alert.pdf)、[FINRA Options](https://www.finra.org/investors/investing/investment-products/options)。
- **Theta 侵蝕買方**：即使方向判斷正確，只要股價「原地不動」，買方每天都在虧損時間價值，尤其到期前兩週衰減速度最快，這是許多新手「看對方向卻還是賠錢」的主因 [Ventura Securities](https://www.venturasecurities.com/blog/options-trading-understanding-delta-gamma-theta-and-vega/)。
- **流動性不足、買賣價差過大**：冷門選擇權合約的買賣價差可能高達合約價值的三分之一（例：$1.5的選擇權，價差就有$0.5），這筆隱藏成本往往比手續費更傷，且在成交前就已侵蝕獲利空間 [The Option Premium](https://www.theoptionpremium.com/p/options-bid-ask-spread-explained)。

## 四、台灣讀者可能用到的市場：台指選擇權(TXO)

- **歐式結算**：僅能於到期日行使權利（不同於美股選擇權普遍為美式，可隨時提前履約）；到期採**現金交割**——贏家收錢、輸家賠錢，不像美股個股選擇權賣方到期可能被迫實際買賣100股股票 [台灣期貨交易所](https://www.taifex.com.tw/cht/2/tXO)、[OP投資理財學院](https://opop.tw/us-options-vs-tw-options/)。
- **契約乘數**：台指選擇權每點新台幣50元；美股個股選擇權一口合約則代表100股標的股票，兩者的曝險換算方式完全不同，讀者需特別注意，避免用美股經驗直接套用在台指選 [OP投資理財學院](https://opop.tw/us-options-vs-tw-options/)。
- 台指選擇權另有「週選擇權」(每週三到期)與「月選擇權」制度並行，結算頻率較美股常見月選更密集，也放大了短天期時間價值衰減對散戶的影響 [OP投資理財學院](https://opop.tw/txo-weekly-monthly-settlement/)。

## Sources

- [Ventura Securities – Options Greeks](https://www.venturasecurities.com/blog/options-trading-understanding-delta-gamma-theta-and-vega/)
- [Options Playbook – Option Greeks](https://www.optionsplaybook.com/options-introduction/option-greeks)
- [TradingBlock – Protective Put](https://www.tradingblock.com/strategies/protective-put)
- [AnalystPrep CFA – Covered Call & Protective Put](https://analystprep.com/cfa-level-1-exam/derivatives/covered-calls-protective-puts/)
- [FasterCapital – Naked Option Risks](https://fastercapital.com/content/Naked-option--The-Naked-Truth--Uncovering-the-Risks-of-Naked-Options.html)
- [SEC – Options Trading Risk Alert](https://www.sec.gov/about/offices/ocie/options-trading-risk-alert.pdf)
- [FINRA – Options](https://www.finra.org/investors/investing/investment-products/options)
- [The Option Premium – Bid-Ask Spread](https://www.theoptionpremium.com/p/options-bid-ask-spread-explained)
- [台灣期貨交易所 – 台指選擇權商品](https://www.taifex.com.tw/cht/2/tXO)
- [OP投資理財學院 – 美股 vs 台指選擇權差異](https://opop.tw/us-options-vs-tw-options/)
- [OP投資理財學院 – 台指選擇權結算日規則](https://opop.tw/txo-weekly-monthly-settlement/)
