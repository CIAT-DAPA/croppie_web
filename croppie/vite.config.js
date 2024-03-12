import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: '/croppie_web/', //use for default gh-pages
  base: '/', // use for gh-pages with custom domain
  plugins: [react()],
})
