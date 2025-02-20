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
        purple_90:'#310B57',
        purple_80:'#3F0B73',
        purple_70:'#561499',
        purple_60:'#7638B6',
        purple_50:'#9E67D7',
        purple_40:'#B581EA',
        purple_30:'#CB99FF',
        purple_20:'#DEBEFF',
        purple_10:'#EDDCFF',
        main_black:'#1E1E1E',
        gray_10:'#2C2C2C'
      },
    },
  },
  plugins: [],
} satisfies Config;
