import styled from 'styled-components';



export const StyledSwitchTheme = styled.button`

 position: absolute;
 top: 20px;
 right: 40px;


 width: 40px;
 height: 40px;
 background: ${props => props.theme.colors.primaryBackgroundButton};
 border: 0;
 border-radius: 10px;

 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 9999;
 cursor: pointer;

 transition: background-color .2s;


 &:hover{
   background: ${props => props.theme.colors.secondaryBackgroundButton};
 }

`;

