const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      poppins: ["Poppins"],
      montserrat: ["Montserrat"],
    },
    screens: {
      xxs: "425px",
      xs: "550px",
      ...defaultTheme.screens,
      "3xl": "1680px",
      "4xl": "1792px",
      "5xl": "1920px",
      "6xl": "2560px",
    },
    extend: {
      scale: {
        35: "0.35",
        40: "0.40",
        45: "0.45",
        50: "0.50",
        55: "0.55",
        60: "0.60",
        65: "0.65",
        675: "0.675",
        70: "0.70",
        80: "0.80",
        85: "0.85",
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
        175: "1.75",
        185: "1.85",
        195: "1.95",
        200: "2",
        225: "2.25",
        flip: "-1",
      },
      content: {
        sun: 'url("/src/lib/assets/sun.svg")',
      },
      boxShadow: {
        "blue-glow": "0px 0px 105px 45px #4e4c98",
        "pink-glow": "0px 0px 105px 45px rgba(229, 71, 153, 0.9)",
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      zIndex: {
        90: "90",
        100: "100",
      },
      colors: {
        "matrix-violet": {
          100: "#E9EFFD",
          200: "#D8E4FE",
          300: "#7C96F3",
          400: "#6860CD",
          500: "#4E4C98",
        },
        "matrix-black": {
          100: "#74777F",
          400: "#363C4F",
          800: "#1D2230",
          900: "#090C15",
        },
        "matrix-gray": {
          700: "#223E52",
        },
        "matrix-blue": {
          100: "#46BBFF",
          200: "#4690FF",
          600: "#2A49B8",
        },
        "matrix-pink": {
          200: "#EA70B0",
          400: "#E54799",
          600: "#CC3070",
        },
        "matrix-white": {
          100: "#FFFFFF",
          200: "#E3E3E5",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
