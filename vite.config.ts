import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main:           resolve(__dirname, 'index.html'),
        about:          resolve(__dirname, 'about.html'),
        services:       resolve(__dirname, 'services.html'),
        products:       resolve(__dirname, 'products.html'),
        careers:        resolve(__dirname, 'careers.html'),
        contact:        resolve(__dirname, 'contact.html'),
        accessibility:  resolve(__dirname, 'accessibility.html'),
        marking:        resolve(__dirname, 'marking.html'),
        'safety-catalog':  resolve(__dirname, 'safety-catalog.html'),
        'signage-catalog': resolve(__dirname, 'signage-catalog.html'),
      },
    },
  },
})
