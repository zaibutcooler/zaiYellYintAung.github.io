/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
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
        border_black: "hsl(0, 0%, 54%)",
        super_black: "#101012",
      },
    },
    variants: {
      extend: {
        fill: ["dark"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
