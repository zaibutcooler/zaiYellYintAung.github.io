export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: "#343130",
        secondary: "#B9B5B2",
        secondary_bold: "#a1a1aa",
        snow_white: "#fff",
        bg_white: "#F5F5F5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
