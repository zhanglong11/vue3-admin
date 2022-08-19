import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function _resolve(dir: string) {
  return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': _resolve('src')
    }
  },
  server: {
    port: 3003,
    open: false,
    proxy: {
      '/bf3d': {
        target: 'http://172.16.10.223:11111',
        changeOrigin: true
      }
    }
  }
})
