import styled, { css } from 'styled-components';

interface PropsText{

  typeText: 'title' | 'count';
}

export const DashBoardPage = styled.div`
  position: relative;
  left: 96px;
  right: 0;
  top: 0;
  bottom: 0;

  width: calc(100% - 100px);



  display: flex;
  align-items: center;
  justify-content: center;

`;


export const Container = styled.header`
  position: relative;
  width: 100%;
  width: 100%;
  max-width: 1100px;
  
  height: 100%;
  max-height: 680px;
`;


export const Header = styled.header`


  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 24px; 
  z-index: 999;

  height: 122px;
  border-bottom: 1px solid  #D3E2E5;
`;


export const Text = styled.h1<PropsText>`

  color: ${props => props.theme.colors.textPrimaryColor};

  ${props => props.typeText === 'title' && css `
  
    font-weight: bold;
    font-size: 32px;
  
  `};


  ${props => props.typeText === 'count' && css `

    font-weight: 600;
    font-size: 16px;

  `};

`;


export const FlexMap = styled.div`

  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-bottom:50px;

  
  

`;
export const MapContaainer = styled.div`

  width: 48%;
  

`;