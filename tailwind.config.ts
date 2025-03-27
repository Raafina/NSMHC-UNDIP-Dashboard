import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brown-extreme-dark': "#2C2C2C",
        'brown-very-dark': "#8D4D24",
        'brown-darker': "#454545",
        'brown-dark': "#B97345",
        'brown-normal': "#F2A263",
        'brown-lighter': "#FFF4E2",
        'brown-light': "#FFECCE",
        'white': "#FFFFFF",
        'white-dark': "#F4F4F4",
        'blue': "#609FF1",
        'green': "#54F667",
      },
    },
  },

  plugins: [heroui()],

} satisfies Config;
