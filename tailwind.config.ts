import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: { 
        'custom-xl': { 'min': '1280px', 'max': '800px' }, 
        'custom-lg': { 'min': '1023px', 'max': '1281px' }, 
        'custom-md': { 'min': '900px', 'max': '1024px' }, 
        'custom-sm': { 'min': '800px', 'max': '900px' }, 
        'custom-xs': { 'min': '700px', 'max': '800px' }, 
        'custom-xxs': { 'min': '500px', 'max': '700px' }, 
        'custom-tiny': { 'min': '400px', 'max': '500px' }, 
        'custom-mini': { 'min': '200px', 'max': '400px' }, 
      },
    },
  },
  plugins: [],
} satisfies Config;
