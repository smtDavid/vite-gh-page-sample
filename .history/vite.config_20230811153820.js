import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //    設定環境是production時           就把路徑到專案名稱的位置  :  不然就是用本地路徑(開發時)
  base: process.env.NODE_ENV === 'production'? '/vite-gh-page-sample/':'/',
  plugins: [react()],
})
