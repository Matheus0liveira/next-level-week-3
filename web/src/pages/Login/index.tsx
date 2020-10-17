import React, { useEffect, useState } from 'react';


import { FiArrowLeft } from 'react-icons/fi';

import Logo from '../../assets/images/Logotipo.svg';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Banner, 
  Session,
  Text, 
  ButtonBack, 
  Form, 
  InputContainer, 
  Footer, 
  ContentFooter,
  Button
} from './styles';



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemeber] = useState(false);
  const [realeaseButton, setRealeaseButton] = useState(false);



  useEffect(()=>{


    
    if(email.includes('@') && password.length > 5){
      return setRealeaseButton(true);
    };

    return setRealeaseButton(false);
  },[email, password]);

  return (
    <Container>
      <Banner>
        <img src={Logo} alt="Happy"/>
        <div>
          <strong>Rio do Sul</strong>
          
          <span>Santa Catarina</span>
        </div>
      </Banner>

      <Session>

        <Link to='/'>
          <ButtonBack>
            <FiArrowLeft size={24} color='#15C3D6' />
          </ButtonBack>
        </Link>


        <Form>

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
            type="text" 
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
              // value={remember ? 1 : 0}
              defaultChecked={remember}
              onClick={() => setRemeber(!remember)}

              />
              <label htmlFor='remember'>Lembrar-me</label>

            </ContentFooter>
              <Link to=''>Esqueci minha senha</Link>
            
          </Footer>

          <Button type='submit' realease={realeaseButton}>Entrar</Button >

        </Form>



      </Session>
    </Container>
  );
};



export default Login;