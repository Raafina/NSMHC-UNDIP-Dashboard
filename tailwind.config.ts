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
        brownExtremeDark: "#2C2C2C",
        brownVeryDark: "#8D4D24",
        brownDark: "#B97345",
        brownDarker: "#454545",
        brownNormal: "#F2A263",
        brownLight: "#FFECCE",
        white: "#FFFFFF",
        whiteDark: "#F4F4F4",
        blue: "#609FF1",
        green: "#54F667",
      },
    },
  },
  plugins: [],
} satisfies Config;
