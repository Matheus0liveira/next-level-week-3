import styled from 'styled-components';


export const Aside = styled.aside`
  position: relative;
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  /* background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%); */
  background:${props => props.theme.colors.linearGradient};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: showAside ease-in-out 2s;

  img{
     width: 48px;
  }




  @keyframes showAside {
    0%{

      left: -100px;

    }

    50%{

      left: 0px;

    }
    100%{

      left: 0px;

    }
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

  }

`;


export const Main = styled.main`


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 16px;

  a,
  button{
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

  }

  /* button:first-child {
    background: #FFD666;
  } */

`;

export const Alert = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FFD666;

`;