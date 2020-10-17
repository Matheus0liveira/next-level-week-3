import React, { useState } from 'react';

import { Dimensions, StyleSheet } from 'react-native';


import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { RectButton } from "react-native-gesture-handler";



import mapMarkerImg from '../../images/map-marker.png';
import api from '../../services/api';

import { ViewContainer, CalloutContainer, Footer, FooterText, CalloutText } from './styles';
import SwitchTheme from '../../Components/SwitchTheme';
import { ThemeProvider} from 'styled-components';
import useTheme from '../../utils/useTheme';


interface Orphanage{

  id: number,
  name: string;
  latitude: number,
  longitude: number,

}


const OrphanagesMap = () => {

  const { themeValues } = useTheme();

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
 

  useFocusEffect(() => {

    (
      async () => {
       const {data} = await api.get('/orphanages');

       if(data) setOrphanages(data);
      }
    )()

    

  });

  const navigation  = useNavigation();


  const handleNavigationToOrphanageDetail = (id: number) => {

    navigation.navigate('OrphanagesDetail', { id });

  };
  const handleNavigationToCreateOrphanage = () => {

    navigation.navigate('SelectMapPosition');

  };


  return (
    <ThemeProvider theme={themeValues}>
      <ViewContainer>
        <SwitchTheme/>
        <MapView
          // provider={PROVIDER_GOOGLE}


          style={styles.map}
          initialRegion={{
              latitude: -8.8229483,
              longitude: -44.2194616,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008

          }}
        >

        {orphanages.map(orphanage => (

          <Marker
          key={orphanage.id}
            icon={mapMarkerImg}
            calloutAnchor={{
              x: 2.3,
              y: 0.8
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout 
            tooltip 
            onPress={() => handleNavigationToOrphanageDetail(orphanage.id)}
            >

              <CalloutContainer >
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>

            </Callout>

          </Marker>


        ))}
        </MapView>

        <Footer>
          <FooterText>{orphanages.length} Orfanatos encontrados</FooterText>

          <RectButton 
          style={styles.createOrphanageButton}
          onPress={handleNavigationToCreateOrphanage}
          >

            <Feather name='plus' size={20} color='#FFF'/>
          </RectButton>
        </Footer>
      </ViewContainer>
    </ThemeProvider>
  );
  
};


const styles = StyleSheet.create({
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
  createOrphanageButton: {

    width: 56,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default OrphanagesMap;