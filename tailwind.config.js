/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "#f26200",
        headerColor: "hsla(0, 0%, 10%, 0.3)",
      },
      width: {
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
