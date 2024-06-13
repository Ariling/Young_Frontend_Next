import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main : "url('../images/BG.png')",
      },
      colors : {
        'main-color' : '#64422E',
        'text-gray' : '#A4A4A4',
      }
    },
    fontFamily : {
      PartialSans : ['PartialSansKR-Regular'],
      Neo : ['SpoqaHanSansNeo-Regular'],
    }
  },
  plugins: [],
};
export default config;
