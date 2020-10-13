import { useContext } from 'react';

import { ThemeContext } from '../context/theme';

interface PropsTheme{
  
    name: string;
    colors: {
         
        background: string;
        primaryColor: string;
        primaryBackgroundButton: string;
        secondaryBackgroundButton: string;
        primarycontentBackgroundButton: string;
        secondarycontentBackgroundButton: string;
    
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