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
        "bg-main": "var(--bg-main)",
        "bg-card": "var(--bg-card)",
        "text-heading": "var(--text-heading)",
        "text-body": "var(--text-body)",
        "accent-primary": "var(--accent-primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
