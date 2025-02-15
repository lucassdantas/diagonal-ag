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
        purple_100:'#2D0C50',
        purple_90:'#441772',
        purple_80:'#5C2694',
        purple_70:'#7638B6',
        purple_60:'#924ED8',
        purple_50:'#B068FA',
        purple_40:'#C48BFF',
        purple_30:'#D5ADFF',
        purple_20:'#E6CEFF',
        purple_10:'#F7F0FF',
        main_black:'#1E1E1E',
        gray_10:'#2C2C2C'
      },
    },
  },
  plugins: [],
} satisfies Config;
