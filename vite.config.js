import { defineConfig } from 'vite'
import { minifyHtml, injectHtml } from 'vite-plugin-html'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../build'
  },
  plugins: [
    minifyHtml(),
    injectHtml({
      data: {
        injectScript: "<script>window.onload=function(){'serviceWorker'in navigator&&navigator.serviceWorker.register('/sw.js')};</script>"
      }
    })
  ]
})
