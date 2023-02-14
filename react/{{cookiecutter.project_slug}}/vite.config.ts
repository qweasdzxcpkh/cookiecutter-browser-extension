import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // NOTE: enable code if not need html file
  // build: {
  //   lib: {
  //     entry: './src/main.tsx',
  //     name: '{{ cookiecutter.project_slug }}',
  //     formats: ['es'],
  //   },
  // },
  // define: { 'process.env.NODE_ENV': '"production"' },
})
