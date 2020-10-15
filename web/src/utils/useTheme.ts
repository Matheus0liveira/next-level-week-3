import { useContext } from 'react';

import { ThemeContext } from '../context/theme';

interface PropsTheme{
  
    name: string;
    colors: {

      
      linearGradient: string;
      primaryBackground: string;
      textPrimaryColor:string;
      createOrphanageBg:string;
      inpuBg: string;
      mapBg: string;
      textSecondaryColor: string; 
      textTirdyColor: string; 
      textFourthColor: string; 
      thirdyWeekendsGradientNoOpen: string,
      textWeekendsNoOpen: string
      primaryButton: string; 
      secondaryButton: string; 
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

const useTheme = () => {


  const context: PropsContext = useContext(ThemeContext);


  if (!context) throw new Error('useTheme must be used whitin a UserProvider');

  const { themeValues, setThemeValues } = context;


  return { themeValues, setThemeValues };



};


export default useTheme;