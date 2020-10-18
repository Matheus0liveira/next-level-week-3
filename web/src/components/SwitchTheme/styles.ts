import styled, { css } from 'styled-components';

interface PropsSwitch{

  fixed?: boolean;


}

export const StyledSwitchTheme = styled.button<PropsSwitch>`


  ${props => props.fixed && css`

  position: fixed;
  top: 20px;
  right: 40px;


  `}
  ${props => !props.fixed && css`

  margin-bottom: 16px;

  `}



 width: 40px;
 height: 40px;
 background: ${props => props.theme.colors.primaryBackground};
 border: 0;
 border-radius: 10px;

 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 9999;
 cursor: pointer;

 transition: background-color .2s;


 &:hover{
   background: ${props => props.theme.colors.textSecondaryColor};
 }

`;

