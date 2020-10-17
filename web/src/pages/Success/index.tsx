import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';



import {SuccessPage, Main, Image, Text, Button} from './styles';




const Sucess = () => {




  return (
    <SuccessPage>
      <Main>
      <Text typeText='title'>Ebaaa!</Text>
      <Text 
      typeText='description'
      >
        O cadastro deu certo e foi enviado ao administrador
        para ser aprovado.Agora é só esperar { ':)' }
      </Text>
      <Link to='/app'>
      <Button> <FiArrowLeft size={24}/> Voltar para o mapa</Button>
      </Link>
      </Main>
      <Image/>
    </SuccessPage>
  );
};

export default Sucess;