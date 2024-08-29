/** @type {import('tailwindcss').Config} */
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brightRed: "#f26200",
        headerColor: "hsla(0, 0%, 10%, 0.3)",
        primary: "#1a73e8",
        secondary: "#f26200",
        accent: "#fbbc05",
        lightBg: "#F7F7F7",
        darkFg: "#333333",
        darkBg: "#1A1A1A",
        lightFg: "#EDEDED",
        text: "#202124",
      },

      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
      fontFamily: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
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
        keyframes: {
          bounce: {
            "0%, 100%": { transform: "translateY(-5%)" },
            "50%": { transform: "translateY(0)" },
          },
        },
        animation: {
          bounce: "bounce 1s infinite",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
