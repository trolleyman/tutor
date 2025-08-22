import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://trolleyman.github.io/tutor/", // TODO: Remove when deploying to custom domain
  plugins: [
    react(),
    tailwindcss(),
  ],
})
