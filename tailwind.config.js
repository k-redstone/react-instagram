/** @type {import('tailwindcss').Config} */

// import IMAGES from "./src/images";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "phone-image": "url('/images/home-phones.png')",
        "screen-image": "url('/images/screenshot.png')",
      },
      backgroundColor: {
        secondary: "rgb(250, 250, 250)",
      },
      height: {
        "nav-list-height": "calc(100vh - 76px)",
      },
    },
  },
  plugins: [],
};
