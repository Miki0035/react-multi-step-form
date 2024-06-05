/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'nav-img': "url('./src/assets/images/bg-sidebar-mobile.svg')",
      },
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubuntuBold: ["UbuntuBold", "sans-serif"],
        ubuntuMedium: ["UbuntuMedium", "sans-serif"],
        ubuntuRegular: ["UbuntuRegular", "sans-serif"],
        sans: [
          "UbuntuRegular",
          "UbuntuMedium",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
