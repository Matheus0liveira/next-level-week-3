import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import LayoutRestrictAccess from '../../components/LayoutRestrictAccess';
import api from '../../services/api';


import { Session, Form, Text, InputContainer, Button} from './styles';


const ForgotPassword = () => {


  const [email, setEmail] = useState('');
  const [unlockButton, setUnlockButton] = useState(false);
  const [ loadingButton, setLoadingButton ] = useState(false);


  const history = useHistory();


  useEffect(()=>{

    
    
    if(validateEmail(email)){
      return setUnlockButton(true);
    };

    return setUnlockButton(false);


  },[email]);




  const validateEmail = (email: string) => {


    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  };




  const handleSubmit = async (event: FormEvent) => {
   event.preventDefault();


    if(!validateEmail(email)){
      return setUnlockButton(false);
    };

    setLoadingButton(true);
    setUnlockButton(false);
    await api.post('/users/forgot_password', {
        email
    }).catch(() => {
      
      toast.error(`📬 Erro no servidor - ( 500 )`,{ 
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,  

      });


     return history.push('/');
    }
    );



    toast.info(`📬 Enviamos um link para: ${email}, verifique sua caixa de entrada!`,{ 
      position: toast.POSITION.BOTTOM_RIGHT,
      closeOnClick: true,  

    });


    history.push('/restrict/login');
     
  }
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #FFF;
  color: #FFF;
  /* width: 10px; 
  height: 10px; */
`;
  


  return (


    <LayoutRestrictAccess>
      

    <Session>



        <Form  onSubmit={handleSubmit}>

          <Text>Esqueci a senha</Text>
          <p>Sua redefinição de senha será enviada
             para o e-mail cadastrado.</p>

          <InputContainer>

            <label htmlFor="email">E-mail</label>  
            <input 
            type="text" 
            placeholder='happy@mail.com' 
            id='email'
             value={email}
             onChange={(event) => setEmail(event.target.value)}
            
            />

          </InputContainer>

          
          <Button type='submit' realease={unlockButton}>
            { !loadingButton ? 
            (

             <span>Enviar</span>

            ) 
            :
            (

              <PuffLoader
              css={override}
              size={40}
              color='#FFF'
              loading={true}
            />


            )}
            
            
            </Button >
        </Form>

      </Session>

    </LayoutRestrictAccess>
  );
}

export default ForgotPassword;