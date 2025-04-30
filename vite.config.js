import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hafas-bitmask-calculator/', // this must match your repo name!
  build: {
    outDir: 'docs' // build output goes into /docs folder
  }
})
