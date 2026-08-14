# 第十八章：投資策略總覽（Investment Strategies Taxonomy）

研究日期：2026-08-14

## 為什麼要有這一章

第四章（基本面分析）整理了估值方法（DCF、P/E、P/B、EV/EBITDA）與財報紅旗，第九章整理了四位投資大師的核心思想，但這本書之前沒有一張「地圖」把市場上實際存在的主要投資/交易策略**系統性分類**、講清楚每一種的具體判準、實證證據強弱、失敗模式與適合對象。這一章補這個缺口，並直接回應一個實務問題：**除了本專案 `stock-research` workflow 目前採用的「四角度交叉驗證＋保守結構確認」框架之外，市場上還有哪些做法？**

三組研究（各自獨立用 WebSearch 多輪查證，來源以 CFA Institute、AQR、BIS、Fama-French 原始論文、Morningstar、MSCI、SSRN 學術論文為主）涵蓋 16 種策略，分三大類：**長線選股風格**（價值、成長、品質、GARP、股息、多因子）、**動能/反轉/總體型**（動能順勢、反轉逆勢、利差交易、全球總體、產業輪動）、**市場中性/量化/選擇權收益**（配對交易、選擇權收益、系統化量化、市場中性、算法交易）。

**重要提醒（誠實揭露）**：這一章只經過一輪研究（三個平行代理人各查證一次），還沒有像其他章節那樣經過本書「已完成的品質把關」六輪流程（跨章節交叉驗證、獨立對抗性審稿等，見 [`README.md`](./README.md)）。內容涉及具體數字之處已標明來源，但尚未做第二輪覆核，讀者／未來作者應視為初稿而非定稿。

## 一、長線選股風格策略（Style Investing）

### 1. 價值投資（Value Investing）

核心邏輯：買進價格明顯低於內在價值的股票（Graham/Buffett式安全邊際），量化學派把這個概念轉譯成可篩選的財務比率。

