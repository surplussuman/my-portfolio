import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://18.205.239.99:8000/',
        changeOrigin: true,
      },
      '/media': {
        target: 'http://18.205.239.99:8000',
        changeOrigin: true,
      },
    },
  },
})