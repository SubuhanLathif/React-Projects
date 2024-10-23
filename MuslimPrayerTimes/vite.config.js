import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/muslimprayertimes/', // Base path for the subdirectory
  plugins: [react()],
})
