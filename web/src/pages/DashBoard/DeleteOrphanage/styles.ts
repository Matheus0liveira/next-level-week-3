import styled, { css } from 'styled-components';

import Exclude from '../../../assets/images/exclude.svg';




interface PropsText {
  typeText: 'title' | 'description';
}
interface PropsButton {
  color: 'red' | 'green';
}


export const DeletePage = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #FF669D;

`;

export const Main = styled.main`

  width: 400px; 

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const Image = styled.div`

  width: 500px; 
  height: 100%;
  background: url(${Exclude}) no-repeat 60% 50%; 

`;
export const Text = styled.h1<PropsText>`

  text-align: center;

  ${props => props.typeText === 'title' && css`

    font-size: 80px;
    font-weight: 800;
    line-height: 80px;
    margin-bottom: 32px;
    

  `}

  ${props => props.typeText === 'description' && css`
  
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    margin-bottom: 60px;
    
  `}

`;


export const Buttons = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

`;
export const Button = styled.button<PropsButton>`

  
  color: #FFF;
  font-weight: 800;
  font-size: 18px;
  border: 0;
  border-radius: 20px;
  height: 64px;
  width: 243px;
  cursor: pointer;


  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;


  ${props => props.color === 'red' && css`
  
    background: #D6487B;
    
  `}

  
  ${props => props.color === 'green' && css`
  
    background: #37C77F;
    
  `}


  transition: opacity .2s ease;

  &:hover{
    opacity: 0.6;
  }

`;