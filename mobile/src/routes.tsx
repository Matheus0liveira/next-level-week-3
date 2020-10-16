import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetail from './pages/OrphanagesDetail';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import Header from './Components/Header';

const { Navigator, Screen }  = createStackNavigator();


const Routes = () => {

  return (

    <NavigationContainer>
      <Navigator 
      screenOptions={
        {headerShown: false, 
          cardStyle: { 
            backgroundColor: '#F2F3F5' 
          }
        }
      }
      
      >

        <Screen 
        name='OrphanagesMap' 
        component={OrphanagesMap}
        />

        <Screen 
        name='OrphanagesDetail' 
        component={OrphanagesDetail} 
        options={{ 
          headerShown: true,
          header: () =>  <Header showCancel={false} title='Orfanato'/> }}
        />

        <Screen 
        name='OrphanageData' 
        component={OrphanageData}
        options={{ 
          headerShown: true,
          header: () =>  <Header title='Selecione no mapa'/> }}
        />

        <Screen 
        name='SelectMapPosition' 
        component={SelectMapPosition}
        options={{ 
          headerShown: true,
          header: () =>  <Header title='Informe os dados'/> }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;