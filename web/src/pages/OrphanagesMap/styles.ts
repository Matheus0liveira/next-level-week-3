import styled, { css } from 'styled-components';

interface TitleProps {

  typeText?: 'title' | 'description'
}

interface ButtonProps {

  typeSwitch: 'light'| 'dark' | 'satelite';
  select: boolean;


 }


export const PageMap = styled.div`

   width: 100vw;
   height: 100vh;

   position: relative;

   display: flex;

//LefLet PopUp INIT


 .map-popup .leaflet-popup-content-wrapper{
   background:rgba(255,255,255, 0.8);
   border-radius:20px;
   box-shadow:none;
 }
 .map-popup .leaflet-popup-content{
   color: #0089A5;

   font-size: 20px;
   font-weight: bold;
   margin: 8px 12px;

   display: flex;
   justify-content: space-between;
   align-items: center;


   a{

     width: 40px;
     height: 40px;
     background: #15C3D6;
     box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);

     border-radius: 12px;

     display: flex;
     align-items: center;
     justify-content:center;

   }


 }

 .map-popup .leaflet-popup-tip-container{
  display: none;
 }


 //LefLet PopUp INIT
`;


export const Header = styled.header``;


export const Aside = styled.aside`

  width: 440px;
  background:${props => props.theme.colors.linearGradient};
  padding: 88px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const Text= styled.h2<TitleProps>`

  color: ${props => props.theme.colors.textSecondaryColor};

  ${props => props.typeText === 'title' && css`
    
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;

  `};


  ${props => props.typeText === 'description' && css`

    line-height: 28px;

    font-size: 18px;
    margin-top: 2px;
    font-weight: 600;

  `};

`;


export const Footer = styled.footer`

  display: flex;
  flex-direction: column;

  line-height: 24px;


 strong,span{
   color: ${props => props.theme.colors.textSecondaryColor};
 }

  strong{
    

    font-weight: 800;
  }

`;


export const CreateOrphanages = styled.span`

  position: absolute;
  right:40px;
  bottom: 40px;

  width: 64px;
  height: 64px;

  /* background:${props => props.theme.name === 'dark' ? '#494949' : '#17D6EB'}; */
  background:${props => props.theme.colors.linearGradient};

  
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &:hover{

    background:${props => props.theme.colors.secondarycontentButton};
   
  }


`;


export const SelectStyleMap = styled.button<ButtonProps>`

  position: absolute;
  right:40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 800;

  background:${props => props.theme.name === 'dark' ? '#494949' : '#17D6EB'};
  color: #FFF;
  border: 0;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  cursor: pointer;
 

  ${props => props.typeSwitch === 'light' && css`

    bottom:135px;
  `}


  ${props => props.typeSwitch === 'dark' && css`

    bottom:205px;
  `}


  ${props => props.typeSwitch === 'satelite' && css`

    bottom:275px;
  `}


  ${props => props.select === true && css`

    background: #FFD666;
    color: #202020;

    &:hover{
      background: #FFD666;
    }
  `}


`;


export const StyledPopUp = styled.div`

  z-index: 999;
  

  .map-popup .leaflet-popup-content-wrapper{
    background: red;
    border-radius: 30px;
    box-shadow: 10px 10px 10px red;
  }

`;