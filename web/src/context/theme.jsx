import React, { createContext, useState } from 'react';


export const ThemeContext = createContext();


export const theme = [
  
  {
    name: 'light',
    
    colors: {
      background: 'linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)',

      primaryColor: '#FFF',

      primaryBackgroundButton: '#FFD666',
      secondaryBackgroundButton: '#96FEFF',

      primarycontentBackgroundButton: '#8D734B',
      secondarycontentBackgroundButton: '#15C3D6'
      
    }
  },
  {
    name: 'dark',

    colors: {
      background: 'linear-gradient(329.54deg, #232526, #414345);',

      primaryColor: '#A5A5A5',

      primaryBackgroundButton: '#494949',
      secondaryBackgroundButton: '#001010',


      primarycontentBackgroundButton: '#FFF',
      secondarycontentBackgroundButton: '#B5B5B5'
    },
  },

];

const CustomThemeProvider = ( { children } ) => {

  const [ themeValues, setThemeValues] = useState(theme[0]);

  return (

    <ThemeContext.Provider value={{themeValues, setThemeValues}}>

        {children}

    </ThemeContext.Provider>
  );
};



export default CustomThemeProvider;