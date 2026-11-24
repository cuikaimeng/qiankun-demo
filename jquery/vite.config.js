import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [qiankun('app-jquery', { useDevMode: true })],
  server: {
    host: '127.0.0.1',
    port: 8085,
    headers: {
      'access-control-allow-origin': '*'
    }
  }
})
