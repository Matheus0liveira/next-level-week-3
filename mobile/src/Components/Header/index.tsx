import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface PropsHeader{

  title: string;
  showCancel?: boolean;
}

const Header = ({title, showCancel = true} : PropsHeader) => {

  const navigation = useNavigation();




  const handleGoBackAppHomePage = () => {

    navigation.navigate('OrphanagesMap');
  }
  return (

    <View style={styles.container}>

      <BorderlessButton onPress={navigation.goBack}>

        <Feather name='arrow-left' size={24} color='#15B6D6'/>
          
      </BorderlessButton>
      
      <Text style={styles.title}>{title}</Text>  

      {
        showCancel ? (

          <BorderlessButton onPress={handleGoBackAppHomePage}>

        <Feather name='x' size={24} color='#FF669D'/>
          
      </BorderlessButton>
        )
        :
        (
          <View/>
        )
      }



    </View>

  );
};


const styles = StyleSheet.create({

  container: {

    padding: 24,
    backgroundColor: '#F9FAFC',
    borderBottomWidth: 1,
    borderColor: '#DDE3F0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  title: {

    fontFamily: 'Nunito_600SemiBold',
    color: '#8FA7B3',
    fontSize: 16,
  }
});

export default Header;