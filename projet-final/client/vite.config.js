import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "include": [
      "./node_modules/cypress",
      "cypress/**/*.js"
    ]
})