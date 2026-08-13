# 第二章：資產配置與投資組合建構

研究日期：2026-08-11（2026-08-11 補充：債券基礎機制另見 [第十七章：債券與固定收益投資基礎](./17-bonds-fixed-income-basics.md)，本章「60/40」「股債負相關」等討論所需的殖利率、存續期間、殖利率倒掛等背景知識已移至該章詳述，避免重複）

## 一、現代投資組合理論（MPT）核心概念與侷限

**核心原則**
- MPT（Markowitz, 1952）主張透過「效率前緣」，在給定風險下追求最大報酬，關鍵在於資產間的**相關係數**而非個別資產的優劣。
- 理論假設報酬服從常態分布、相關係數穩定，投資人可用歷史數據估算未來風險。

**實務侷限（陷阱）**
- MPT 高度依賴歷史數據推估未來，但在市場劇烈壓力（如 2008 金融海嘯）下，原本低相關的資產（股票、房地產、部分商品）**相關係數會同步趨近於 1**，分散效果在最需要時反而失效。這種「危機時相關性趨同」是 MPT 最常被批評的實務缺陷。
- 來源：[FasterCapital - Limitations of MPT](https://fastercapital.com/topics/limitations-and-criticisms-of-modern-portfolio-theory.html)、[John Rothe - The Problem with MPT](https://www.johnrothe.com/p/the-problem-with-modern-portfolio-theory)

## 二、常見資產配置模型比較

**60/40 股債配置**
- 2022 年因升息導致股債同跌，60/40 組合虧損約 -16%（同期 S&P500 跌約 -18%），是近數十年最差年份之一，凸顯「股債負相關」假設並非恆常成立。

**全天候策略（All Weather, Ray Dalio）**
- 2022 年表現甚至**輸給傳統 60/40**——正是它理論上該發揮避震效果的年份，因為策略高度依賴股債長期負相關，但 2022 年起這個相關性反轉向上。
- 2023 年風向逆轉，全天候策略回升（截至 11 月約 +4.5%），但仍不及 60/40（+10.5%）的表現，顯示其近年報酬落後、爭議未歇。

**風險平價（Risk Parity）**
- 同樣仰賴股債負相關與槓桿放大低波動資產部位，在 2022 年「股債齊跌」的異常環境中集體失靈，各家風險平價基金 2023 年表現分歧極大（-0.6% 至 +8.6%）。
- 來源：[CAIA - Risk Parity Not Performing? Blame the Weather](https://caia.org/blog/2024/01/02/risk-parity-not-performing-blame-weather)、[Markov Processes International](https://www.markovprocesses.com/blog/risk-parity-not-performing-blame-the-weather/)

## 三、再平衡策略：定期 vs 門檻式

**核心原則**
- Vanguard 與 Wellington 研究均指出，門檻式再平衡（超過設定偏離幅度才調整）在**風險控制**上優於單純定期再平衡：一年期的配置偏離幅度更小，且能省下不必要的交易成本。定期再平衡若過於頻繁（如每月）對投資人效益有限，反而增加成本。
- 兩者實證上「風險調整後報酬」相近，差異主要體現在交易成本與偏離控制上。
- **最佳實務為「混合式」**：以定期檢視（抓長期緩慢累積的偏移）搭配門檻觸發（抓極端單一事件造成的偏離），Vanguard 2019 年研究支持此混合策略。
- 來源：[Kitces - Optimal Rebalancing](https://www.kitces.com/blog/best-opportunistic-rebalancing-frequency-time-horizons-vs-tolerance-band-thresholds/)、[Vanguard - The Rebalancing Edge](https://corporate.vanguard.com/content/dam/corp/research/pdf/the_rebalancing_edge_optimizing_target_date_fund_rebalancing_through_threshold_based_strategies.pdf)

## 四、分散投資的正確認知

**核心原則**
- 真正的分散取決於**資產間的相關性與經濟驅動因子**，而非持股「檔數」。持有 15 檔美股大型科技股不算分散，因為它們對同一總經因子的反應方向一致。
- 跨資產（股票 vs 債券）、跨地區（本國 vs 海外）才能引入不同的經濟驅動力（成長 vs 利率、避險情緒），達到實質分散。
- 研究顯示個股層面，持有約 20–30 檔後風險降低效益即大幅遞減，超過此數僅稀釋報酬、無助降風險。

**常見陷阱：偽分散**
- 持有多檔基金卻常見「重倉股重疊」，例如某案例中同一檔龍頭股出現在十檔基金中的九檔，表面分散、實質集中。
- 來源：[Investor's Handbook - Myth of Diversification](https://medium.com/the-investors-handbook/myth-of-diversification-7af986164857)、[Yodelar - False Diversification](https://www.yodelar.com/insights/false-diversification-why-too-many-similar-funds-undermine-investment-portfolios)

**與第一章的數字對照**：[第一章](./01-risk-management-position-sizing.md)引用「約16檔不相關個股即可消除93%個股特有風險」，本章則引用「20–30檔後風險降低效益大幅遞減」——這不是兩個互相矛盾的「標準答案」，而是同一條邊際遞減曲線上的兩個觀察點：16檔已經消滅九成以上的個股特有風險，剩下的20–30檔只是把最後不到一成的風險榨乾，之後再加檔數就純粹稀釋報酬、不再降風險。

## 五、常見迷思與陷阱

- **「雞蛋不要放同一個籃子」被過度簡化**：投資人常誤解為「持股數量多=安全」，卻忽略資產相關性；也可能落入「過度分散」，持股過多反而稀釋報酬、增加管理難度，並非分散越多越好。
- **追高殖利率／配息股當核心配置**：高殖利率常是股價因基本面惡化下跌所致的「殖利率陷阱」，配息比率超過 100% 是警訊；一旦股息遭調降，投資人可能同時承受「配息被砍＋股價續跌」雙重打擊，不應以殖利率高低取代整體資產配置邏輯。
- 來源：[Fifth Person - High Dividend Yield Warning Sign](https://fifthperson.com/why-high-dividend-yield-warning-sign/)、[FinFormula - Dividend Yield Trap](https://www.finformula.com/dividend-yield-trap/)
