import styled, { css } from 'styled-components';

import Success from '../../assets/images/Success.svg';


interface PropsText{
  typeText: 'title' | 'description';
}

export const SuccessPage = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #37C77F;
  overflow: hidden;



`;
export const Main = styled.main`
  width: 500px; 

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

    
`;
export const Image = styled.div`
  width: 500px; 
  height: 100%;
  background: url(${Success}) no-repeat 60% 50%;

    
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

export const Button = styled.button`
  position: relative;

  background: #31B272;
  border: 0;
  width : 243px;
  height: 64px;
  border-radius: 20px;
  color: #FFF;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
  transition: background .2s ease;
  padding-left: 25px;

  display: flex;
  align-items: center;
  justify-content: center;


  &:hover{
    background: #3BD689;
    

    svg{
      animation: icon 1s infinite ease;
    }
  }

  svg{
    margin-right: 5px;
     position: absolute;
     left: 20px;
  }

  @keyframes icon {
    0%{
      margin-left: 0px;
       
    }
    25%{
      margin-left: 5px;

    }
    50%{
      margin-left: 10px;

    }
    75%{
      margin-left: 5px;

    }
    100%{
      margin-left: 0px;

    }
  }

  


`;