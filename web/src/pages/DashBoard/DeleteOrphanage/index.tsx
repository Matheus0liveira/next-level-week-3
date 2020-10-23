import React from 'react';

import {  useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import useUser from '../../../utils/useUser';


import { DeletePage, Main, Text,Buttons, Button, Image } from './styles';


interface PropsParams {
  id: string;
  nameOrphanage: string;
}

const DeleteOrphanage = () => {

  const { goBack } = useHistory();
  const history = useHistory();


  const { id, nameOrphanage } = useParams() as PropsParams;



  if(!id) goBack();

  const { token } = useUser();



  const handleDeleteOrphanage = async () => {

    try{

      const auth = `Bearer ${token}`


      await api.delete(`/dashboard/delete/${id}`, {
        headers: { Authorization: auth}
      });

      toast.error('Deletado com sucesso!!',{ 
          position: toast.POSITION.BOTTOM_RIGHT

        });
      return history.push('/restrict/dashboard/orphanages');


    }catch{


      toast.error('Erro no servidor - ( 500 )',{ 
          position: toast.POSITION.BOTTOM_RIGHT

        });


      return history.push('/');

    }
  };



  return (
   
     <DeletePage>
      <Main>
      <Text typeText='title'>Excluir!</Text>
      <Text 
      typeText='description'
      >
        Você tem certeza que quer
        excluir {nameOrphanage}
      </Text>
     
      <Buttons >
        <Button color='red' onClick={handleDeleteOrphanage}>Confirmar</Button>
        <Button color='green' onClick={goBack}> Voltar para a dashBoard</Button>
      </Buttons>


   
      </Main>
      <Image/>
    </DeletePage>
  );
}

export default DeleteOrphanage;
