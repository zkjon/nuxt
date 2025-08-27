import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    alias: {
      "@": path.resolve("./"),
    },
  vite: {
    plugins: [tailwindcss()],
  },
})
