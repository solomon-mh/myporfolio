/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "#f26200",
        headerColor: "hsla(0, 0%, 10%, 0.3)",
        primary: "#1a73e8",
        secondary: "#f26200",
        accent: "#fbbc05",
        background: "#ffffff",
        text: "#202124",
      },
      width: {
        "9/10": "90%",
      },
      animation: {
        shimmer: "shimmer 3.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
