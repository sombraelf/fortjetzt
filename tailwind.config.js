/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgColor": {
          100: "#f8f7f6"
        },
        "textColor": {
          100: "#253c7e"
        },
        "primaryColor": {
          100: "#0075b9"
        },
        "secondaryColor": {
          100: "#87b0d6"
        },
        "ctaColor": {
          100: "#f08c1a"
        },

      },
    },
  },
  plugins: [],
};