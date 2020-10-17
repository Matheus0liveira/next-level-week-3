import styled, { css } from 'styled-components';


interface PropsFooter{

  page?: string;

};
interface PropsMapContainer{

  page?: string;

};


export const MapContainer = styled.div<PropsMapContainer>`


  margin-top: 64px;
  background: ${props => props.theme.colors.mapBg};
  border:${props => props.theme.name === 'dark' ? '1px solid #9F9F9F' :  '1px solid #D3E2E5'};
  border-radius: 20px;



 .leaflet-container {

   border:${props => props.theme.name === 'dark' ? '1px solid #9F9F9F' :  '1px solid #D3E2E5'};
   border-radius: 20px;

 }

 ${props => props.page === 'dashboard' && css`
 

    background: ${props => props.theme.name === 'dark' ? '#505050' :  '#FFF'};

 `};

`;


export const Footer = styled.footer<PropsFooter>`

  padding: 20px 0;
  text-align: center;


    a{

      line-height: 24px;
      color: ${props => props.theme.colors.textFourthColor};
      text-decoration: none;

    };



    ${props => props.page === 'dashboard' && css`
    
      display: flex;
      align-items: center;
      justify-content:space-between;
      padding: 20px 32px;
     
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;


      background: ${props => props.theme.name === 'dark' ? '#505050' :  '#FFF'};

      .leaflet-container {

        border:${props => props.theme.name === 'dark' ? '1px solid #505050' :  '1px solid #FFF'};
        border-radius: 20px;

      }
      h1{
        color: ${props => props.theme.colors.textPrimaryColor};
        font-weight: bold;
        font-size: 24px;
      }


      div{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 8px;
      }
    `}

`;

export const Button = styled.button`

  width: 48px;
  height: 48px;
  background: ${props => props.theme.colors.primaryBackground};
  border: 0;
  border-radius: 16px;
  cursor: pointer;
  transition: opacity .2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    opacity: 0.6;
  }



`;