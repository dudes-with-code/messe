/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clip: {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
      },
    },
  },
  plugins: [],
};
