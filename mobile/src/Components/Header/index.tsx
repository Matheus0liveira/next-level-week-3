import React from 'react';
import { View} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { Container, Title } from './styles';

 
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

    <Container>

      <BorderlessButton onPress={navigation.goBack}>

        <Feather name='arrow-left' size={24} color='#15B6D6'/>
          
      </BorderlessButton>
      
      <Title>{title}</Title>  

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



    </Container>

  );
};



export default Header;