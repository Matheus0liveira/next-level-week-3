import React from 'react';

import {  useHistory } from 'react-router-dom';


import { DeletePage, Main, Text,Buttons, Button, Image } from './styles';




const DeleteOrphanage = () => {

  const { goBack } = useHistory();
  return (
   
     <DeletePage>
      <Main>
      <Text typeText='title'>Excluir!</Text>
      <Text 
      typeText='description'
      >
        Você tem certeza que quer
        excluir Orf. Esperança?
      </Text>
     
      <Buttons onClick={goBack}>
        <Button color='red'>Confirmar</Button>
        <Button color='green'> Voltar para a dashBoard</Button>
      </Buttons>


   
      </Main>
      <Image/>
    </DeletePage>
  );
}

export default DeleteOrphanage;
