/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    darkMode: ["class", '[data-mode="dark"]'],
    extend: {
      colors: {
        light: {
          background: "#e4e7ec",
          text: "#101012",
        },
        dark: {
          background: "#1E1E1E",
          text: "#101012",
        },
        bg_white: "#e4e7ec",
        snow_white: "#faf9fd",
        primary: "#cf0e1d",
        bg_black: "#1E1E1E",
        super_black: "#101012",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
