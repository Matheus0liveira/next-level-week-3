import React, { createContext, useState } from 'react';

import usePersistStateTheme from '../utils/usePersistStateTheme';

import light from '../themes/light';



export const ThemeContext = createContext();


const CustomThemeProvider = ( { children } ) => {

  const [ themeValues, setThemeValues] = usePersistStateTheme('theme', light);

  return (

    <ThemeContext.Provider value={{themeValues, setThemeValues}}>

        {children}

    </ThemeContext.Provider>
  );
};



export default CustomThemeProvider;