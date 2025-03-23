import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server :{
    allowedHosts : ['f10c-112-196-62-7.ngrok-free.app'],
  },
  plugins: [react()],
})
