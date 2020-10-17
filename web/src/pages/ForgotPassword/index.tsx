import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutRestrictAccess from '../../components/LayoutRestrictAccess';


import { Session, Form, Text, InputContainer, Footer, ContentFooter, Button} from './styles';


const ForgotPassword = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemeber] = useState(false);
  const [realeaseButton, setRealeaseButton] = useState(false);


  const handleSubmit = () => {
    return 
  }


  return (


    <LayoutRestrictAccess>
      

    <Session>



        <Form  onSubmit={handleSubmit}>

          <Text>Fazer login</Text>

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
              onClick={() => setRemeber(!remember)}

              />
              <label htmlFor='remember'>Lembrar-me</label>

            </ContentFooter>
              <Link to='/restrict/forgotpassword'>Esqueci minha senha</Link>
            
          </Footer>

          <Button type='submit' realease={realeaseButton}>Entrar</Button >

        </Form>



      </Session>

    </LayoutRestrictAccess>
  );
}

export default ForgotPassword;