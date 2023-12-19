/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primarycolor': '#FAE3B6',
        'secondarycolor': '#FDBB57',
        'countercolor': '#FEECC8',
        'bestcolor': '#CFA485',
        'bordercolor': '#FFD687',
      },
      fontSize: {
         'mainheading':"64px",
          'para':"22px",
          counter:"28px",
      },
      fontFamily: {
        pop :['Poppins'],
        frank :['Frank Ruhl Libre'], 
        pod :['Podkova'] 
         
      },
      maxWidth: {
       "container": '1320px',
      }
    },
  },
  plugins: [],
}

