/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        "login-background":'url("/login-bg.jpg")'
      },
      height:{
        'large-box' : '500px'
      },
      width:{
        'image-box': '1400px'
      }
      
    },
  },
  plugins: [],
};
