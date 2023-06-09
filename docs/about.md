# Background

## Background

The JavaScript adaptation of SICP is an open-source community effort. The software and data required for making these web pages and the PDF edition are contained in the github repository [source-academy/sicp](https://github.com/source-academy/sicp), and improvements, extensions and discussions are handled in this repository using `git`.

Martin Henz started translating SICP to JavaScript in 2008. He obtained the original $\LaTeX{}$ sources of the second edition from Gerald Jay Sussman, and converted them to a custom-built XML format. The original sources are retained in the XML format, which allows for generating the [comparison edition](https://sicp.sourceacademy.org/). A processing system written in XSLT resulted in the first version of the JavaScript adaptation around 2009, covering the first few sections of SICP. The content of SICP JS contained in the XML files are undergoing continuous improvement by the adapters Martin Henz and Tobias Wrigstad, and by the community of SICP JS readers, using the github repository.

In the book, program fragments often require other program fragments. In order to collect and execute the necessary programs, the corresponding SNIPPET tags in the xml files include REQUIRES tags. The XML processors use these tags in order to assemble the executable programs. The project thus can be seen as a literate programming system, custom-made for authoring SICP JS.

## Interactive SICP JS

[Interactive SICP JS](https://sourceacademy.org/sicpjs) was designed and implemented by Samuel Fang in 2021. The XML textbook sources are translated to a JSON format, which are then read and rendered by a dedicated component of the Source Academy.

## Comparison Edition

The precursor of the comparison edition was the mobile-friendly web edition of SICP JS, designed and implemented by Liu Hang in 2017. Feng Piaopiao improved the system in 2018. He Xinyue and Wang Qian developed the comparison edition in 2020. Formulas are retained in the resulting HTML files and are typeset by the reader's browser on the fly, using the MathJax system. The comparison edition is maintained by Martin Henz.

## PDF Edition

The early PDF editions (2010-2018) used XSLT for generating $\LaTeX{}$from the XML sources. The first Node.js version of the PDF edition was designed and implemented by Chan Ger Hean in 2019. Tobias Wrigstad and Martin Henz are the main developers of this system.

## Figures

Most figures are adapted from the [HTML5/EPUB3 version of SICP](https://github.com/sarabander/sicp) by Andres Raba. The figures are licensed under Creative Commons Attribution-ShareAlike 4.0 International License [(cc by-sa)](https://creativecommons.org/licenses/by-sa/4.0). JavaScript adaptations of figures were done by Tobias Wrigstad using Inkscape and gratuitous use of sed.
