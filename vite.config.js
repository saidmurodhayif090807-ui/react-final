import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    
    host: '0.0.0.0', // yoki shunchaki true
    port: 5173      // portni xohishingizga ko'ra o'zgartirishingiz mumkin
  }
})
