/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        steelblue: "#0a5783",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      "3xl": "22px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
