import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetail from './pages/OrphanagesDetail';

const { Navigator, Screen }  = createStackNavigator();


const Routes = () => {

  return (

    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='OrphanagesMap' component={OrphanagesMap}/>
        <Screen name='OrphanagesDetail' component={OrphanagesDetail}/>
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;