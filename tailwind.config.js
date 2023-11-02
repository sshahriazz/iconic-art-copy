/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#373635",
        secondary: "#F4F4F4",
      },
      fontFamily: {
        paradise: "Dark Paradise",
        futura: "Futura",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
