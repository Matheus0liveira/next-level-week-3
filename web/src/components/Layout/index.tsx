import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from '../../utils/useTheme';



const Layout = ({children}: any) => {

  const {themeValues } = useTheme();
  
  return (

    <ThemeProvider theme={themeValues}>
      
    { children }

    </ThemeProvider>
  );
};


export default Layout;