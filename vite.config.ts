import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const indexPath = join(__dirname, 'dist', 'index.html')
        const notFoundPath = join(__dirname, 'dist', '404.html')
        try {
          const indexContent = readFileSync(indexPath, 'utf-8')
          writeFileSync(notFoundPath, indexContent)
        } catch (error) {
          console.warn('Failed to copy index.html to 404.html:', error)
        }
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  server: {
    fs: {
      strict: false
    },
    proxy: {
      '/api': { target: 'http://localhost:3001', changeOrigin: true }
    }
  }
}))
