import React from 'react';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import CustomThemeProvider from './context/theme';


function App() {
  return (
    <CustomThemeProvider>

      <GlobalStyle/>
      <Routes/>

    </CustomThemeProvider>
  );
}

export default App;
