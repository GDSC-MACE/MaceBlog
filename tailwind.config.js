/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      glass: "#272B2F",
      primary: "#FF6700",
      secondary: "#FFFFFF",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    animation: {
      slide: "slide 5s linear infinite",
    },
    keyframes: {
      slide: {
        "0%": { transform: "translateY(100%)", opacity: 0.1 },
        "15%": { transform: "translateY(0)", opacity: 1 },
        "30%": { transform: "translateY(0)", opacity: 1 },
        "45%": { transform: "translateY(-100%)", opacity: 1 },
        "100%": { transform: "translateY(-100%)", opacity: 0.1 },
      },
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];

