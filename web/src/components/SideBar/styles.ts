import styled, { css } from 'styled-components';



interface PropsButton{

  active: boolean;

};

export const Aside = styled.aside`
  position: relative;
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background:${props => props.theme.colors.linearGradient};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img{
     width: 48px;
  }

`;

export const Footer = styled.footer`

  a,
  button{
    
    width: 48px;
    height: 48px;

    border: 0;
    background:${props => props.theme.name === 'light' ? '#12AFCB'  : '#494949'};

    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;


    &:hover{
        background:${props => props.theme.name === 'light' ? '#17D6EB'  : '#001010'};
    }

  };

`;


export const Main = styled.main`


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 16px;


  /* button:first-child {
   
  } */

`;

export const Button = styled.button<PropsButton>`

  position: relative;
    width: 48px;
    height: 48px;

    border: 0;
    background:${props => props.theme.name === 'light' ? '#12AFCB'  : '#494949'};

    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background:${props => props.theme.name === 'light' ? '#17D6EB'  : '#001010'};
    }


    ${props => props.active && css`
    
     background: #FFD666;
     transition: none;

     &:hover{
        background: #FFD666;
    }
      
    
    `}

 
`;