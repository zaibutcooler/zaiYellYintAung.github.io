/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
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
