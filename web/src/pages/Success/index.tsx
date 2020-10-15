import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Lottie from 'react-lottie';

import {SuccessPage, Space, Text} from './styles';

import SucessLoadingGif from '../../assets/images/gif/success.json';


const Sucess = () => {

  const [showGif, setShowGif] = useState(false);


  const history = useHistory();

  useEffect(()=>{


    setTimeout(() => {

      setShowGif(true);
    },1000);
    setTimeout(()=>{
        
      history.push('/app');
    }, 2500);

    
    

  },[history]);

  const SucessLoading = {
    loop: false,
    autoPlay: true,
    animationData: SucessLoadingGif,

  };

  return (
    <SuccessPage>
      {showGif ? (
        
        <Lottie 
        isClickToPauseDisabled 
        options={SucessLoading} 
        width={200} 
        height={200}
        
        />
      ) :
      (
        <Space></Space>
      )
      }
      <Text>Orfanato</Text>
      <Text>Cadastrado com Sucesso</Text>
    </SuccessPage>
  );
};

export default Sucess;