- **Graham「防禦型投資人」七準則**＋Graham Number公式：√(22.5×EPS×BVPS)，隱含P/E×P/B≤22.5。來源：[Portfolio123](https://blog.portfolio123.com/a-stock-pickers-guide-to-benjamin-grahams-screening-rules/)
- **Piotroski F-Score**（9項會計準則，0–9分）：用來在低P/B股票池中篩掉體質差的「價值陷阱」。原始研究（2000）：F-Score 7–9分組合做多、0–2分組合做空，年化報酬約23%；2003–2015獨立複製：高分組合年化市場調整後報酬18.3% vs 低分組僅4%。來源：[Wikipedia](https://en.wikipedia.org/wiki/Piotroski_F-score)、[Alpha Architect](https://alphaarchitect.com/value-investing-research-simple-methods-to-improve-the-piotroski-f-score/)
- **Greenblatt魔法公式**：同時排序高資本報酬率(ROC)與高盈餘殖利率(EY)。原始回測17年平均年化30.8%（alpha 18.4%）；限於最大1000家美股時22.9%（alpha 10.5%）。來源：[Quant Investing](https://www.quant-investing.com/blog/magic-formula-performance-backtest-2000-2022)
- **實證**：Fama-French HML因子1926–2007累積報酬超過4000%；1975–1995全球12/13個市場價值股優於成長股，年化價差約7.6%。但**2007年後HML明顯失效**，至2020年中累積回撤達55%，引發「價值已死」辯論，主因是傳統帳面價值定義未能捕捉無形資產（科技股興起）。來源：[Summitward](https://summitward.com/learn/fama-french-hml)、[Morningstar](https://www.morningstar.com/portfolios/its-too-soon-say-value-premium-is-dead)、[Chicago Booth Review](https://www.chicagobooth.edu/review/value-stock-premium-shrinking)
- **風險**：價值陷阱（便宜是市場對其未來正確的悲觀預期，不是錯價），純比率篩選建議搭配品質因子檢核。來源：[Morningstar](https://www.morningstar.com/funds/dose-quality-keeps-risk-bay-value-funds)
- **適合對象**：高度耐心、長期時間軸、能承受股價長期不被市場認可的心理壓力。

### 2. 成長投資（Growth Investing）

核心邏輯：買進營收/獲利成長顯著高於平均的公司，賭未來成長會被估值消化。

- 判準：過去3–5年營收/EPS持續成長、ROE≥15%、PEG（Lynch基準1.0，實務放寬到1.5–2.0）。來源：[Morningstar](https://www.morningstar.com/investing-definitions/price-earnings-to-growth-ratio)
- 與價值投資邏輯直接對立（Fama-French數據顯示低帳面市值比股票長期平均報酬**低於**高帳面市值比股票，此即HML因子存在原因），但2007年後低利率+無形資產密集產業崛起讓成長溢價持續逾15年。
- **成長陷阱**跑輸幅度年化約13.0%，顯著大於價值陷阱的跑輸幅度——市場對成長股「不達預期」的懲罰比對價值股更嚴厲。來源：[GMO](https://www.gmo.com/americas/research-library/value-traps-vs.-growth-traps_insights)
- **風險**：高估值放大下檔（估值倍數壓縮），成長本質「不具持續性、不可預測」。
- **適合對象**：風險承受度較高、對產業/商業模式有較深研究能力、需要密切追蹤基本面變化。

### 3. 品質投資（Quality Investing）

核心邏輯：買「安全、高獲利、成長、治理良好」的公司，靠穩定高資本報酬率創造風險調整後超額報酬，挑戰「高報酬必伴隨高風險」的傳統假設。

- **MSCI Quality Index方法論**：ROE、負債權益比（越低越好）、盈餘變異度（越低越穩定）三變數Z分數平均，取品質分數最高、合計約覆蓋母指數30–40%市值的成分股。來源：[MSCI方法論PDF](https://www.msci.com/eqb/methodology/meth_docs/MSCI_Quality_Indexes_Methodology_July_2014.pdf)
- **AQR「Quality Minus Junk」(QMJ)因子**：美股與全球24國皆顯示顯著風險調整後報酬，且因子具負市場貝塔，衰退期相對抗跌。來源：[AQR/Yale PDF](http://www.econ.yale.edu/~shiller/behfin/2013_04-10/asness-frazzini-pedersen.pdf)
- Novy-Marx毛利獲利率研究、Fama-French五因子模型（2015）正式納入獲利因子(RMW)與投資因子(CMA)，證實獲利能力是獨立於價值/規模外的報酬來源。
- **實證**：過去30年9次大盤回檔（>10%）中品質股78%機率跑贏，中位數超額3.4個百分點；但**2003–2006連續4年落後**，隨後2007–2008轉為大幅跑贏（各年約+7個百分點）——顯示品質因子有明顯景氣循環特性，2024年中至今MSCI World Quality也出現過去20年最大相對回撤約11%。來源：[Barclays Private Bank](https://privatebank.barclays.com/insights/market-perspectives-september-09-2025/qualitys-quiet-strength-why-it-may-be-due-a-rebound/)
- **適合對象**：想在保有成長性同時降低波動的中長期投資人，或退休前後、風險承受度中等的投資人；需要耐心撐過落後期。

### 4. GARP（Growth at a Reasonable Price）

核心邏輯：Peter Lynch（Magellan Fund，1977–1990年化約29%）拒絕成長/價值二分法，用PEG比率找兼具成長潛力但估值合理的公司。

- **判準**：PEG=1.0為Lynch基準（低於1代表可能低估）。來源：[iShares](https://www.ishares.com/us/insights/garp-investing-etf-valuations)
- **實證侷限（誠實揭露）**：相較價值/成長/品質，GARP本身較少獨立同儕審查學術研究，多數討論來自業界評論而非嚴謹回測論文；部分學界認為GARP捕捉到的超額報酬實質上來自品質因子與估值紀律的組合，而非GARP本身是獨立統計顯著因子。
- **風險**：PEG分母（分析師預估成長率）主觀性高；在極端單邊行情（純成長牛市或深度價值行情）中容易兩頭落空。
- **適合對象**：不想承擔純成長股高波動、也不想忍受純價值股長期停滯的中庸型投資人。

### 5. 股息/收益投資（Dividend / Income Investing）

兩個子流派：股息成長型（持續調升股息）vs 高股息殖利率型（直接鎖定目前殖利率最高者）。

- **股息貴族（S&P 500 Dividend Aristocrats）**官方標準：S&P 500成分股、連續**至少25年**每年調升股息、最低市值30億美元、日均成交量至少500萬美元，2026年名單69家；「股息之王」門檻50年以上。來源：[S&P Global](https://www.spglobal.com/spdji/en/documents/research/research-sp500-dividend-aristocrats.pdf)
- **實證**：Ned Davis Research／Hartford Funds（1973–2023，約50年）：股息成長與新啟動配息組年化報酬10.2%、不配息組僅3.9%、削減/取消股息組近50年幾乎零報酬，且股息成長組beta更低——以更低風險創造更高報酬，是本章16項策略中證據最扎實明確的一項。來源：[Hartford Funds WP106.pdf](https://www.hartfordfunds.com/dam/en/docs/pub/whitepapers/WP106.pdf)
- **風險**：殖利率陷阱（股價因基本面惡化重挫，殖利率算出虛高數字，實際可能即將減配）；金融海嘯期間高殖利率ETF（VHYAX）曾下跌約45%，波動度遠高於債券，**不是固定收益的替代品**。來源：[MSCI](https://www.msci.com/research-and-insights/blog-post/beware-high-dividend-yield-traps)
- **適合對象**：股息成長型適合追求「報酬+穩定現金流」平衡的中長期投資人；高殖利率型需搭配財務體質篩選，退休族不應把它當固定收益完全替代品。

### 6. 多因子投資總覽（Factor Investing）

- 六大公認核心因子：**價值、規模、動能、品質、低波動、殖利率**。Fama-French五因子模型（市場、規模SMB、價值HML、獲利RMW、投資CMA）合計可解釋逾90%分散化投資組合的報酬差異。來源：[Fama-French原始論文PDF](https://tevgeniou.github.io/EquityRiskFactors/bibliography/FiveFactor.pdf)
- **因子擁擠（Factor Crowding）**：預測的是**尾部風險而非平均報酬**——擁擠的反轉因子崩盤機率較平時高1.7–1.8倍，但擁擠的動能因子反而崩盤風險較低，是風險訊號、不是報酬擇時訊號。來源：[arXiv](https://arxiv.org/pdf/2512.11913)
- **因子擇時普遍失敗**：AQR多篇論文結論一致，純粹靠估值高低主動輪動因子無法穩定產生超額報酬。來源：[AQR](https://www.aqr.com/Insights/Perspectives/Factor-Timing-is-Hard)
- **長期落後風險**：Vanguard明確提醒因子投資可能經歷長達**10–15年**相對落後期，特別不建議依賴因子投資作為退休期主要配置（無法承受長期跑輸又需要提領現金流）。來源：[Vanguard PDF](https://corporate.vanguard.com/content/dam/corp/research/pdf/not_all_factors_are_created_equal_factors_role_in_asset_allocation.pdf)
- **適合對象**：能承受十年以上跑輸大盤而不恐慌贖回的資深投資人，較適合年輕、投資期限長的族群。

### 六大長線選股策略比較

| 策略 | 核心優勢 | 主要弱點 | 與其他策略關係 |
|---|---|---|---|
| 價值 | 安全邊際、長期實證(HML) | 價值陷阱、2007年後因子失效 | 與成長邏輯天生對立 |
| 成長 | 捕捉高複利成長 | 高估值、成長陷阱(-13%/年) | 與價值對立，可與品質互補 |
| 品質 | 抗跌、風險調整後報酬佳 | 景氣循環性、溢價偏高期落後 | 可疊加在價值或成長之上 |
| GARP | 平衡兩端風險 | 單邊行情兩頭落空、學術實證薄弱 | 本質是「價值×品質×成長」混合 |
| 股息 | 現金流穩定、實證數據最扎實 | 殖利率陷阱、非固定收益替代品 | 股息成長股高度重疊品質因子 |
| 多因子 | 系統性、可分散 | 因子擁擠(尾部風險)、長期落後風險 | 把以上單一風格「工程化」的框架 |

## 二、動能、反轉與總體型策略

### 7. 動能投資 / 順勢交易（Momentum / Trend-Following）

核心邏輯：過去表現好的資產未來一段時間傾向持續表現好，源自投資人對新資訊反應不足、其後逐漸追價強化趨勢，形成中期（3–12個月）可預測的價格延續。與效率市場假說矛盾。

- **經典建構法「12–1動能」**：過去12個月累積報酬**排除最近1個月**做橫斷面排名，取前10–33%做多、後10–33%做空，每月重新平衡；「skip 1 month」是刻意設計，避開短期反轉效應污染訊號。
- **時間序列動能（CTA常用）**：不做排名，單一資產自己過去12個月報酬為正就做多、為負就做空，波動度加權部位，同時操作80–150個期貨市場。
- **實證**：Jegadeesh & Titman (1993) 買贏家賣輸家3–12個月持有期月均異常報酬約1%；AQR研究：動能溢酬粗估年化約6–8%（毛報酬），幾乎所有考察的資產類別、期間都呈正報酬。來源：[NBER/AQR](https://www.aqr.com/Insights/Research/Journal-Article/The-Case-for-Momentum-Investing)
- **動能崩盤（Momentum Crash）**：Daniel & Moskowitz (2014, NBER WP 20439)：動能策略長期平均正報酬，但恐慌後市場反彈階段（如1932–1939、2009年3月起）會出現劇烈負報酬串，因過去輸家此時像選擇權一樣反彈、策略仍持續放空它們。來源：[NBER](https://www.nber.org/papers/w20439)
- 動能過度擁擠後平均虧損2.2%；系統性順勢基金近三年（截至2025/08）年化虧損2.3%，顯示震盪市況表現不佳；whipsaw（假突破連續停損）是散戶最常遇到的失敗模式。
- **與本專案的關聯**：本專案 `stock-research` workflow 在2026-08-14新增了「動能策略觀點（順勢／動能型，對照用）」小節（見 [`.claude/workflows/stock-research.js`](../../.claude/workflows/stock-research.js)），正是把這裡的12–1動能邏輯套用到單一標的的技術面指標（RSI/MACD/均線方向），與 workflow 原本的保守「結構確認型」框架並列對照。
- **適合對象**：能承受長尾風險（動能崩盤）、有紀律機械化執行、追求與傳統股債低相關分散配置的投資人；適合作為傳統股債配置的補充（「危機避險」工具），不建議當主倉位。

### 8. 反轉 / 逆勢投資（Mean-Reversion / Contrarian）

核心邏輯：價格對消息過度反應，之後逐漸修正回歸均值，因此極端表現（尤其輸家）未來會反轉。

- **長期反轉**（De Bondt & Thaler, 1985）：過去3–5年表現最差的「輸家」組合，未來3年顯著跑贏「贏家」組合，效應對輸家比對贏家更明顯（不對稱）。來源：[原始論文](https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1985.tb05004.x)
- **短期反轉**（Jegadeesh, 1990）：買上月輸家賣上月贏家月均報酬約2%；週頻率上前一週贏家組合下週平均報酬約-0.35%至-0.55%，前一週輸家組合下週平均報酬約+0.86%至+1.24%。
- **重要**：短期反轉、中期動能（3–12個月）、長期反轉（3–5年）三者方向不同但**並存不矛盾**——是不同時間窗口下的不同機制，不是互相推翻。
- **風險**：短期反轉高度依賴交易成本，散戶扣除滑價/手續費後獲利空間可能大幅縮水；長期反轉輸家組合往往是基本面真正惡化的公司，存在價值陷阱風險。
- **適合對象**：偏好統計套利/量化紀律執行、對交易成本敏感度低的機構/量化投資人（短期反轉）；能忍受數年持有期的價值型投資人（長期反轉）。

### 9. 利差交易（Carry Trade）——與本專案日圓期貨研究直接相關

核心邏輯：借入低利率貨幣（融資貨幣，如日圓、瑞士法郎）、換成高利率貨幣資產，賺取利差；遠期匯率未完全反映利差（forward premium puzzle），使利差交易長期能賺正報酬。

- **報酬分布呈負偏態**：Brunnermeier, Nagel & Pedersen (2008, NBER WP 14473)：週頻率Sharpe約0.44、季頻率約0.41，週偏態約-0.41、季偏態約-0.88；正報酬是提供流動性的溢酬，負偏態源於資金約束觸發時的去槓桿骨牌效應。來源：[NBER](https://www.nber.org/papers/w14473)
- **2024年8月日圓利差交易unwind**（BIS Bulletin No. 90）：觸發為日銀7月31日政策利率0–0.1%→0.25%並宣布減半購債，加上美國7月非農僅增11.4萬（預期18.5萬）引發衰退疑慮，兩者疊加引爆全球risk-off。8月5日單日：日經TOPIX重挫12%、VIX一度飆到約65（COVID等級）、S&P 500三天內跌約6%。事件前槓桿化日圓融資部位粗估約**40兆日圓（約2,500億美元）**，且BIS認為因資料缺口可能低估；截至8/5，瑞士法郎升值約3.5%、日圓升值約6%。來源：[BIS Bulletin 90](https://www.bis.org/publ/bisbull90.htm)
- **1998年LTCM危機**：崩盤過程中日圓因carry unwind急升，觸底反彈約20%；美日央行聯手干預匯市；LTCM在美元/日圓交易上損失達2–3億美元（危機後兩週內）。
- **風險比喻**："picking up nickels in front of a steamroller"——平時穩定小賺，一旦risk-off事件發生（融資貨幣急速升值），可能瞬間吃回數年累積利差收益、甚至倒虧；一旦觸發保證金追繳，會形成「平倉→貨幣進一步升值→更多保證金追繳」的負向螺旋。
- **與本專案的關聯**：`research/jpy-futures.md` 持續追蹤的BOJ貨幣政策動向、美日利差變化，正是判斷carry unwind風險的關鍵領先指標——這一節提供的是機制層次的理解（為什麼日銀升息/美國就業數據疊加會引發劇烈日圓急升），可作為該研究筆記「總體/政策面」角度判讀的背景知識。
- **適合對象**：能承受非對稱、負偏態報酬分布的機構/對沖基金；不適合無法承受單日雙位數虧損、或高槓桿散戶帳戶。

### 10. 全球總體策略（Global Macro）

核心邏輯：依總體經濟趨勢（利率、通膨、匯率、政策、地緣政治）跨股債匯商品建立方向性部位，捕捉總體失衡或政策轉折帶來的大幅價格重估。

- **裁量型**：如George Soros，靠基本面+技術面+人為判斷決策。經典案例：1992年「Black Wednesday」，Quantum Fund建立約100億英鎊的英鎊空頭部位，賭英國無法在ERM機制內撐住匯率，單日獲利逾10億英鎊；英鎊兌馬克跌15%、兌美元跌25%；英國財政部估計此事件成本達33億英鎊。來源：[History Defined](https://www.historydefined.net/how-george-soros-broke-the-bank-of-england/)
- **系統化**：用大量總體經濟量化數據建模產生交易訊號，執行更紀律化，但仍以總體經濟情境為核心邏輯（不同於單純技術面的CTA）。
- **Ray Dalio「All Weather」實為風險平價（Risk Parity）**：依「成長」「通膨」兩軸劃分四種經濟情境，在各類資產做風險（而非資金）等權重分散（常見模擬配置：美股約30%、長天期公債40%、中天期公債15%、商品7.5%、黃金7.5%），目的是不論景氣循環處於哪個象限都有資產能表現，這是「總體驅動的被動風險分散」而非「總體驅動的主動投機」，與傳統Global Macro本質不同。
- **實證侷限（誠實揭露）**：查無單一公信力機構對Global Macro整體長期年化超額報酬的統一數字，需視個別基金/期間而定。
- **與本專案「總體/政策面」角度的差異**：本專案目前是**質化判讀**單一標的的總體背景（讀新聞、政策聲明），Global Macro則是**系統性跨資產建構方向性部位**，需要更嚴謹的部位規模控制、跨市場流動性管理與更高資金/風險承受能力——通常是機構或高淨值投資人透過對沖基金/CTA參與，不是本專案目前研究規模所需要的層次。
- **適合對象**：機構/高淨值投資人，透過對沖基金/CTA間接參與。

### 11. 產業輪動（Sector Rotation）

核心邏輯：依景氣循環階段（復甦、擴張、放緩、衰退）判斷不同產業敏感度不同，輪動配置。

- **實證證據明確偏弱、且遭學界直接批評**：Molchanov & Stangl, "The Myth of Business Cycle Sector Rotation" (2024, *International Journal of Finance & Economics*)：檢視1948–2022年美國資料，**沒有證據支持系統性產業表現規律存在**；即使放寬假設，可預測性也與隨機猜測無顯著差異；即便存在少量超額報酬，計入交易成本後也迅速消失。來源：[Wiley](https://onlinelibrary.wiley.com/doi/full/10.1002/ijfe.2882)
- 這是本章16項策略中，學術實證支持力道**最弱**的一項——多篇研究明確以「myth（迷思）」為題。
- **適合對象**：更適合作為質化的資產配置參考框架（輔助判斷大盤/產業板塊相對強弱背景），而非獨立、可長期產生超額報酬的量化交易策略；應與其他角度交叉驗證，不宜單獨依賴。

## 三、市場中性、量化與選擇權收益策略

### 12. 配對交易 / 統計套利（Pairs Trading / Statistical Arbitrage）

核心邏輯：找兩檔歷史高度相關的標的，價差偏離歷史區間時做多低估者、放空高估者，賭價差回歸均值，屬市場中性策略。

- 方法：距離法（標準化價格歐氏距離選配對）或共整合法（檢定線性組合是否為定態序列）；常見進場門檻為價差偏離歷史均值2個標準差。
- **實證**：Gatev, Goetzmann & Rouwenhorst (2006, *RFS*)：1962–2002年美股資料，前20大配對自我融資組合年化超額報酬最高約12%，對五因子模型風險暴露很小。來源：[SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=141615)
- **報酬長期衰退（alpha decay）**：Do & Faff (2010, *Financial Analysts Journal*)：前20大配對月均超額報酬從1962–1988年的0.86%，降至1989–2002年的0.37%，再降至2003–2009年僅0.24%——量化基金競爭湧入相同交易邏輯是主因。**誠實揭露**：2010年後查無同等權威的量化更新數字，只有「持續遭競爭稀釋」的質化描述。來源：[CFA Institute](https://rpc.cfainstitute.org/research/financial-analysts-journal/2010/does-simple-pairs-trading-still-work)
- **2007年「量化危機」**：多支統計套利基金因持有高度重疊多空部位，在無基本面劇烈變動情況下因同業被迫同時平倉去槓桿而集體虧損——顯示此類策略並非「無風險」。
- **適合對象**：需要程式化執行、即時監控與槓桿/融券帳戶的機構或高度自動化量化投資人。

### 13. 選擇權收益策略（Options Income Strategies）

（本書第十章已涵蓋選擇權基礎機制含台指選擇權TXO特性，這裡只講「用選擇權建構的具體收益策略」）

核心邏輯：選擇權賣方收取權利金，本質是出售「波動率保險」；選擇權隱含波動率長期系統性高於事後實現波動率（波動率風險溢酬 Variance Risk Premium），是掩護性買權、現金擔保賣權、輪動策略的共同獲利來源。

- **具體操作**：掩護性買權(Covered Call)——持股同時賣出價外買權；現金擔保賣出賣權(Cash-Secured Put)——預留現金賣出願意接手價位的賣權；輪動策略(The Wheel)——CSP未被指派則反覆收權利金，被指派後轉賣Covered Call，循環進行。
- **實證數據**：CBOE S&P 500 BuyWrite Index（BXM，1986/6/20起）年化報酬約8.4%、波動度約10.7%，相對S&P 500 total return年化約10.9%、波動度約15.2%；最大回撤BXM約35.8% vs S&P 500約50.9%。**夏普比率數字來源不一致**（誠實揭露）：一份報告估BXM約0.53、S&P500約0.54（接近持平）；另一份估BXM約0.52、S&P500約0.30（BXM明顯較優）——無法給出單一權威結論。來源：[CBOE Factsheet](https://cdn.cboe.com/resources/indices/factsheet/CboeGlobalIndices_BXM-Index.pdf)
- **AQR分解研究**（Israelov & Nielsen, 2015）：covered call報酬可分解為股票曝險（貢獻多數風險與報酬）、放空波動率曝險（Sharpe接近1.0，僅約10%風險）、「股價反轉」曝險（約25%風險但幾乎不提供對應報酬，屬未被補償的曝險）；剔除此無效曝險的風險管理版本Sharpe更優、波動度更低。來源：[AQR](https://images.aqr.com/-/media/AQR/Documents/Insights/Journal-Article/Covered-Calls-Uncovered.pdf)
- **常被忽略的風險**：報酬分布左偏（凹形payoff）——正常市況穩定賺小額權利金，急跌時虧損不成比例放大，本質是「賣崩盤保險」，2008年這類策略曾出現負報酬；上檔獲利封頂但下檔仍完全暴露，並非真正避險。
- **適合對象**：本來就想長期持有、願在特定價位接手標的的投資人，追求穩定現金流、能承受上檔封頂/下檔完全暴露；不適合當成「無風險穩定收益」工具或用於高波動/財報前後標的。

### 14. 系統化 / 量化交易總覽（Systematic / Quantitative Trading）

- **與本專案四角度質化判讀的本質差異**：系統化交易是「規則先行、情緒後置」——訊號完全由預先定義、可回測的規則決定，不論市況機械化執行；本專案的四角度（總體/技術/新聞/籌碼）是綜合質化判讀，依賴人工整合多方資訊、動態權重調整。文獻普遍指出兩者互補而非替代：量化在資訊充分、常態市況表現較佳；人工判讀在資訊不確定、經濟劇變時可能更具彈性。
- 常見分類：統計套利（見上）、因子模型/Smart Beta、機器學習選股（**來源不確定，誠實揭露**：「22個成熟市場、194個因子」研究出處在原始搜尋中未附精確論文連結，建議寫作前再次確認）。
- **散戶可行性**：一般散戶欠缺機構級資料、運算能力、低延遲執行與嚴謹回測基礎設施，直接複製機構量化策略不切實際；較務實路徑是透過「間接參與」——低成本多因子ETF（費用率約0.15–0.50%/年）或量化基金。Morningstar研究：即使專業主動管理基金，長期（10年）僅約21%能打敗被動指數對手，大型股主動基金更僅約7%存活且打敗被動同儕——側面印證量化/主動選股長期超額報酬本就稀少且集中於少數低成本、有紀律執行的產品，這與本書第14章（DCA vs一次投入）強調的「低成本、紀律化」主題一致。來源：[Morningstar](https://www.morningstar.com/funds/measuring-performance-active-funds-against-their-passive-peers)
- **散戶自建系統化策略的常見失敗**：回測過度擬合歷史資料（look-ahead bias、data snooping）、忽略交易成本與滑價、樣本外表現大幅劣於回測（詳見第五章「回測與策略驗證方法論」）。

### 15. 市場中性策略總論（Market-Neutral Strategies / Long-Short Equity）

- 核心邏輯：多空對沖同時持有多頭與空頭部位，選股邏輯來自個股相對強弱判斷（alpha），非賭大盤方向；股票市場中性（EMN）進一步要求淨曝險趨近於零。
- **與純做多策略的風險報酬差異**：波動度更低（放空部位對沖系統性市場風險），但報酬上限也更低（不承擔市場貝他值，無法享受牛市系統性上漲），通常須動用槓桿放大選股相對報酬，槓桿同時放大選股錯誤時的虧損。
- **對散戶的可行性評估**：放空需融資融券帳戶與保證金，股價上漲可能收到保證金追繳，未能補足會被強制平倉；損益結構不對稱（獲利上限100%，虧損理論無上限）；券源可能被隨時召回；**軋空(short squeeze)風險**——放空比例達流通股數約20%以上時，任何利多都可能引發連鎖強制回補，造成股價脫離基本面的暴力上漲，即使選股邏輯正確也可能被迫在錯誤時點認賠。
- **適合對象**：有機構級融券管道、能嚴謹控管槓桿與保證金水位的專業投資人；一般散戶若想取得類似低相關性效果，透過市場中性避險基金產品或相關ETF間接參與較務實。

### 16. 算法交易 / 高頻交易概述（Algorithmic Trading / HFT）

- 概述：HFT是演算法交易子集，強調極高速度、極短持有時間，利用市場微結構層級（訂單簿深度、報價更新）的短暫失衡獲利，依賴共同定位、微波網路將延遲壓縮到毫秒/微秒級；目前約佔美股交易量與美國公債交易量各約50%。
- **對市場微結構的影響是雙面的**：一方面提升日內波動度（估計約增加30%）、對新資訊反應更快；另一方面市場壓力期間HFT提供的流動性可能驟降（估計約40%），放大流動性緊縮時的價格波動。對散戶效果好壞參半：報價價差普遍收窄降低隱含成本（正面），但散戶承受的有效價差比例可能較高、積極單成交比例較低（負面）。
- **為何不是散戶可行策略**：共同定位、專屬硬體、微波/雷射通訊網路等基礎設施投入是機構級資本規模，散戶完全無法在延遲維度競爭。
- **與第六章（市場微結構與交易執行）的關聯**：了解HFT存在，有助理解為何許多依賴極短線價格型態的技術訊號容易被更快的演算法提前反應、訊號失效或滑價侵蝕獲利——市場價格發現速度已被HFT大幅壓縮，單純技術面短線訊號的邊際優勢持續被侵蝕。

## 四、十六種策略總表

| 策略 | 時間軸 | 核心風險特性 | 實證強度 | 散戶可行性 |
|---|---|---|---|---|
| 價值投資 | 長期(數年) | 價值陷阱 | 強，但2007後減弱 | 高 |
| 成長投資 | 中長期 | 高估值/成長陷阱 | 中（與價值互為表裡） | 高 |
| 品質投資 | 長期 | 景氣循環性落後 | 強 | 高（可用Smart Beta ETF） |
| GARP | 中長期 | 單邊行情兩頭落空 | 弱（缺嚴謹學術數據） | 高 |
| 股息/收益投資 | 長期 | 殖利率陷阱 | 最強（Ned Davis 50年數據） | 高 |
| 多因子投資 | 長期(10年+) | 因子擁擠、長期落後 | 強 | 高（因子ETF） |
| 動能/順勢交易 | 中期(3-12月) | 動能崩盤、whipsaw | 強 | 中（可用CTA基金） |
| 反轉/逆勢投資 | 短期或3-5年 | 交易成本侵蝕/價值陷阱 | 中強 | 低（短期）～中（長期） |
| 利差交易 | 中期 | 負偏態尾部風險 | 強（但風險極不對稱） | 低（不建議散戶槓桿操作） |
| 全球總體策略 | 不定 | 集中部位/總體誤判 | 查無統一數字 | 極低（需機構管道） |
| 產業輪動 | 中期(景氣循環) | 階段誤判 | 最弱（學界稱為myth） | 低（僅作質化參考） |
| 配對交易/統計套利 | 短中期 | 共整合斷裂、擁擠反轉 | 中（持續衰退中） | 極低（需量化基建） |
| 選擇權收益策略 | 每月滾動 | 左尾風險不對稱 | 中（BXM數據明確但夏普比率有爭議） | 中 |
| 系統化/量化交易 | 不定 | 過擬合、樣本外失效 | 依方法而異 | 低（建議間接參與） |
| 市場中性策略 | 不定 | 軋空、保證金追繳 | 中 | 低（放空成本高） |
| 算法交易/HFT | 極短(毫秒級) | 無法參與、僅供理解 | 不適用 | 不可行 |

## 五、與本專案既有內容的關聯

- **第四章（基本面分析）**提供估值工具箱（DCF、P/E、P/B等），這一章展示不同「流派」如何用不同方式運用/組合這些工具。
- **第九章（經典書籍架構）**的四位作者立場對應本章不同策略：Malkiel的效率市場假說是對本章所有主動策略的隱性質疑；Graham的安全邊際即價值投資的思想源頭；Livermore的順勢而為、阻力最小路徑是動能/順勢交易的心理根源；Schwager訪談歸納的「嚴格風控紀律」則適用於本章全部16種策略，不分流派。
- **第一章（風險管理與部位大小）**的部位規模、停損原則適用於任何一種策略——策略決定「往哪個方向下注」，第一章決定「下多大注、什麼時候認錯」，兩者缺一不可。
- **第七章（資產類別特性）**：利差交易與全球總體策略天生跨資產類別，操作前應回頭參考該章的資產特性差異。
- **`research/methodology.md`** 的四個戰術分析角度（總體/政策面、技術面/價位、新聞/催化事件、籌碼/資金流向）**不等於本章任何單一策略**，而是偏向「不特定押注單一流派、要求多角度互相印證才進場」的**保守判讀方法論**，精神上更接近Graham的審慎與Schwager的風控紀律，刻意避免動能/順勢交易那種「訊號出現就進場」的機械化觸發。這一點在 `.claude/workflows/stock-research.js` 的 Synthesize 階段體現得最清楚：2026-08-14新增了「動能策略觀點（順勢／動能型，對照用）」小節，與原本的「進場策略框架（保守／結構確認型）」並列——前者對應本章第7節動能投資的12–1判準邏輯，後者對應本書整體的保守方法論，兩者刻意分開寫、不混為一談，讓讀者自行選擇適合自己風險偏好的框架。
- **`research/jpy-futures.md`**：第9節利差交易的機制解釋（BOJ升息+美國就業數據如何觸發carry unwind），為該研究筆記持續追蹤的「總體/政策面」角度提供了機制層次的背景知識。

## 查證侷限誠實揭露（彙整）

- BXM（選擇權收益策略）夏普比率在不同來源間數字不一致，已於第13節明確標註、不強行給單一結論。
- GARP作為獨立學術因子缺乏嚴謹同儕審查數據，已於第4節標註為業界觀察而非統計顯著實證。
- 統計套利2010年後的量化衰退數字查無同等權威更新，僅有質化描述（第12節）。
- 全球總體策略整體長期超額報酬查無單一公信力機構統一數字（第10節）。
- 機器學習選股「22個成熟市場、194個因子」研究出處未附精確論文連結，建議之後再核實（第14節）。
- BIS Bulletin 90原始PDF因格式問題無法直接解析全文，改用WebSearch交叉多篇引用該文獻的媒體/學術報導取得具體數字，內容與BIS官方頁面摘要一致，但建議日後有需要逐字引用時另外核對原文（第9節）。

## 來源清單

**長線選股風格**：[CFA Institute價值/成長對比](https://rpc.cfainstitute.org/research/financial-analysts-journal/2018/ip-v3-n1-16-explaining-value-vs-growth-investing)、[Fama-French HML](https://summitward.com/learn/fama-french-hml)、[Piotroski F-score](https://en.wikipedia.org/wiki/Piotroski_F-score)、[Magic Formula回測](https://www.quant-investing.com/blog/magic-formula-performance-backtest-2000-2022)、[價值溢酬辯論](https://www.morningstar.com/portfolios/its-too-soon-say-value-premium-is-dead)、[成長陷阱](https://www.gmo.com/americas/research-library/value-traps-vs.-growth-traps_insights)、[MSCI Quality方法論](https://www.msci.com/eqb/methodology/meth_docs/MSCI_Quality_Indexes_Methodology_July_2014.pdf)、[AQR QMJ](http://www.econ.yale.edu/~shiller/behfin/2013_04-10/asness-frazzini-pedersen.pdf)、[品質因子景氣循環性](https://privatebank.barclays.com/insights/market-perspectives-september-09-2025/qualitys-quiet-strength-why-it-may-be-due-a-rebound/)、[GARP/PEG](https://www.ishares.com/us/insights/garp-investing-etf-valuations)、[股息貴族標準](https://www.spglobal.com/spdji/en/documents/research/research-sp500-dividend-aristocrats.pdf)、[Hartford/Ned Davis股息實證](https://www.hartfordfunds.com/dam/en/docs/pub/whitepapers/WP106.pdf)、[殖利率陷阱](https://www.msci.com/research-and-insights/blog-post/beware-high-dividend-yield-traps)、[五因子模型](https://tevgeniou.github.io/EquityRiskFactors/bibliography/FiveFactor.pdf)、[因子擁擠](https://arxiv.org/pdf/2512.11913)、[因子擇時失敗](https://www.aqr.com/Insights/Perspectives/Factor-Timing-is-Hard)、[Vanguard因子長期落後風險](https://corporate.vanguard.com/content/dam/corp/research/pdf/not_all_factors_are_created_equal_factors_role_in_asset_allocation.pdf)

**動能/反轉/總體**：[Jegadeesh & Titman 1993](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.1993.tb04702.x)、[AQR動能研究](https://www.aqr.com/Insights/Research/Journal-Article/The-Case-for-Momentum-Investing)、[Daniel & Moskowitz動能崩盤](https://www.nber.org/papers/w20439)、[De Bondt & Thaler長期反轉](https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1985.tb05004.x)、[Jegadeesh短期反轉](https://alphaarchitect.com/quantitative-momentum-research-short-term-return-reversal/)、[BIS利差交易unwind](https://www.bis.org/publ/bisbull90.htm)、[Brunnermeier利差交易負偏態](https://www.nber.org/papers/w14473)、[LTCM案例](https://www.bauer.uh.edu/rsusmel/7386/ltcm-2.htm)、[Soros英鎊放空案例](https://www.historydefined.net/how-george-soros-broke-the-bank-of-england/)、[All Weather風險平價](https://www.optimizedportfolio.com/all-weather-portfolio/)、[產業輪動迷思論文](https://onlinelibrary.wiley.com/doi/full/10.1002/ijfe.2882)

**市場中性/量化/選擇權收益**：[Gatev配對交易](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=141615)、[Do & Faff報酬衰退](https://rpc.cfainstitute.org/research/financial-analysts-journal/2010/does-simple-pairs-trading-still-work)、[CBOE BXM Factsheet](https://cdn.cboe.com/resources/indices/factsheet/CboeGlobalIndices_BXM-Index.pdf)、[AQR Covered Calls分解](https://images.aqr.com/-/media/AQR/Documents/Insights/Journal-Article/Covered-Calls-Uncovered.pdf)、[The Wheel策略](https://www.schwab.com/learn/story/three-things-to-know-about-wheel-strategy)、[主動基金長期表現](https://www.morningstar.com/funds/measuring-performance-active-funds-against-their-passive-peers)、[市場中性策略介紹](https://www.caisgroup.com/articles/an-introduction-to-long-short-equity-strategies)、[軋空機制](https://www.heygotrade.com/en/blog/short-squeeze-explained/)、[HFT對流動性的雙面影響](https://www.gc.cuny.edu/sites/default/files/2022-01/HFT_Liquidity_2.pdf)
