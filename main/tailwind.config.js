/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        bg_white: "#faf9fd",
      },
    },
  },
  plugins: [],
};
