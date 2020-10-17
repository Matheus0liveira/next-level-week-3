import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'


import * as ImagePicker from 'expo-image-picker'; 
import api from '../../../services/api';

import { Title, Label, Input } from './styles';

interface OrphanageDataRouteParams{
  position: {
    latitude: number;
    longitude: number;

  }
}

export default function OrphanageData() {


  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [phone, setPhone] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const route = useRoute();


  const navigate  = useNavigation();

  const params = route.params as OrphanageDataRouteParams;


  const handleSelectImages = async () => {

    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();


    if(status !== 'granted'){
      alert('Para prosseguir dê acesso à suas fotos');
      return;
    };


    const result = await ImagePicker.launchImageLibraryAsync({

      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });



    if(result.cancelled) return;


    const { uri: image } = result;

    setImages([...images, image]);

  };


  const handleCreateOrphanage = async () => {


    const { latitude, longitude } = params.position;

    

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('phone', phone);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    });


    await api.post('orphanages', data);

    navigate.navigate('OrphanagesMap');
  };


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input
        
        value={name}
        onChangeText={setName}
      />

      <Label>Sobre</Label>
      <Input
        
        style={ { height: 110 }}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <Label>Whatsapp</Label>
      <TextInputMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}
        style={styles.input}
        
        value={phone}
        onChangeText={setPhone}
      />

      <Label>Fotos</Label>


      <ScrollView horizontal disableScrollViewPanResponder style={styles.uploadImagesContainer}>
        {images.map(image => (

          <Image 
          
          key={image}
          source={{uri: image}}
          style={styles.uploadedImages}
          /> 
        ))}
      </ScrollView>


      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        style={{ height: 110 }}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Label>Horario de visitas</Label>
      <Input
        
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <View style={styles.switchContainer}>
        <Label>Atende final de semana?</Label>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18 ,
    paddingHorizontal: 24 ,
    
    marginBottom: 16,
    
  },

  uploadImagesContainer: {
    flexDirection: 'row',


  },

  uploadedImages: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8, 

  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})