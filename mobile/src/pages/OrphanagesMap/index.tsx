import React from 'react';

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import MapView, { Callout, Marker } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'


import mapMarker from '../../images/map-marker.png';




const OrphanagesMap = () => {

  const navigation  = useNavigation();


  const handleNavigationToOrphanageDetail = () => {

    navigation.navigate('OrphanagesDetail');

  };


  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
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

        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.3,
            y: 0.8
          }}
          coordinate={{
            latitude: -8.8229483,
            longitude: -44.2194616,
          }}
        >
          <Callout 
          tooltip 
          onPress={handleNavigationToOrphanageDetail}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>

        <TouchableOpacity 
        style={styles.createOrphanageButton}
        onPress={() => {}}
         >

           <Feather name='plus' size={20} color='#FFF'/>
         </TouchableOpacity>
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