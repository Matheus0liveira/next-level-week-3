import React, { useEffect, useState } from 'react';

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { RectButton } from "react-native-gesture-handler";



import mapMarkerImg from '../../images/map-marker.png';
import api from '../../services/api';


interface Orphanage{

  id: number,
  name: string;
  latitude: number,
  longitude: number,

}


const OrphanagesMap = () => {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  

  useFocusEffect(() => {

    (
      async () => {
       const {data} = await api.get('/orphanages');

       if(data) setOrphanages(data);
      }
    )()

    console.log(orphanages);

  });

  const navigation  = useNavigation();


  const handleNavigationToOrphanageDetail = (id: number) => {

    navigation.navigate('OrphanagesDetail', { id });

  };
  const handleNavigationToCreateOrphanage = () => {

    navigation.navigate('SelectMapPosition');

  };


  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        
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
            <View style={styles.calloutContainer}>
        <Text style={styles.calloutText}>{orphanage.name}</Text>
            </View>
          </Callout>
        </Marker>


      ))}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} Orfanatos encontrados</Text>

        <RectButton 
        style={styles.createOrphanageButton}
        onPress={handleNavigationToCreateOrphanage}
         >

           <Feather name='plus' size={20} color='#FFF'/>
         </RectButton>
      </View>
    </View>
  );
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer:{

    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText:{
    fontFamily: 'Nunito_700Bold',
    color: '#0089A5',
    fontSize: 14
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
    

  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8FA7B3'
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