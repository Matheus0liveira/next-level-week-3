import styled, { css } from 'styled-components';

import Landing from '../../assets/images/landing.svg';
import darkLanding from '../../assets/images/darkLanding.svg';

interface PropsTitle {
  typeTitle?: 'title' | 'description'
}

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;


  background: ${props => props.theme.colors.linearGradient};
  background-size: 400% 400%;


  display: flex;
  align-items: center;
  justify-content: center;

  

`;


export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  
  height: 100%;
  max-height: 680px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column; 


  ${props => props.theme.name === 'light' && css`

    background: url(${Landing}) no-repeat 80% center;
    
  `};

  ${props => props.theme.name === 'dark' && css`

    background: url(${darkLanding}) no-repeat 80% center;
    
  `};


`;

export const Location = styled.div`

  position: absolute;
  top: 0;
  right: 0;


  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong,span{

    color: ${props => props.theme.colors.textSecondaryColor};
  }
  strong{

    font-weight: 800;
  }

`;

export const Main = styled.main`


`;


export const Text = styled.h1<PropsTitle>`

  max-width: 350px;
  
  color: ${props => props.theme.colors.textSecondaryColor};

  ${props => props.typeTitle === 'title' && css`

    font-size: 76px;
    font-weight: 900;
    line-height: 70px;

  `};

  ${props => props.typeTitle === 'description' && css`

  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
  font-weight: 600;



  ` };

`;


export const EnterApp = styled.span`

 position: absolute;
 right: 0;
 bottom: 0;


 width: 80px;
 height: 80px;
 background: ${props => props.theme.colors.primaryButton};
 border-radius: 30px;

 display: flex;
 align-items: center;
 justify-content: center;

 transition: background-color .2s;


 &:hover{
   background: ${props => props.theme.colors.secondaryButton};
 }

`;


