/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        accent: "#F59E0B",
        dark: "#111827",
        muted: "#6B7280",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
