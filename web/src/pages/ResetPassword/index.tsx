import React, { useEffect, useState, FormEvent } from 'react';


import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import LayoutRestrictAccess from '../../components/LayoutRestrictAccess';
import api from '../../services/api';

import {
  Session,
  Text,
  Form, 
  InputContainer, 
  Footer, 
  ContentFooter,
  Button
} from './styles';



interface PropsParams{

  token: string; 
}



const ResetPassword = () => {




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [unlockButton, setUnlockButton] = useState(false);



  const history = useHistory();


  const { token } = useParams() as PropsParams;



  useEffect(()=>{

    
    
    if(validateEmail(email) && password.length > 5){
      return setUnlockButton(true);
    };

    return setUnlockButton(false);


  },[email, password]);


  const validateEmail = (email: string) => {


    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  };




  useEffect(() => {

    if(!token){

      history.push('/notfound');
    }
  }, [history, token]);


  const handleSubmit = async (event: FormEvent) => {


   
    event.preventDefault();


    if(!unlockButton){
      return;
    }


    try{

      await api.put(`/users/reset_password/${token}`, {
        email, password
      });

      toast.success(`Senha redefinida como sucesso`,{ 
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
  
        });
        history.push('/restrict/login');
      


    
    }catch({ response }){

      switch (response.status){

        case 408 || 404: 
        toast.warning(`Você não tem autorização para trocar a senha, solicite um link para acesso na página de: esqueci minha senha`,{ 
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
  
        });
        history.push('/restrict/login'); 

        break;


        case 404: 

         toast.error(`😥 Usuário não encontado, solicite uma conta para autorização `,{ 
        position: toast.POSITION.BOTTOM_RIGHT,
        closeOnClick: true,
  
        });
        history.push('/restrict/login');

        break;


      }




      // console.log(e);


    }

    // history.push('/restrict/dashboard/orphanages'); 
    
 
  };
    




  return (  

      <LayoutRestrictAccess>
    
      <Session>

        <Form  onSubmit={handleSubmit}>

          <Text>Redefina sua senha</Text>

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

          <InputContainer>

            <label htmlFor="password" style={{marginTop: '16px'}}>Senha</label>  
            <input 
            type="password" 
            placeholder='******************' 
            id='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
           
            
            />

          </InputContainer>


          <Footer>
            <ContentFooter>

              <input 
              type="checkbox" 
              name="remember" 
              id="remember"
              defaultChecked={remember}
              onClick={() => setRemember(!remember)}

              />

            </ContentFooter>
              
            
          </Footer>

          <Button type='submit' realease={unlockButton}>Redefir</Button >

        </Form>




      </Session>
      
      </LayoutRestrictAccess>
  );
};



export default ResetPassword;