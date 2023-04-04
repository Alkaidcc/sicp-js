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
      text: 'Pre',
      items: [
        { text: 'Foreword', link: '/foreword' },
      ]
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