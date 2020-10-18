import React from 'react';

import {  Link } from 'react-router-dom';


import { DeletePage, Main, Text,Buttons, Button, Image } from './styles';




const NotFoudPage = () => {


  return (
   
     <DeletePage>
      <Main>
      <Text typeText='title'>Error 404!</Text>
      <Text 
      typeText='description'
      >
        A página que você está tentando acessar, não existe!
      </Text>
     
     <Link to='/app'>
        <Buttons>
          <Button > Voltar para o mapa</Button>
        </Buttons>
      </Link>

   
      </Main>
      <Image/>
    </DeletePage>
  );
}

export default NotFoudPage;
