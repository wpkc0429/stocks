# 第六章：市場微結構與交易執行

研究日期：2026-08-11

## 一、訂單類型：使用時機與風險

**核心原則**
- 這本質是「速度 vs. 價格確定性」的取捨：市價單保證成交、不保證價格；限價單保證價格、不保證成交。一般進場/停利建議用限價單，緊急出場（停損）建議用市價單以確保能出場（[MNCL](https://www.mnclgroup.com/market-order-vs-limit-order-key-differences-every-trader-must-know)、[StockTitan](https://www.stocktitan.net/articles/market-vs-limit-orders-complete-guide)）。
- 停損單分兩種：停損市價單（觸價後保證成交、犧牲價格）、停損限價單（觸價後保證價格、但行情跳空時可能完全不成交，部位曝險持續擴大）。多數散戶的停損應優先選市價停損，因為「防止災難性虧損」比「控制滑價」更重要（[Topstep](https://help.topstep.com/en/articles/8765442-understanding-slippage-in-the-futures-market-causes-and-mitigation-strategies)）。

**常見陷阱**
- 在流動性稀薄或開盤/收盤前後使用市價單，容易吃掉整個淺薄的委託簿，付出遠超預期的成交價（[Coin Bureau](https://coinbureau.com/education/crypto-order-types)）。
- 美股盤前盤後多數券商強制只能用限價單，就是因為市場深度不足時市價單風險失控（[FINRA](https://www.finra.org/investors/insights/extended-hours-trading)）。

## 二、滑價：成因、估算與控制

**核心原則**
- 滑價＝預期成交價與實際成交價的落差，主因是流動性不足、高波動、以及使用市價單本身（[WazirX](https://wazirx.com/blog/slippage-in-crypto-futures/)）。期貨/加密貨幣因槓桿放大，滑價對保證金與強平風險的影響會被放大（[BTCC](https://www.btcc.com/en-US/academy/crypto-trading/trading-guide/how-to-reduce-slippage-in-crypto-futures)）。
- 估算方法：可用 ATR 等波動指標搭配歷史回測、觀察委託簿深度來預估滑價幅度；機構做法會用當日成交量、波動度、價差、單量規模建模「市場衝擊」（[Talos](https://www.talos.com/insights/execution-alphas-in-crypto-markets-predicting-volume-volatility-and-spreads-to-reduce-slippage)）。

**控制方式**
- 優先用限價單、檢查委託簿深度、選流動性佳的合約、避開重大新聞公布時段與市場剛開盤瞬間下大單（[pickmytrade](https://blog.pickmytrade.trade/slippage-in-futures-trading/)）；加密貨幣交易所可設定「滑價容忍度」上限，超出範圍自動不成交（[Kairon Labs](https://kaironlabs.com/blog/crypto-market-making-101-what-is-slippage-and-slippage-tolerance)）。

## 三、買賣價差對短線獲利的侵蝕

**核心原則**
- 價差是「隱藏成本」：一買一賣立即產生等於價差的虧損，標的價格得先漲超過價差才打平，交易頻率越高、影響越大——短線交易者受價差的傷害往往大於受手續費或基金內扣費用的傷害（[RedChip](https://www.redchip.com/education/bid-ask-spread)）。

**常見陷阱**
- 流動性差的小型股價差可達流動股的數倍，小型股交易成本可能高出近 5 倍，價差常是整筆交易中最大的成本項目，甚至超過手續費（[ScienceDirect](https://www.sciencedirect.com/topics/economics-econometrics-and-finance/bid-ask-spread)、[Securities Exams Mastery](https://securitiesexamsmastery.com/stock-market-investing/placing-trades/liquidity-and-bid-ask-spreads/)）。

## 四、開盤/收盤與夜盤的特殊陷阱

**國際市場（美股盤前盤後）**
- 盤後成交量可能只剩正常時段的一成，單一大戶委託即可讓股價瞬間跳動 2–3%；價差可從日盤的 $0.02 放大到 $0.50 以上（[moomoo](https://www.moomoo.com/us/learn/detail-premarket-trading-and-after-hours-trading-117698-241140187)）。多數委託有可能只部分成交或完全不成交（[HeyGo](https://www.heygotrade.com/en/blog/understanding-pre-market-trading/)）。

**台指期夜盤**
- 夜盤尾盤、凌晨薄量時段容易因流動性枯竭而加速崩跌，價差放大、掛單不易成交；月選擇權尤其明顯，成交量多集中在價外少數履約價（[風傳媒](https://www.storm.mg/article/11150767)）。國際突發事件常在夜盤時段引發跳空，槓桿又放大損益，故不建議「裸倉過夜」，應同時掛好停損並避開凌晨薄量時段重倉進出（[capfutures](https://capfutures.com/taifex-night-session-guide/)）。

## Sources

- [Market vs Limit vs Stop Orders in Crypto — BloFin](https://blofin.com/en/academy/education/market-vs-limit-vs-stop-orders)
- [Crypto Order Types Explained — Coin Bureau](https://coinbureau.com/education/crypto-order-types)
- [Market Order vs Limit Order — MNCL](https://www.mnclgroup.com/market-order-vs-limit-order-key-differences-every-trader-must-know)
- [Understanding Slippage in the Futures Market — Topstep](https://help.topstep.com/en/articles/8765442-understanding-slippage-in-the-futures-market-causes-and-mitigation-strategies)
- [What Is Slippage In Crypto Futures Trading — WazirX](https://wazirx.com/blog/slippage-in-crypto-futures/)
- [How to Reduce Slippage in Crypto Futures — BTCC](https://www.btcc.com/en-US/academy/crypto-trading/trading-guide/how-to-reduce-slippage-in-crypto-futures)
- [Execution Alphas in Crypto Markets — Talos](https://www.talos.com/insights/execution-alphas-in-crypto-markets-predicting-volume-volatility-and-spreads-to-reduce-slippage)
- [Slippage in Futures Trading — pickmytrade](https://blog.pickmytrade.trade/slippage-in-futures-trading/)
- [Crypto Market Making 101: Slippage & Slippage Tolerance — Kairon Labs](https://kaironlabs.com/blog/crypto-market-making-101-what-is-slippage-and-slippage-tolerance)
- [Bid-Ask Spread — RedChip](https://www.redchip.com/education/bid-ask-spread)
- [Bid-Ask Spread — ScienceDirect](https://www.sciencedirect.com/topics/economics-econometrics-and-finance/bid-ask-spread)
- [Liquidity and Bid-Ask Spreads in Stock Trading — Securities Exams Mastery](https://securitiesexamsmastery.com/stock-market-investing/placing-trades/liquidity-and-bid-ask-spreads/)
- [Pre-Market and After-Hours Trading — moomoo](https://www.moomoo.com/us/learn/detail-premarket-trading-and-after-hours-trading-117698-241140187)
- [Understanding Pre-Market Trading: Risks and Opportunities — HeyGo](https://www.heygotrade.com/en/blog/understanding-pre-market-trading/)
- [Extended-Hours Trading: Know the Risks — FINRA](https://www.finra.org/investors/insights/extended-hours-trading)
- [台指期夜盤不會「斷頭」，但還是要注意保證金 — 風傳媒](https://www.storm.mg/article/11150767)
- [台指期夜盤完整指南 — capfutures](https://capfutures.com/taifex-night-session-guide/)
