# Preface

The book *Structure and Interpretation of Computer Programs* (SICP) introduces the reader to central ideas of computation by establishing a series of mental models for computation. Chapters 1–3 cover programming concepts that are common to all modern high-level programming languages. The original first two editions of SICP use the programming language Scheme in their program examples, whose minimalist, expression-oriented syntax allows the book to focus on the underlying ideas rather than the design of the chosen language. Chapters 4 and 5 use Scheme to formulate language processors for Scheme, deepening the readers' understanding of the mental models and exploring language extensions and alternatives.

Since its publication in 1984 and its second edition in 1996, SICP has been adopted as a textbook by universities and colleges around the world, including the National University of Singapore (NUS), which introduced the SICP-based introductory course CS1101S in 1997. In the mid-1990s, the languages Python, JavaScript, and Ruby emerged, which share central design elements with Scheme, but which employ a more complex, statement-oriented syntax that uses familiar algebraic (infix) notation. Their rise in popularity led instructors to adapt their SICP-based courses, typically by translating the example programs to their language of choice, by adding material specific to that language, and by omitting the material of chapters 4 and 5.

## Adapting SICP to JavaScript

The work on adapting the second edition of SICP to JavaScript (SICP JS) started at NUS in 2008, and CS1101S switched to JavaScript in 2012. The language standard ECMAScript 2015 introduced lambda expressions, tail recursion, and block-scoped variables and constants, which enabled the adaptation to become quite close to the original. We made substantial changes to SICP only when we felt they were forced by differences between JavaScript and Scheme. The book covers just a small fraction of JavaScript, so a reader would be ill-advised to use it to learn the language. For example, the notion of a JavaScript object—considered one of its fundamental ingredients by any measure—is not even mentioned!

It was straightforward to translate the programs of chapters 1–3 to JavaScript by adding libraries that mirror Scheme primitives—including support for list structure—and adapting the text accordingly. However, the switch to JavaScript forced us to make subtle changes in the interpreters and compiler of chapters 4 and 5 in order to handle return statements. Scheme's expression-oriented syntax doesn't have return statements, which are a prominent feature of statement-oriented languages.
By using JavaScript, chapters 1–3 introduce the reader to the syntactic style of most mainstream languages today. However, that same syntactic style gave rise to significant changes in chapter 4, because the direct representation of programs as data structures could no longer be taken for granted. This provided us with an opportunity to introduce the reader to the notion of program parsing in section 4.1, an important component of programming-language processors. In section 4.4, the rigid syntactic structure of JavaScript complicated the implementation of the presented logic programming system and exposed the limitations of JavaScript as a tool for programming language design.

## Resources for using SICP JS

The [MIT Press web page for SICP JS](https://mitpress.mit.edu/9780262543231/) links to support for users of this book. This provides all programs from the book and extensive instructor resources, including a large collection of additional exercises and recommendations on selecting a subset of SICP JS that can be covered in a typical college semester. The JavaScript programs in the book run in the recommended strict mode in any JavaScript interpreter that complies with the ECMAScript 2020 specification of JavaScript (ECMA 2020). The MIT Press web page includes the JavaScript package `sicp`, which provides all JavaScript functions that are considered "primitive" in the book.

## To the reader

We sincerely hope that if this book is your first encounter with programming you will use your newly gained understanding of the structure and interpretation of computer programs to learn more programming languages, including Scheme and the full JavaScript language. If you have learned JavaScript prior to picking up SICP JS, you might gain new insights into the fundamental concepts that underlie the language and discover how much can be achieved with so little. If you come to SICP JS with a knowledge of the original SICP, you might enjoy seeing familiar ideas presented in a new format—and might appreciate the online comparison edition, available at the book's web page, where SICP JS and SICP can be viewed side by side.

> \- Martin Henz and Tobias Wrigstad