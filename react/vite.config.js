import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    react(),
    qiankun('app-react', {
      useDevMode: true  
    })
  ],
  server: {
    host: '127.0.0.1',
    port: 8084,
    headers: {
      'access-control-allow-origin': '*'
    }
  }
})
