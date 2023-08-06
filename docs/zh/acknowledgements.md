# 致谢

SICP JS（Structure and Interpretation of Computer Programs 的 JavaScript 改编版）是在新加坡国立大学（NUS）为 CS1101S 课程开发的。这门课程已经连续教授了六年，其重要性对于课程和该项目的成功至关重要，其中 Low Kok Lim 的教学判断力起到了关键作用。CS1101S 教学团队包括许多 NUS 的同事和超过 300 名本科助教。他们在过去的九年中不断提供反馈，使我们能够解决无数与 JavaScript 相关的问题，消除不必要的复杂性，同时保留了 SICP 和 JavaScript 的核心特性。

SICP JS 是一个软件项目，除了书籍项目外，还包括 $\LaTeX{}$。我们在 2008 年从原始作者那里获取了书籍的源代码。SICP JS 的早期工具链由刘航开发，并由冯飘飘进行了改进。陈各炫开发了打印版的第一个工具，基于此，Jolyn Tan 开发了第一版电子书的工具，而何鑫越和王倩则将这些工具重新用于当前的对比版。Samuel Fang 设计并开发了 SICP JS 的在线版。

SICP JS 的在线版和 CS1101S 严重依赖一个名为“Source Academy”的软件系统，它支持名为 Source 的 JavaScript 子语言。在准备 SICP JS 的过程中，许多学生为 Source Academy 做出了重要贡献，并且系统将他们列为“Contributors”（贡献者）。自 2020 年以来，新加坡国立大学的 CS4215 课程的学生们为 SICP JS 贡献了几个编程语言实现：第 3.4 节中使用的并发版本的 Source 是由郑群 Koo 和 Jonathan Chan 开发的；第 4.2 节中使用的惰性实现是由Jellouli Ahmed、Ian Kendall Duncan、Cruz Jomari Evangelista 和 Alden Tan 开发的；第 4.3 节中使用的非确定性实现是由 Arsalan Cheema 和 Anubhav 开发的；Daryl Tan 帮助将这些实现整合到了 Academy 中。

我们感谢瑞典国际合作研究和高等教育基金会（STINT），他们的休假计划将 Martin 和 Tobias 联系在一起，并允许 Tobias 担任 CS1101S 的合作教师并加入 SICP JS 项目。

我们要感谢由 Allen Wirfs-Brock 领导的 ECMAScript 2015 委员会的勇敢工作。SICP JS 在常量和 let 声明以及 lambda 表达式方面严重依赖于 ECMAScript 2015 中添加的功能。这些新增功能使我们能够在呈现 SICP 的最重要思想时保持与原始版本的密切联系。Guy Lewis Steele Jr.，第一个 ECMAScript 标准化的领导者，对第 4 章的一些练习提供了详细而有用的反馈意见。

> \- Martin Henz and Tobias Wrigstad

## SICP 第二版致谢，1996

我们要感谢许多帮助我们开发这本书和课程的人。

我们的课程是 MIT 在上世纪60年代末由 Jack Wozencraft 和 Arthur Evans Jr. 教授的一门名为“6.231”的精彩课程的明显延续，该课程涉及编程语言学和λ演算。

我们要感谢 Robert Fano，他重新组织了 MIT 的电气工程和计算机科学入门课程，强调了工程设计原则。他在我们开始这项事业时给予了我们支持，并编写了最初的课程笔记，这些笔记演变成了这本书。

我们试图教授的许多编程风格和美学是与 Guy Lewis Steele Jr. 共同开发 Scheme 语言的 Gerald Jay Sussman 合作中发展起来的。此外，David Turner、Peter Henderson、Dan Friedman、David Wise 和 Will Clinger 教给了我们许多在本书中出现的函数式编程社区的技术。

Joel Moses 教给了我们关于构建大型系统的方法。他在符号计算系统 Macsyma 的经验提供了一个洞察力，即应该避免控制上的复杂性，而是集中于组织数据以反映所建模的世界的真实结构。

Marvin Minsky 和 Seymour Papert 形成了我们关于编程及其在我们的知识生活中的地位的许多态度。我们要感谢他们，因为他们让我们明白计算提供了一种表达的手段，可以探索那些否则会过于复杂而无法准确处理的思想。他们强调学生编写和修改程序的能力提供了一个强大的媒介，使探索成为一种自然的活动。

我们也强烈同意 Alan Perlis 的观点，即编程非常有趣，我们最好小心地支持编程的乐趣。这种乐趣的一部分来自于观察伟大大师的工作。我们很幸运地成为了 Bill Gosper 和 Richard Greenblatt 的学徒程序员。

