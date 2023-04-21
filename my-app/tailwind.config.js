/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      bgDark: "#1C2F58",
      bgDark2: "#2B457B",
      textPrimaryDark: '#ffffff',
      textSecondaryDark: '#E3EBF3',
      textCompanyDark: '#A7B0B5',
     bgButtonDark: '#4B5C81',

     bgLight: "#F9FAFC",
     textPrimaryLight: '#26375D',
     textSecondaryLight: '#575E6C',
     bgButtonLight: '#E3EBF3',
     textButtonLight: '#6E7480',
     textCompanyLight: '#6E7480',
     gridsLight:'#EEF3F7',
     gridsDark: '#364878'

    },
    screens: {
      'xxsm': '256px',
      'xsm': "498px",
      'ms': '640px',
      'md': '768px',
      'lg':'1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1120px'
       },
       fontSize:{
        xsm: '0.625rem', //10px
        sm: '0.75rem', // 12px
        base: '1rem', //16px
        xl: '1.5rem', //24px
        '2xl': '2rem', //32px
        // '3xl': '2.5rem', //40px
        '3xl': '2.75rem', // 44px
        '4xl': '3.5rem', //56px
        '5xl': '4rem', //64px
        '6xl': '5rem' //80px
      },
    extend: {
      maxWidth: {
        '3xl': '1120px'
      }
    },
  },
  plugins: [],
}
