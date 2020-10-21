import React from 'react';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import CustomThemeProvider from './context/theme';

import 'leaflet/dist/leaflet.css';
import Layout from './components/Layout';
import UserProvider from './context/user';

function App() {
  return (
    <CustomThemeProvider>

      <Layout>

        <GlobalStyle/>

        <UserProvider>
          
          <Routes/>
          
        </UserProvider>

      </Layout>
      
    </CustomThemeProvider>
  );
}

export default App;
