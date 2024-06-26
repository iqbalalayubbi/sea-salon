/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8CA3",
        "hover-primary": "#FF6684",
        "white-color": "#F6F5F2",
        cream: "#FFEFEF",
        "black-color": "#424242",
        "cream-brown": "#F0EBE3",
        "start-bg": "#FFFFFF",
        "stop-bg": "#DBDBDB",
      },
      fontFamily: {
        kaushan: ['"Kaushan Script", cursive'],
        pollar: ['"Poller One", serif'],
      },
    },
  },
  plugins: [daisyui],
};
