import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : '/promofy/',
  plugins: [react()],
  base:'./',

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
})
