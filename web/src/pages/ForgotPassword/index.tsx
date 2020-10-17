import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutRestrictAccess from '../../components/LayoutRestrictAccess';


import { Session, Form, Text, InputContainer, Button} from './styles';


const ForgotPassword = () => {


  const [email, setEmail] = useState('');
  const [realeaseButton, setRealeaseButton] = useState(false);


  useEffect(()=>{

    
    
    if(validateEmail(email)){
      return setRealeaseButton(true);
    };

    return setRealeaseButton(false);


  },[email]);



  const validateEmail = (email: string) => {


    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  };




  const handleSubmit = () => {
    return 
  }


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

          
          <Button type='submit' realease={realeaseButton}>Enviar</Button >

        </Form>

      </Session>

    </LayoutRestrictAccess>
  );
}

export default ForgotPassword;