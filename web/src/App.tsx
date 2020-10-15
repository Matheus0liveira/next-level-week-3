import React from 'react';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import CustomThemeProvider from './context/theme';

import 'leaflet/dist/leaflet.css';
import Layout from './components/Layout';

function App() {
  return (
    <CustomThemeProvider>

      <Layout>

        <GlobalStyle/>
        <Routes/>

      </Layout>
      

    </CustomThemeProvider>
  );
}

export default App;
