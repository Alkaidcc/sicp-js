import { defineConfig } from 'vitepress'
import {en} from './locales/en'
import {zhCN} from './locales/zh'
import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];
export default defineConfig({
  lastUpdated: true,
  locales: {
    root: en,
    zh: zhCN,
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
})