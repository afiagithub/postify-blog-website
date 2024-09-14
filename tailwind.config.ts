import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        robo: ['"Roboto"', "sans-serif"],
        rale: ['"Raleway"', "sans-serif"],
        play: ['"Playfair Display"', "serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
