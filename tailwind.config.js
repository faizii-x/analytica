
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     animation: {
        blobMove: "spin 60s linear infinite", 
      },
       fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], 
        heading: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
