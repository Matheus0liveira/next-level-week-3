import React from 'react';

import Routes from './src/routes';

import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, useFonts } from '@expo-google-fonts/nunito';
import ThemeProvider from './src/context/theme';



export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if(!fontsLoaded){
    return null;
  };

  return (
    <ThemeProvider>

        <Routes/>
      
    </ThemeProvider>
    
  );
};
