import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
const searchOptions = {
  previewLength: 62,
  buttonLabel: 'Search',
  placeholder: 'Search docs',
}
export default defineConfig({
  plugins: [
    SearchPlugin(searchOptions)
  ]
})