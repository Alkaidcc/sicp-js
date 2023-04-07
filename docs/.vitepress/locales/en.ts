import {DefaultTheme, LocaleConfig} from 'vitepress'
import * as common from './common'

export const themeConfig:DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern: "https://github.com/alkaidcc/sicp-js/edit/master/docs/:path",
    text: "Edit this page on GitHub",
  },
  sidebar: [
    {
      text: 'Foreword & Preface',
      collapsed: false,
      items: [
        { text: 'Foreword', link: '/foreword' },
        { text: 'ForewordSupplement', link: '/foreword-supplement' },
        { text: 'Preface', link: '/preface' },
        { text: 'PrefaceSupplement', link: '/preface-supplement' },
        { text: 'Acknowledgements', link: '/acknowledgements'}
      ]
    },
    {
      text: '1 Building Abstractions with Functions',
      collapsed: false,
      link: '/1',
      items: [
        {
          text: '1.1 The Elements of Programming',
          collapsed: false,
          link: '/1.1',
          items: [
            { text: '1.1.1 Expressions', link: '/1.1.1' },
            { text: '1.1.2 Naming and the Environment', link: '/1.1.2' },
            { text: '1.1.3 Evaluating Operator Combinations', link: '/1.1.3' },
            { text: '1.1.4 Compound Functions', link: '/1.1.4' },
            { text: '1.1.5 The Substitution Model for Function Application', link: '/1.1.5' },
            { text: '1.1.6 Conditional Expressions and Predicates', link: '/1.1.6' },
            { text: '1.1.7 Examples: Square Roots by Newton\'s Method', link: '/1.1.7' },
            { text: '1.1.8 Functions as Block-Box Abstraction', link: '/1.1.8' },
          ]
        },
        {
          text: '1.2 Functions and the Processes They Generate',
          collapsed: false,
          link: '/1.2',
          items: [
            { text: '1.2.1 Linear Recursion and Iteration', link: '/1.2.1' },
            { text: '1.2.2 Tree Recursion', link: '/1.2.2' },
            { text: '1.2.3 Order of Growth', link: '/1.2.3' },
            { text: '1.2.4 Exponentiation', link: '/1.2.4' },
            { text: '1.2.5 Greatest Common Divisors', link: '/1.2.5' },
            { text: '1.2.6 Example: Testing for Primality', link: '/1.2.6' },
          ]
        },
        {
          text: '1.3 Formulating Abstractions with Higher-Order Functions',
          collapsed: false,
          link: '/1.3',
          items: [
            { text: '1.3.1 Functions as Arguments', link: '/1.3.1' },
            { text: '1.3.2 Constructing Functions using Lambda Expressions', link: '/1.3.2' },
            { text: '1.3.3 Functions as General Methods', link: '/1.3.3' },
            { text: '1.3.4 Functions as Returned Values', link: '/1.3.4' },
          ]
        },
      ]
    },
    {
      text: '2 Building Abstractions with Data',
      collapsed: false,
      link: '/2',
      items: [
        {
          text: '2.1 Introduction to Data Abstraction',
          collapsed: false,
          link: '/2.1',
          items: [
            { text: '2.1.1 Example: Arithmetic Operations for Rational Numbers', link: '/2.1.1' },
            { text: '2.1.2 Abstraction Barriers', link: '/2.1.2' },
            { text: '2.1.3 What Is Meant by Data', link: '/2.1.3' },
            { text: '2.1.4 Extended Exercise: Interval Arithmetic', link: '/2.1.4' },
          ]
        },
        {
          text: '2.2 Hierarchical Data and the Closure Property',
          collapsed: false,
          link: '/2.2',
          items: [
            { text: '2.2.1 Representing Sequences', link: '/2.2.1' },
            { text: '2.2.2 Hierarchical Structures', link: '/2.2.2' },
            { text: '2.2.3 Sequences as Conventional Interfaces', link: '/2.2.3' },
            { text: '2.2.4 Example: A Picture Language', link: '/2.2.4' },
          ]
        },
        {
          text: '2.3 Symbolic Data',
          collapsed: false,
          link: '/2.3',
          items: [
            { text: '2.3.1 Strings', link: '/2.3.1'},
            { text: '2.3.2 Example: Symbolic Differentiation', link: '/2.3.2'},
            { text: '2.3.3 Example: Representing Sets', link: '/2.3.3'},
            { text: '2.3.4 Example: Huffman Encoding Trees', link: '/2.3.4'},
          ]
        },
        {
          text: '2.4 Multiple Representations for Abstract Data',
          collapsed: false,
          link: '/2.4',
          items: [
            { text: '2.4.1 Representations for Complex Numbers', link: '/2.4.1'},
            { text: '2.4.2 Tagged data', link: '/2.4.2'},
            { text: '2.4.3 Data-Directed Programming and Additivity', link: '/2.4.3'},
          ]
        },
        {
          text: '2.5 Systems with Generic Operations',
          collapsed: false,
          link: '/2.5',
          items: [
            { text: '2.5.1 Generic Arithmetic Operations', link: '/2.5.1'},
            { text: '2.5.2 Combining Data of Different Types', link: '/2.5.2'},
            { text: '2.5.3 Example: Symbolic Algebra', link: '/2.5.3'},
          ]
        },
      ]
    },
    {
      text: '3 Modularity, Objects, and State',
      collapsed: false,
      link: '/3',
      items: [
        {
          text: '3.1 Assignment and Local State',
          collapsed: false,
          link: '/3.1',
          items: [
            { text: '3.1.1 Local State Variables', link: '/3.1.1'},
            { text: '3.1.2 The Benefits of Introducing Assignment', link: '/3.1.2'},
            { text: '3.1.3 The Costs of Introducing Assignment', link: '/3.1.3'},
          ]
        },
        {
          text: '3.2 The Environment Model of Evaluation',
          collapsed: false,
          link: '/3.2',
          items: [
            { text: '3.2.1 The Rules for Evaluation', link: '/3.2.1'},
            { text: '3.2.2 Applying Simple Functions', link: '/3.2.2'},
            { text: '3.2.3 Frames as the Repository of Local State', link: '/3.2.3'},
            { text: '3.2.4 Internal Declarations', link: '/3.2.4'},
          ]
        },
        {
          text: '3.3 Modeling with Mutable Data',
          collapsed: false,
          link: '/3.3',
          items: [
            { text: '3.3.1 Mutable List Structure', link: '/3.3.1'},
            { text: '3.3.2 Representing Queues', link: '/3.3.2'},
            { text: '3.3.3 Representing Tables', link: '/3.3.3'},
            { text: '3.3.4 A Simulator for Digital Circuits', link: '/3.3.4'},
            { text: '3.3.5 Propagation of Constraints', link: '/3.3.5'},
          ]
        },
        {
          text: '3.4 Concurrency: Time Is of the Essence',
          collapsed: false,
          link: '/3.4',
          items: [
            { text: '3.4.1 The Nature of Time in Concurrent Systems', link: '/3.4.1'},
            { text: '3.4.2 Mechanisms for Controlling Concurrency', link: '/3.4.2'},   
          ]
        },
        {
          text: '3.5 Streams',
          collapsed: false,
          link: '/3.5',
          items: [
            {text: '3.5.1 Streams Are Delayed Lists', link: '/3.5.1'},
            {text: '3.5.2 Infinite Streams', link: '/3.5.2'},
            {text: '3.5.3 Exploiting the Stream Paradigm', link: '/3.5.3'},
            {text: '3.5.4 Streams and Delayed Evaluation', link: '/3.5.4'},
            {text: '3.5.5 Modularity of Functional Programs and Modularity of Objects', link: '/3.5.5'},
          ]
        }
      ]
    },
    {
      text: '4 Metalinguistic Abstraction',
      collapsed: false,
      link: '/4',
      items: [
        {
          text: '4.1 The Metacircular Evaluator',
          collapsed: false,
          link: '/4.1',
          items: [
            { text: '4.1.1 The Core of the Evaluator', link: '/4.1.1'},
            { text: '4.1.2 Representing Components', link: '/4.1.2'},
            { text: '4.1.3 Evaluator Data Structures', link: '/4.1.3'},
            { text: '4.1.4 Running the Evaluator as a Program', link: '/4.1.4'},
            { text: '4.1.5 Data as Programs', link: '/4.1.5'},
            { text: '4.1.6 Internal Declarations', link: '/4.1.6'},
            { text: '4.1.7 Separating Syntactic Analysis from Execution', link: '/4.1.7'},
          ]
        },
        {
          text: '4.2 Lazy Evaluation',
          collapsed: false,
          link: '/4.2',
          items: [
            { text: '4.2.1 Normal Order and Applicative Order', link: '/4.2.1'},
            { text: '4.2.2 An Interpreter with Lazy Evaluation', link: '/4.2.2'},
            { text: '4.2.3 Streams as Lazy Lists', link: '/4.2.3'},
          ]
        },
        {
          text: '4.3 Nondeterministic Computing',
          collapsed: false,
          link: '/4.3',
          items: [
            { text: '4.3.1 Search and amb', link: '/4.3.1'},
            { text: '4.3.2 Examples of Nondeterministic Programs', link: '/4.3.2'},
            { text: '4.3.3 Implementing the amb Evaluator', link: '/4.3.3'},
          ]
        },
        {
          text: '4.4 Logic Programming',
          collapsed: false,
          link: '/4.4',
          items: [
            { text: '4.4.1 Deductive Information Retrieval', link: '/4.4.1'},
            { text: '4.4.2 How the Query System Works', link: '/4.4.2'},
            { text: '4.4.3 Is Logic Programming Mathematical Logic?', link: '/4.4.3'},
            { text: '4.4.4 Implementing the Query System', link: '/4.4.4'},
          ]
        },
      ]
    },
    {
      text: '5 Computing with Register Machines',
      collapsed: false,
      link: '/5',
      items: [
        {
          text: '5.1 Designing Register Machines',
          collapsed: false,
          link: '/5.1',
          items: [
            { text: '5.1.1 A Language for Describing Register Machines', link: '/5.1.1'},
            { text: '5.1.2 Abstraction in Machine Design', link: '/5.1.2'},
            { text: '5.1.3 Subroutines', link: '/5.1.3'},
            { text: '5.1.4 Using a Stack to Implement Recursion', link: '/5.1.4'},
            { text: '5.1.5 A Instruction Summary', link: '/5.1.5'},
          ]
        },
        {
          text: '5.2 A Register-Machine Simulator',
          collapsed: false,
          link: '/5.2',
          items: [
            { text: '5.2.1 The Machine Model', link: '/5.2.1'},
            { text: '5.2.2 The Assembler', link: '/5.2.2'},
            { text: '5.2.3 Instructions and Their Execution Functions', link: '/5.2.3'},
            { text: '5.2.4 Monitoring Machine Performance', link: '/5.2.4'},
          ]
        },
        {
          text: '5.3 Storage Allocation and Garbage Collection',
          collapsed: false,
          link: '/5.3',
          items: [
            { text: '5.3.1 Memory as Vectors', link: '/5.3.1'},
            { text: '5.3.2 Maintaining the Illusion of Infinite Memory', link: '/5.3.2'},
          ]
        },
        {
          text: '5.4 The Explicit-Control Evaluator',
          collapsed: false,
          link: '/5.4',
          items: [
            { text: '5.4.1 The Dispatcher and Basic Evaluation', link: '/5.4.1'},
            { text: '5.4.2 Evaluating Function Applications', link: '/5.4.2'},
            { text: '5.4.3 Blocks, Assignments, and Declarations', link: '/5.4.3'},
            { text: '5.4.4 Running the Evaluator', link: '/5.4.4'},
          ]
        },
        {
          text: '5.5 Compilation',
          collapsed: false,
          link: '/5.5',
          items: [
            { text: '5.5.1 Structure of the Compiler', link: '/5.5.1'},
            { text: '5.5.2 Compiling Components', link: '/5.5.2'},
            { text: '5.5.3 Compiling Applications and Return Statements', link: '/5.5.3'},
            { text: '5.5.4 Compiling Instruction Sequences', link: '/5.5.4'},
            { text: '5.5.5 An Example of Compiled Code', link: '/5.5.5'},
            { text: '5.5.6 Lexical Addressing', link: '/5.5.6'},
            { text: '5.5.7 Interfacing Compiled Code to the Evaluator', link: '/5.5.7'},
          ]
        }
      ]
    },
    {
      text: 'References',
      link: '/references',
    },
    {
      text: 'About the SICP JS Project',
      link: '/about',
    }
  ],
}
export const title = 'SICP JavaScript'
export const description = 'SICP JavaScript version.'

export const en: LocaleConfig<DefaultTheme.Config>[string] = {
  label: 'English',
  lang: 'en',
  title,
  description,
  themeConfig,
}