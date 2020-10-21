import React, { createContext } from 'react';

import usePersistState from '../utils/usePersistState';

import light from '../themes/light';

interface PropsTheme{

 
    name: string;
    colors: {

      
      linearGradient: string;
      primaryBackground: string;
      textPrimaryColor:string;
      createOrphanageBg:string;
      inputBg: string;
      mapBg: string;
      textSecondaryColor: string; 
      textTirdyColor: string; 
      textFourthColor: string; 
      thirdyWeekendsGradientNoOpen: string,
      textWeekendsNoOpen: string
      primaryButton: string; 
      secondaryButton: string; 
       restrictButtonBg: string;
      restrictButtonBgHover: string;
      restrictButtonText: string;
      restrictButtonTextHover: string;
      primaryBorderSelectButton: string,
      primarySelectButtonBg: string,
      primarySelectButton: string; 
      primarycontentButton: string; 
      secondarycontentButton: string; 
      primaryWeekendsGradient: string; 
      secondaryWeekendsGradient: string;
      primaryIconWeekends: string; 
      secondaryIconWeekends: string; 
      primaryConfirmButton: string; 
      secondaryConfirmButton: string; 
    
    };

}

interface PropsContext {

  themeValues: PropsTheme;
  setThemeValues: any;
};

export const ThemeContext = createContext<PropsTheme | PropsContext>(light);


const CustomThemeProvider: React.FC = ( { children } ) => {

  const [ themeValues, setThemeValues] = usePersistState('@theme', light);

  return (

    <ThemeContext.Provider value={{themeValues, setThemeValues}}>

        {children}

    </ThemeContext.Provider>
  );
};



export default CustomThemeProvider;