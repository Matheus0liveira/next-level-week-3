import styled from 'styled-components';


export const Container = styled.div`

  position: relative;

  width: 100vw;
  height: 100vh;
  display: flex;
`;


export const Banner = styled.div`

  background:${props => props.theme.colors.linearGradient};
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 100px;

  div{

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    strong{
      font-weight: 800;
    }
    span{
      font-weight: 600;
    }
  strong,
  span{
    font-size: 24px;
    text-align: center;

  }}

`;



export const ButtonBack = styled.button`

  position: absolute;
  top: 40px;
  right: 43px;
  width: 48px;
  height: 48px;
  background: ${props => props.theme.name === 'dark' ? '#505050' : '##EBF2F5'};
  border: 0;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity .2s ease;
  cursor: pointer;

 &:hover{

   opacity: 0.6;
 }

`;

