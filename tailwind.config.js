/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#9333EA",
        accent: "#FBBF24",
        light: {
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
        },
        dark: {
          100: "#111827",
          200: "#1F2937",
          300: "#374151",
          400: "#4B5563",
          500: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
