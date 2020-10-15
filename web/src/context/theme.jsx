import React, { createContext, useState } from 'react';

import light from '../themes/light';



export const ThemeContext = createContext();


const CustomThemeProvider = ( { children } ) => {

  const [ themeValues, setThemeValues] = useState(light);

  return (

    <ThemeContext.Provider value={{themeValues, setThemeValues}}>

        {children}

    </ThemeContext.Provider>
  );
};



export default CustomThemeProvider;