/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'defaultth': '#4361EE',
        'defaultbg': '#F7F7F7',
        'defaultbg2': '#1E1E1E',
        'defaultbg3': '#5065D3',
        'defaulttxt': '#000',
        'defaulttxtbg': '#fff',
        'defaulttxtth': '#4361EE',
        'redth':'#D14351',
        'redbg': '#F7F7F7',
        'redtxt': '#000',
        'redtxtbg': '#fff',
        'redtxtth': '#D14351',
        'greenth': '#508D69',
        'greenbg': '#F7F7F7',
        'greentxt': '#000',
        'greentxtbg': '#fff',
        'greentxtth': '#508D69',
        // 'greenbg': '#508D69',
        'pinkth': '#F875AA',
        'pinkbg': '#F7F7F7',
        'pinktxt': '#000',
        'pinktxtbg': '#fff',
        'pinktxtth': '#F875AA',
        'darkth': '#181818',
        'darkbg': '#2B2B2B',
        'darktxt': '#fff',
        'darktxtbg': '#000',
        'darktxtth': '#fff',
        'default-txt' :'#4361EE',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}

