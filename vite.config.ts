import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  root: './dev',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './dev/src'),
      '@assets': path.resolve(__dirname, './dev/assets'),
    },
  },
  plugins: [solidPlugin()],
})
