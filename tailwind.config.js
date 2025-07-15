/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          10: "#03FF7B",
          20: "#00E7B6",
          30: "#04CBE8",
          40: "#05AAFF",
          50: "#0084FE",
          60: "#0057D6",
          70: "#78C8F2",
        },
      },
    },
  },
  plugins: [],
};
