# 第七章：不同資產類別的交易特性差異

研究日期：2026-08-11
（涵蓋股票 vs 期貨 vs 外匯 vs 加密貨幣）

## 1. 期貨特有風險

**核心原則**
- 保證金追繳（Margin Call）：帳戶淨值跌破「維持保證金」門檻即觸發追繳通知，須限期補足資金或被強制平倉；槓桿越高，追繳發生機率越高。([itiger.com](https://www.itiger.com/hans/news/2540763031))
- 換月/展倉（Rollover）風險：合約到期前需將部位轉往次月合約，展倉當日流動性驟降、價差擴大，容易滑價；實物交割合約須在「最後通知日」前平倉，現金結算合約則要在「最後交易日」前處理，逾期可能被券商強制平倉或觸發實物交割。([CME Group](https://www.cmegroup.com/education/courses/introduction-to-futures/understanding-futures-expiration-contract-roll); [Bucko](https://www.bucko.ai/learn/contract-rollover-risk-futures))
- 正價差（Contango）長期持有會產生「負展期收益」，逐月侵蝕報酬，是商品期貨ETF長期跑輸現貨的主因；逆價差（Backwardation）則反向帶來正展期收益。([Schwab](https://www.schwab.com/learn/story/contango-and-backwardation-explained); [Fidelity](https://www.fidelity.com/learning-center/investment-products/etf/commodity-etfs-contango-backwardation))

**常見陷阱**：把展倉日舊合約的成交量/技術線型誤當新合約參考；長期持有正價差商品期貨卻忽略展期成本侵蝕。

## 2. 外匯市場特性

**核心原則**
- 24小時交易（週一雪梨開盤至週五紐約收盤），可即時反應總經數據與央行決策。([Capital.com](https://capital.com/en-int/learn/glossary/forex-24-hours-trading))
- 常見槓桿高達50:1~500:1，遠超股票；100:1槓桿下保證金僅需部位價值的1%。([Schwab](https://www.schwab.com/learn/story/what-is-leverage-forex-trading-understanding-forex-margin); [PU Prime](https://www.puprime.com/forex-leverage-explained/))
- 央行干預常以「波動速度」而非固定價位觸發，會瞬間擊穿關鍵支撐/阻力，使技術線型短期失靈；以日銀干預日圓為例，2024年干預後匯價曾跌破均線與費波南希關卡，但若基本面未變，效果往往只是「拖慢漲勢」而非扭轉趨勢，事後常回測至原阻力區。([MarketPulse/OANDA](https://www.marketpulse.com/markets/the-bank-of-japans-fx-intervention-mechanism-impact-and-historical-precedent/); [Forex.com](https://www.forex.com/en-us/news-and-analysis/usd-jpy-outlook-the-rules-of-intervention-just-changed/))

**常見陷阱**：高槓桿放大微小匯率波動的損益，卻低估追繳風險；過度信賴技術分析而忽視關口價位背後的干預政策風險。

## 3. 加密貨幣市場特性

**核心原則**
- 真正24/7無收盤、無週末休市，波動不因假期而停歇。([Changelly](https://changelly.com/blog/overbought-vs-oversold/))
- 監管仍高度不確定：2025年SEC與NYDFS陸續就經紀商保管加密資產發布新指引，但全球規則仍不統一。([Dechert](https://www.dechert.com/knowledge/onpoint/2026/1/sec-staff-clarifies-broker-dealer-custody-and-trading-of-crypto-.html); [Arnold & Porter](https://www.arnoldporter.com/en/perspectives/advisories/2025/10/new-crypto-guidance-on-custody-and-blockchain-analytics))
- 交易所風險 vs 自我保管：自我保管（私鑰自持）可消除對手方風險，但私鑰遺失即無法追回資金；FTX倒閉等事件凸顯交易所託管的對手方風險。
- 與美股相關性顯著提高：2025年BTC與NASDAQ100平均相關係數達0.52（2024年僅0.23），與S&P500相關係數視期間介於0.5~0.88，分散效果較2018-2020年「不相關階段」明顯下降，部分原因是機構資金與AI科技股情緒同步驅動。([CME Group](https://www.cmegroup.com/insights/economic-research/2025/why-is-bitcoin-moving-in-tandem-with-equities.html); [Yahoo Finance](https://finance.yahoo.com/news/bitcoins-2025-rollercoaster-may-end-050859649.html))

**常見陷阱**：誤把加密貨幣當作「避險/不相關」資產配置，實際上已與科技股連動更緊密；把交易所帳戶餘額誤當同等於資產安全，忽視平台倒閉風險。

## 4. 技術指標跨資產調整

**核心原則**
- RSI：傳統70/30門檻在高波動資產（加密貨幣、強趨勢股）容易長時間停留在超買/超賣區而失去訊號意義，許多交易者改用80/20，山寨幣甚至更極端。([Changelly](https://changelly.com/blog/rsi-relative-strength-index-in-crypto/); [ecrypto1.com](https://ecrypto1.com/2025/12/26/adapts-classic-technical-indicators-for-cryptos-247-high-volatility-context-shows-what-overboughtoversold-really-means-in-a-crypto-bull-run/))
- 布林通道：加密貨幣波動度約為股票的4-5倍，建議用20期、2.5~3.0標準差取代標準2.0，減少假訊號；穩定的藍籌股則可用更窄的1.5~2.0以提高敏感度。([Mudrex](https://mudrex.com/learn/bollinger-bands-in-crypto-trading/))
- MACD：高波動資產建議拉長平滑週期以濾除雜訊，避免頻繁假交叉。([Gate Web3](https://web3.gate.com/crypto-wiki/article/how-to-use-technical-indicators-macd-rsi-and-bollinger-bands-for-crypto-trading-in-2026-20260204))

**常見陷阱**：全資產類別套用同一組預設參數（如把股票慣用的70/30 RSI直接套用加密貨幣），在強趨勢中系統性地「太早出場」；忽略先校準波動度差異就下單。

## Sources

- [Contango vs. Backwardation | Charles Schwab](https://www.schwab.com/learn/story/contango-and-backwardation-explained)
- [Commodity ETFs: Contango/Backwardation | Fidelity](https://www.fidelity.com/learning-center/investment-products/etf/commodity-etfs-contango-backwardation)
- [Mastering Futures Margin Calls | iTiger](https://www.itiger.com/hans/news/2540763031)
- [Understanding Futures Expiration & Contract Roll | CME Group](https://www.cmegroup.com/education/courses/introduction-to-futures/understanding-futures-expiration-contract-roll)
- [Contract Rollover Risk for Futures Traders | Bucko](https://www.bucko.ai/learn/contract-rollover-risk-futures)
- [Forex 24/5 Trading | Capital.com](https://capital.com/en-int/learn/glossary/forex-24-hours-trading)
- [Understanding Forex Margin | Charles Schwab](https://www.schwab.com/learn/story/what-is-leverage-forex-trading-understanding-forex-margin)
- [Forex Leverage Explained | PU Prime](https://www.puprime.com/forex-leverage-explained/)
- [The Bank of Japan's FX Intervention | MarketPulse/OANDA](https://www.marketpulse.com/markets/the-bank-of-japans-fx-intervention-mechanism-impact-and-historical-precedent/)
- [USD/JPY Outlook: The rules of intervention just changed | Forex.com](https://www.forex.com/en-us/news-and-analysis/usd-jpy-outlook-the-rules-of-intervention-just-changed/)
- [SEC Staff Clarifies Broker-Dealer Custody Rules for Crypto Assets | Dechert](https://www.dechert.com/knowledge/onpoint/2026/1/sec-staff-clarifies-broker-dealer-custody-and-trading-of-crypto-.html)
- [SEC and NYDFS Release New Crypto Guidance on Custody | Arnold & Porter](https://www.arnoldporter.com/en/perspectives/advisories/2025/10/new-crypto-guidance-on-custody-and-blockchain-analytics)
- [Why is Bitcoin Moving in Tandem with Equities? | CME Group](https://www.cmegroup.com/insights/economic-research/2025/why-is-bitcoin-moving-in-tandem-with-equities.html)
- [Bitcoin's 2025 rollercoaster may end on a low | Yahoo Finance](https://finance.yahoo.com/news/bitcoins-2025-rollercoaster-may-end-050859649.html)
- [Overbought & Oversold Crypto Indicators: RSI, StochRSI | Changelly](https://changelly.com/blog/overbought-vs-oversold/)
- [How to Use RSI in Crypto Trading | Changelly](https://changelly.com/blog/rsi-relative-strength-index-in-crypto/)
- [Adapts classic technical indicators for crypto's 24/7 context | eCRYPTO1](https://ecrypto1.com/2025/12/26/adapts-classic-technical-indicators-for-cryptos-247-high-volatility-context-shows-what-overboughtoversold-really-means-in-a-crypto-bull-run/)
- [Bollinger Bands in Crypto Trading | Mudrex](https://mudrex.com/learn/bollinger-bands-in-crypto-trading/)
- [How to Use MACD, RSI, and Bollinger Bands for Crypto Trading | Gate Web3](https://web3.gate.com/crypto-wiki/article/how-to-use-technical-indicators-macd-rsi-and-bollinger-bands-for-crypto-trading-in-2026-20260204)
