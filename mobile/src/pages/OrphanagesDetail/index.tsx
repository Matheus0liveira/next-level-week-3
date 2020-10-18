import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../images/map-marker.png';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';


import { 
  ImagesContainer, 
  DetailsContainer, 
  MapContainer, 
  RoutesText, 
  Separator,
  Title,
  Description,
  ScheduleContainer,
  ScheduleItem,
  ContactButtonText,
  ScheduleText
} from './styles';

interface OrphanageDetailsParams{
  id: number;
};


interface OrphabageDetails{

  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  phone: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>

};

export default function OrphanageDetails() {

  const [orphanage, setOrphanage] = useState<OrphabageDetails>();

  const route = useRoute();


  const { id } = route.params as OrphanageDetailsParams;



  useEffect(() => {

    (
      async () => {

       const {data}  = await  api.get(`orphanages/${id}`);


       if(data){

         return setOrphanage(data);
       };
       
      }
      )();

  }, [id]);

  

   if(!orphanage){

    return (

    <View style={styles.container}> 
      <Description>  Carregando...</Description>
    </View>

    );
  };

  const handleOpenGoogleMapsRoute = () => {

    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`)
  };


  const handleOpenWhatsAppRoute = () => {

    Linking.openURL(`https://api.whatsapp.com/send?phone=+55${orphanage.phone}&text=Oi! ví seu orfanato (${orphanage.name}) no happy, como posso fazer uma visita?`);
  
  
  };


  return (
    <ScrollView style={styles.container}>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map(image => (
            
            <Image 
            key={image.id}
            style={styles.image} 
            source={{ uri: image.url }} />

          ) )}
        </ScrollView>
      </ImagesContainer>
      

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>
      
        <MapContainer>

          <MapView 
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            />
          </MapView>

          <TouchableOpacity onPress={handleOpenGoogleMapsRoute} style={styles.routesContainer}>
            <RoutesText>Ver rotas no 'Google' Maps</RoutesText>
          </TouchableOpacity>
        </MapContainer>
      
        <Separator />

        <Title>Instruções para visita</Title>
            <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem colorItem='blue'>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText colorItem='blue'>Segunda a sexta: {orphanage.opening_hours}</ScheduleText>
          </ScheduleItem>

          { 
          orphanage.open_on_weekends 
          ? 
          (

            <ScheduleItem colorItem='green'>
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleText colorItem='green'>Atendemos fim de semana</ScheduleText>
            </ScheduleItem>

          )
          : 
          (

            <ScheduleItem colorItem='red'> 
              <Feather name="info" size={40} color="#FF669D" />
              <ScheduleText colorItem='red'>Não Atendemos fim de semana</ScheduleText>
            </ScheduleItem>

          )
          }
          
        </ScheduleContainer>

        <RectButton style={styles.contactButton} onPress={handleOpenWhatsAppRoute}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </RectButton>
      </DetailsContainer>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routesText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5'
  },

  contactButton: {
    backgroundColor: '#3CDC8C',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 40,
  },

})