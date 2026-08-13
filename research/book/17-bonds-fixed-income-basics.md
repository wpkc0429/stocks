# 第十七章：債券與固定收益投資基礎

研究日期：2026-08-11

補齊全書地基缺口：《[資產配置與投資組合建構](./02-portfolio-construction.md)》（60-40／風險平價）與《[退休規劃與資產提領策略](./13-retirement-withdrawal-strategy.md)》（現金緩衝／股債配置隨年齡調整）反覆引用「股債配置」「公債殖利率」，但全書此前未解釋債券基礎機制，本章補上。

## 一、債券基本機制：票面利率、YTM、面值、存續期間

**核心原則**
- 面值（Par Value）是債券到期時償還的本金；票面利率（Coupon Rate）是發行時固定、按面值計算的年配息率，兩者發行後通常不再變動。
- 到期殖利率（YTM）則會隨市價波動：把債券未來所有配息與到期還本現金流折現、使其等於目前市價的那個利率，反映「現在用市價買進、持有到期」的真實報酬率——市價漲則 YTM 降，市價跌則 YTM 升。
- 存續期間（Duration，實務常用 Modified Duration）是理解利率風險最直覺的工具：可近似讀成「利率每變動 1%，債券價格反向變動幾 %」。例如 Modified Duration 為 4.33 的債券，利率降 1% 價格漲約 4.33%，利率升 1% 價格跌約 4.33%。
- **核心直覺**：到期天期越長、配息越低，存續期間越長，價格對利率變動就越敏感——這是本章要傳達的第一個核心概念，長天期公債/債券基金的「利率風險」遠高於短天期。
- 來源：[FINRA - Brush Up on Bonds: Interest Rate Changes and Duration](https://www.finra.org/investors/insights/bonds-interest-rate-changes-duration)、[Fidelity - Duration](https://www.fidelity.com/learning-center/investment-products/fixed-income-bonds/duration)、[iShares - Bond duration 101](https://www.ishares.com/us/insights/what-is-bond-duration)、[PIMCO - Understanding Duration](https://www.pimco.com/us/en/resources/education/understanding-duration)

## 二、殖利率與價格反向關係：2022年股債同跌的機制解釋

**核心原則**
- 當市場利率上升，新發行債券提供更高票息，舊債券的固定票息相對變得沒有吸引力，必須降價（折價）求售才能讓買家獲得等同新債的殖利率，這就是「殖利率與價格反向」的機制本質，而非單純的統計相關性。
- 天期越長的舊債，需要折價的幅度越大（呼應第一節的存續期間邏輯），因此升息週期中長天期公債的價格跌幅遠大於短天期。
- **對2022年股債同跌的補充解釋**：2022年Fed在一年內暴力升息（累計約425個基點）壓抑通膨，長天期公債因高存續期間重挫，是「債」跌的直接機制原因；同時升息也推高股票估值模型中的折現率，壓低股票本益比，是「股」跌的原因——兩者跌價的觸發源頭其實同一個（利率急升），這正是本書第二章提到「2022年股債負相關假設失靈、60/40虧損約16-17.5%」的底層債券機制解釋：不是「股債剛好一起跌」，而是「利率是兩者共同的驅動因子」，升息週期中兩者容易同向而非反向。
- 來源：[Charles Schwab - What Happens to Bonds When Interest Rates Rise?](https://www.schwab.com/learn/story/what-happens-to-bonds-when-interest-rates-rise)、[The Balance - Why Do Bond Prices Fall When Interest Rates Rise?](https://www.thebalancemoney.com/why-do-bond-prices-go-down-when-interest-rates-rise-2388565)、[A Wealth of Common Sense - The Worst Years Ever For a 60/40 Portfolio](https://awealthofcommonsense.com/2022/06/the-worst-years-ever-for-a-60-40-portfolio/)、[CNBC - Why 60/40 portfolio is on track for its 'worst year ever'](https://www.cnbc.com/2022/10/03/why-60/40-portfolio-is-on-track-for-its-worst-year-ever-says-cio.html)

## 三、信用風險與信用利差：投資等級 vs 高收益債

**核心原則**
- 投資等級（Investment Grade, IG）指 S&P/Fitch 評等 BBB- 以上、或 Moody's Baa3 以上；高收益債／垃圾債（High Yield, HY）則是 BB+/Ba1 以下。
- 兩者違約機率差距懸殊：IG 歷史年化違約率低於 0.2%，HY 則落在 3.5%–4.5% 區間，差距達十幾倍以上。
- 信用利差（Credit Spread）＝公司債殖利率－同天期公債殖利率，代表市場為承擔「違約風險＋流動性風險」額外要求的補償；HY 利差恆常高於 IG，且在市場壓力時期（如2008金融海嘯）會急遽擴大，是觀察市場恐慌情緒的重要指標。
- 來源：[Investment Grade vs High-Yield Bonds](https://investmentgrade.com/investment-grade-vs-high-yield-bonds/)、[Credit Spreads Explained: OAS, IG vs HY](https://investmentgrade.com/credit-spreads/)、[Wikipedia - High-yield debt](https://en.wikipedia.org/wiki/High-yield_debt)

## 四、殖利率曲線與倒掛：領先指標及其近年爭議

**核心原則**
- 正常殖利率曲線是長天期殖利率高於短天期，反映投資人對「更長時間鎖住資金」要求的期限風險溢酬；當短天期殖利率反而高於長天期，稱為「倒掛」（inversion），常用 2年期／10年期公債利差（2s10s）觀察。
- 倒掛之所以被視為衰退領先指標，是因為它隱含市場預期央行未來會降息應對經濟走弱——1955年以來，除一次例外，每次衰退前都出現過殖利率曲線倒掛，且倒掛後平均約一年左右衰退才出現（時間落差本身變異度也很大）。

**近年爭議（常見陷阱：把倒掛當成精準計時器）**
- 2022年7月5日2s10s倒掛，當時市場與經濟學界普遍預期2023年將出現衰退；但實際上2023年美國GDP成長2.9%，2024年二、三季仍維持3%以上年化成長，S&P 500在2023年上漲近40%，衰退遲遲未出現，形成「這次不一樣」的公開辯論。
- 這次「假警報」（或「遲到警報」）凸顯：倒掛只是機率性的領先指標，並非必然發生、時間落差也不固定，不能單獨當作擇時交易或全面撤出股市的依據，需搭配其他總經數據（就業、消費、信用利差）交叉判斷。
- 來源：[Forbes - Yield Curve Inversion Deepens](https://www.forbes.com/sites/simonmoore/2022/11/18/yield-curve-inversion-deepens-increasing-likelihood-of-2023-recession/)、[U.S. News - Inverted Yield Curve: Is it Still a Recession Indicator?](https://money.usnews.com/investing/articles/inverted-yield-curve-is-it-still-a-recession-indicator)、[CAIA - Far From Perfect: Inverted Yield Curves Don't Reliably Predict Recessions](https://caia.org/blog/2024/05/14/far-perfect-inverted-yield-curves-dont-reliably-predict-recessions-or-direction)、[TD Economics - This Time is Different for the U.S. Yield Curve](https://economics.td.com/us-time-different-yield-curve)

## 五、散戶常見的債券投資工具與常見陷阱

**核心原則：直接持有 vs 債券ETF/基金**
- 直接持有單一債券：優點是明確的到期日與到期還本金額（若不違約），適合有明確資金到期需求的情境；缺點是散戶交易成本極高——研究顯示散戶買賣單一公司債的隱含交易成本可能是機構級ETF的約220倍，且債券市場是店頭議價（OTC），透明度遠低於股市，散戶難以判斷是否拿到合理報價。
- 債券ETF/基金：優點是免申購單一發行人違約的集中度風險（一個由20檔投資等級公司債組成的梯型組合，10年內至少一檔違約的機率可達48%）、流動性佳、可維持穩定的目標存續期間；缺點是基金本身沒有「到期日」，淨值會隨市場利率持續波動，不像持有到期的單一債券能鎖定本金。
- 來源：[Empower - Individual bonds vs bond ETFs](https://www.empower.com/the-currency/life/individual-bonds-vs-bond-etfs)、[Facet - The true cost of bond ownership](https://facet.com/investing/the-true-cost-of-bond-ownership-bond-etfs-vs-individual-bonds/)、[Stanford GSB - Retail investors are making simple yet costly mistakes when trading corporate bonds](https://www.gsb.stanford.edu/insights/retail-investors-are-making-simple-yet-costly-mistakes-when-trading-corporate-bonds)

**常見陷阱**
1. **誤以為債券「零風險」**：只有「持有到期＋發行人不違約」的政府公債才近似無風險；公司債仍有信用風險，且任何債券在到期前的市價都會隨利率波動，「債券＝穩定」是常見的錯誤直覺。
2. **忽略存續期間錯配**：短期內需要動用的資金卻買進長天期債券或長存續期間債券基金，一旦升息就可能被迫在淨值低點認賠贖回，而非等到到期領回面值——這是把第一節「存續期間越長利率風險越大」的抽象概念，錯置在錯誤的資金時間軸上所致。
3. **把高收益債誤當「避險」資產**：實證顯示高收益債報酬與股市高度連動，因為兩者都反映同一套企業獲利與違約風險的經濟基本面；股市重挫、經濟前景轉差時，垃圾債價格往往同步下跌而非發揮避險效果，本質上更接近「波動較低、殖利率較高的股票」而非傳統意義的固定收益避風港。更廣泛地看，近年S&P 500與美國公債的60日滾動相關性已升至逾二十年新高，2020年以來股債同向波動的頻率提高，傳統「股跌債漲」的分散假設不再穩固可靠，這點與本書第二章對60/40與風險平價侷限的討論相互呼應。
   - 來源：[Manulife John Hancock - Understanding the correlation between stocks and bonds](https://www.jhinvestments.com/viewpoints/investing-basics/understanding-stock-bond-correlation)、[IMF - Stock-Bond Diversification Offers Less Protection From Market Selloffs](https://www.imf.org/en/blogs/articles/2026/02/18/stock-bond-diversification-offers-less-protection-from-market-selloffs)、[AllianceBernstein - High-Yield Bonds: Why Shorter May Be Smarter](https://www.alliancebernstein.com/us/en-us/investments/insights/investment-insights/high-yield-bonds-why-shorter-may-be-smarter.html)

## Sources

- [FINRA - Brush Up on Bonds: Interest Rate Changes and Duration](https://www.finra.org/investors/insights/bonds-interest-rate-changes-duration)
- [Fidelity - Duration: Understanding the Relationship Between Bond Prices and Interest Rates](https://www.fidelity.com/learning-center/investment-products/fixed-income-bonds/duration)
- [iShares - Bond duration 101: A guide for investors](https://www.ishares.com/us/insights/what-is-bond-duration)
- [PIMCO - Understanding Duration](https://www.pimco.com/us/en/resources/education/understanding-duration)
- [Charles Schwab - What Happens to Bonds When Interest Rates Rise?](https://www.schwab.com/learn/story/what-happens-to-bonds-when-interest-rates-rise)
- [The Balance - Why Do Bond Prices Fall When Interest Rates Rise?](https://www.thebalancemoney.com/why-do-bond-prices-go-down-when-interest-rates-rise-2388565)
- [A Wealth of Common Sense - The Worst Years Ever For a 60/40 Portfolio](https://awealthofcommonsense.com/2022/06/the-worst-years-ever-for-a-60-40-portfolio/)
- [CNBC - Why 60/40 portfolio is on track for its 'worst year ever'](https://www.cnbc.com/2022/10/03/why-60/40-portfolio-is-on-track-for-its-worst-year-ever-says-cio.html)
- [Investment Grade vs High-Yield Bonds](https://investmentgrade.com/investment-grade-vs-high-yield-bonds/)
- [Credit Spreads Explained: OAS, IG vs HY](https://investmentgrade.com/credit-spreads/)
- [Wikipedia - High-yield debt](https://en.wikipedia.org/wiki/High-yield_debt)
- [Forbes - Yield Curve Inversion Deepens, Increasing Likelihood Of 2023 Recession](https://www.forbes.com/sites/simonmoore/2022/11/18/yield-curve-inversion-deepens-increasing-likelihood-of-2023-recession/)
- [U.S. News - Inverted Yield Curve: Is it Still a Recession Indicator?](https://money.usnews.com/investing/articles/inverted-yield-curve-is-it-still-a-recession-indicator)
- [CAIA - Far From Perfect: Inverted Yield Curves Don't Reliably Predict Recessions](https://caia.org/blog/2024/05/14/far-perfect-inverted-yield-curves-dont-reliably-predict-recessions-or-direction)
- [TD Economics - This Time is Different for the U.S. Yield Curve](https://economics.td.com/us-time-different-yield-curve)
- [Empower - Individual bonds vs individual ETFs: Which is better?](https://www.empower.com/the-currency/life/individual-bonds-vs-bond-etfs)
- [Facet - The true cost of bond ownership: Bond ETFs vs. individual bonds](https://facet.com/investing/the-true-cost-of-bond-ownership-bond-etfs-vs-individual-bonds/)
- [Stanford GSB - Retail investors are making simple yet costly mistakes when trading corporate bonds](https://www.gsb.stanford.edu/insights/retail-investors-are-making-simple-yet-costly-mistakes-when-trading-corporate-bonds)
- [Manulife John Hancock - Understanding the correlation between stocks and bonds](https://www.jhinvestments.com/viewpoints/investing-basics/understanding-stock-bond-correlation)
- [IMF - Stock-Bond Diversification Offers Less Protection From Market Selloffs](https://www.imf.org/en/blogs/articles/2026/02/18/stock-bond-diversification-offers-less-protection-from-market-selloffs)
- [AllianceBernstein - High-Yield Bonds: Why Shorter May Be Smarter](https://www.alliancebernstein.com/us/en-us/investments/insights/investment-insights/high-yield-bonds-why-shorter-may-be-smarter.html)
