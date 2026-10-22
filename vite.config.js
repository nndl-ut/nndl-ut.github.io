import { defineConfig } from 'vite'

// If you deploy to https://<user>.github.io/<repo>/ set base to '/<repo>/'
// (or build with: npm run build -- --base=/<repo>/ — the included GitHub Action does this automatically).
export default defineConfig({
  base: process.env.BASE_PATH || '/',
})
