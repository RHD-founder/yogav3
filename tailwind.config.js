/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B09C84", // soft beige tone from design
        secondary: "#8B7355", // darker brown tone
        accent: "#DCC6A0", // light cream accent
        background: "#FAF8F5", // very light cream background
        "background-alt": "#F5F1EB", // slightly darker cream
        dark: "#2E2B26", // dark text color
        "text-light": "#6B6B6B", // light gray text
        "beige-light": "#F0EBE3", // light beige
        "beige-dark": "#D4C4B0", // darker beige
        "hero-text": "#ba936f", // hero section text color
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // clean modern font
        serif: ["Playfair Display", "serif"], // elegant serif for headings
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
