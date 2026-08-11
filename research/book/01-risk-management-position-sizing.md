# 第一章：風險管理與部位大小

研究日期：2026-08-11

## 1. 部位大小核心模型

- **凱利公式**：f\* = (bp−q)/b，用勝率與賠率算出理論最適下注比例，追求長期資金複利成長最大化。缺點是對勝率/賠率的估計誤差極敏感，滿倉凱利波動與回撤劇烈。實務幾乎只用「半凱利」甚至四分之一凱利——半凱利可保留約75%的期望成長率，卻讓波動與回撤幾乎減半，是應對估計誤差的安全邊際（[Coriva](https://coriva.eu.org/en/kelly-criterion-position-sizing/)、[Quantt](https://www.quantt.co.uk/resources/kelly-criterion-explained)）。
- **固定比例法**：每筆風險金額＝帳戶權益×固定風險%，部位量＝風險金額÷(進場價−停損價)。簡單且能防止爆倉，缺點是未考慮不同商品的波動差異（[QuantStrategy.io](https://quantstrategy.io/blog/the-power-of-fixed-fractional-position-sizing-calculating/)）。
- **ATR法**：以ATR倍數（常見2–2.5倍）決定停損距離，再反推部位大小，波動越大部位越小，使風險在不同商品間標準化（[LuxAlgo](https://www.luxalgo.com/blog/5-atr-stop-loss-strategies-for-risk-control/)）。

## 2. 最大回撤與風險預算

「單筆風險1–2%」並非嚴格科學定律，源自Ralph Vince（曾為Larry Williams寫程式參與1987 World Cup Trading Championship，後提出Optimal f）等資金管理研究傳統，屬經驗法則而非嚴謹實證。數學上：1%風險下需連續虧損約69筆才會讓帳戶腰斬，能有效降低「破產風險」；2%僅在勝率經過驗證、停損依技術結構而非情緒設定時才合理（[TradersSecondBrain](https://traderssecondbrain.com/guides/risk-per-trade-guide)、[CMT Association](https://cmtassociation.org/presenter/ralph-vince/)）。

## 3. 停損設置

固定百分比停損簡單但忽略個別資產的波動特性；結構停損（依支撐/壓力位）更貼近市場邏輯但主觀；ATR波動停損能動態反映市場狀況。業界建議混合法：先用結構定位停損，再用ATR驗證距離是否≥1倍ATR，避免被雜訊掃損（[TradeZella](https://www.tradezella.com/blog/stop-loss-strategies)、[TradersSecondBrain](https://traderssecondbrain.com/guides/stop-loss-placement-methods)）。

## 4. 槓桿風險

槓桿越高，觸發強制平倉所需的反向波動越小：10倍槓桿約10%反向波動即爆倉，20倍僅需5%，50倍槓桿2%的逆向波動就可能歸零。業界原則：控制保證金水位、下單前先算清算價、避免滿槓桿操作（[XT Exchange](https://www.xt.com/en/blog/post/understanding-leverage-margin-and-liquidation-in-crypto-futures-trading)、[Mudrex](https://mudrex.com/learn/avoid-liquidation-in-futures-trading/)）。

## 5. 常見迷思與陷阱

- **攤平/向下加碼**：邏輯上近似馬丁格爾式加倍下注，隨虧損擴大曝險，理論上需「近乎無限資金」才能等到回本，實務常導致爆倉，是損失趨避心理偏誤的產物（[Capital.com](https://capital.com/en-int/analysis/the-martingale-approach-and-averaging-down)）。
- **過度分散 vs 集中持股**：研究顯示約16檔不相關個股即可消除93%個股特有風險；但集中持股型基金經理人年化績效常優於分散型約4%，其「最佳信念」持股單季報酬領先其他持股1.6–2.6%，過度分散反而稀釋報酬並降低擠進前段班的機率，需在分散風險與信念集中之間取捨（[Wright Research](https://www.wrightresearch.in/blog/dilemma-of-portfolio-diversification-understanding-concentrated-portfolios-alpha-prime/)）。

## 與本專案既有方法論的關聯

本章與 [`research/methodology.md`](../methodology.md) 的「總體/政策面」「籌碼/資金流向」章節互補：`methodology.md` 談的是判斷方向與訊號的方法論，本章談的是「判斷之後要下多大部位、多大風險」——兩者缺一不可，方向判斷再準，部位大小/停損管理錯了照樣爆倉。
