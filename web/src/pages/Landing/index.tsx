import React from 'react';
import { ThemeProvider } from 'styled-components';

import { FiArrowRight  } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import useTheme from '../../utils/useTheme';


import { PageLanding, ContentWrapper, Main, Text, Location, EnterApp } from './styles';


import SwitchTheme from '../../components/SwitchTheme';

import logoImg from '../../assets/images/logo.svg';



const Landing = () => {

   const {themeValues } = useTheme();


  return (
    <ThemeProvider theme={themeValues}>
    <PageLanding>


     <SwitchTheme />


      <ContentWrapper>
        
        <img src={logoImg} alt="Happy"/>

        <Main>
          <Text typeTitle='title'>Leve felicidade para o mundo</Text>
          <Text typeTitle='description'>Visite orfanatos e mude o dia de muitas crianças.</Text>
        </Main>


        <Location>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </Location>


        <Link to='/app'>

          <EnterApp>
            <FiArrowRight size={26} color={themeValues.colors.primarycontentBackgroundButton} />
          </EnterApp>

        </Link>


      </ContentWrapper>

    </PageLanding>

    </ThemeProvider>
  );
};


export default Landing;