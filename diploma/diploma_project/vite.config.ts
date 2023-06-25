import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 8081,
    host: '127.0.0.1',
    proxy: {
      "/api": {
        target: 'http://127.0.0.1:8000',
        ws:true,
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, ''),

      }
    }
  }
})