很难确定所有对我们课程开发做出贡献的人。我们要感谢过去十五年中与我们合作并在我们的课程上投入了许多额外时间的所有讲师、辅导员和导师，特别是 Bill Siebert、Albert Meyer、Joe Stoy、Randy Davis、Louis Braida、Eric Grimson、Rod Brooks、Lynn Stein 和 Peter Szolovits。我们要特别感谢 Franklyn Turbak 在本科教学方面的杰出贡献；他在本科教学方面的工作树立了一个我们都可以追求的标准。我们感谢 Jerry Saltzer 和 Jim Miller 帮助我们理解并发性的问题，以及 Peter Szolovits 和 David McAllester 对第4章中非确定性评估的阐述的贡献。

许多人在其他大学中付出了大量努力来展示这些材料。我们与 Technion 的 Jacob Katzenelson、加州大学尔湾分校的 Hardy Mayer、牛津大学的 Joe Stoy、普渡大学的 Elisha Sacks 和挪威科技大学的 Jan Komorowski 紧密合作。我们为我们的同事感到非常自豪，他们在其他大学对这门课程进行了改编，并获得了重要的教学奖项，包括 Yale 的 Kenneth Yip、加州大学伯克利分校的 Brian Harvey 和 Cornell 的 Dan Huttenlocher。

Al Moyé 安排我们向惠普公司的工程师教授这些材料，并制作了这些讲座的录像带。我们要感谢才华横溢的讲师，特别是 Jim Miller、Bill Siebert 和 Mike Eisenberg，他们设计了包含这些录像带的继续教育课程，并在世界各地的大学和工业界教授这些课程。

许多其他国家的教育工作者在翻译第一版方面做出了重要的工作。Michel Briand、Pierre Chamard 和 André Pic 制作了法语版；Susanne Daniels-Herold 制作了德语版；Fumio Motoyoshi 制作了日语版。我们不知道谁制作了中文版，但我们认为能够被选为“未经授权”的翻译对象是一种荣誉。

很难列举出对我们用于教学目的的 Scheme 系统开发作出技术贡献的所有人。除了 Guy Steele，其他主要贡献者包括 Chris Hanson、Joe Bowbeer、Jim Miller、Guillermo Rozas 和 Stephen Adams。其他付出了大量时间的人包括 Richard Stallman、Alan Bawden、Kent Pitman、Jon Taft、Neil Mayle、John Lamping、Gwyn Osnos、Tracy Larrabee、George Carrette、Soma Chaudhuri、Bill Chiarchiaro、Steven Kirsch、Leigh Klotz、Wayne Noss、Todd Cass、Patrick O'Donnell、Kevin Theobald、Daniel Weise、Kenneth Sinclair、Anthony Courtemanche、Henry M. Wu、Andrew Berlin 和 Ruth Shyu。

除了 MIT 的实现之外，我们还要感谢许多人对 IEEE Scheme 标准的贡献，包括编辑 $\mathrm{R}^{4} \mathrm{RS}$ 的 William Clinger 和 Jonathan Rees，以及准备 IEEE 标准的 Chris Haynes、David Bartley、Chris Hanson 和 Jim Miller。

Dan Friedman 长期以来一直是 Scheme 社区的领导者。该社区的工作不仅涉及语言设计问题，还包括重要的教育创新，例如基于 EdScheme 的高中课程（由 Schemer's Inc. 开发）以及 Mike Eisenberg、Brian Harvey 和 Matthew Wright 的精彩著作。

我们感谢那些为使这本书成为一本真正的书作出贡献的人，特别是 MIT Press 的 Terry Ehling、Larry Cohen 和 Paul Bethge。Ella Mazel 找到了精美的封面图片。对于第二版，我们特别感谢 Bernard 和 Ella Mazel 在书籍设计方面的帮助，以及超凡的巫师 David Jones。我们还要感谢那些对新草稿提出深入评论的读者：Jacob Katzenelson、Hardy Mayer、Jim Miller，尤其是 Brian Harvey，他对这本书的评论就像 Julie 对他的书《Simply Scheme》所做的那样。

最后，我们要感谢多年来支持这项工作的组织，包括由 Ira Goldstein 和 Joel Birnbaum 提供的惠普公司的支持，以及由 Bob Kahn 提供的 DARPA 的支持。

> \- Harold Abelson and Gerald Jay Sussman