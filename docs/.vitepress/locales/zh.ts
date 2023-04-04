import {DefaultTheme, LocaleConfig} from 'vitepress'
import * as common from './common'

export const themeConfig:DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern: "https://github.com/alkaidcc/sicp-js/edit/master/docs/:path",
    text: "在 GitHub 上编辑此页面",
  },
  sidebar: [
    {
      text: '前言',
      items: [
        { text: '前言', link: '/zh/foreword' },
      ]
    }
  ],
}
export const title = '计算机程序的结构和解释'
export const description = '计算机程序的结构和解释的 JavaScript 版本。'

export const zhCN: LocaleConfig<DefaultTheme.Config>[string] = {
  label: '简体中文',
  lang: 'zh-CN',
  title,
  description,
  themeConfig,
}