import React from 'react';

import { FiArrowRight  } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import useTheme from '../../utils/useTheme';


import { PageLanding,Header, ContentWrapper, Main, Text, Location, EnterApp,ButtonRestrict } from './styles';


import SwitchTheme from '../../components/SwitchTheme';

import logoImg from '../../assets/images/logo.svg';



const Landing = () => {

   const {themeValues } = useTheme();


  return (
   
    <PageLanding>


     <SwitchTheme />


      <ContentWrapper>
        <Header>
          <img src={logoImg} alt="Happy"/>
          <Location>
            <strong>Rio do Sul</strong>
            <span>Santa Catarina</span>
          </Location>

        </Header>    
        <Main>
          <Text typeTitle='title'>Leve felicidade para o mundo</Text>
          <Text typeTitle='description'>Visite instituições e mude o dia de muitas crianças.</Text>
        </Main>

        <ButtonRestrict>
          <Link to='/restrict/login'>
          <button type='button'>Acesso restrito</button>
          </Link>
        </ButtonRestrict>


        <Link to='/app'>

          <EnterApp>
            <FiArrowRight size={26} color={themeValues.colors.primarycontentButton} />
          </EnterApp>

        </Link>


      </ContentWrapper>

    </PageLanding>


  );
};


export default Landing;