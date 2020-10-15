import React from 'react';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import CustomThemeProvider from './context/theme';

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <CustomThemeProvider>

      <GlobalStyle/>
      <Routes/>

    </CustomThemeProvider>
  );
}

export default App;
