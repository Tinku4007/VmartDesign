/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        "900": "#23235F"
      },
      grey:{
        "500":"#67768E",
        "100":"#F3F6F9",
        "900":"#4B5563",
        "600":"#f1f2f5",
        "200":"#E5E7EB",
        "300":"#74767A",
        "400":"#ebebeb",
        "700":"#EDEEF1"
      },
      blue:{
        "500":"#5D5FEF",
        "900":"#1F2937",
        "600":"#0F172A",
        "100":"#E3E4E7"
      },
      yellow:{
        "500":"#FC9D03"
      }
    },
    extend: {},
  },
  plugins: [],
}