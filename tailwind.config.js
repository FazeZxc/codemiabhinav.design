/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "fjallaOne": "Fjalla One",
    },
    extend: {
      colors: {
        contact: "#FB6F3E",
        dark: "#272727",
        light: "#ebeae5",
      },
      backgroundImage: {
        "landing-bg": "url('/src/assets/dancer.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
