import styled, { css } from 'styled-components';

interface PropsButtonSubmit{

  realease: boolean;
}



export const Session = styled.div`

  width: 40%;
  height: 100vh;
  background: ${props => props.theme.name === 'dark' ? '#494949' : '#FFF'};
  display: flex;
  align-items: center;
  justify-content: center;
  
`;


export const Text = styled.h1`

  color: ${props => props.theme.colors.textPrimaryColor};
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 32px;
  line-height: 34px;

`;


export const Form = styled.form`
  width: 100%;
  max-width: 360px;
  max-height: 430px;


  p{
    color: ${props => props.theme.colors.textFourthColor};
    margin-bottom: 40px;
  }

`;


export const InputContainer = styled.div`

 display: flex;
 flex-direction: column;

 label{
  color: ${props => props.theme.colors.textTirdyColor};
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
 }


 input{
    width: 360px;
    height: 64px;
    background: ${props => props.theme.colors.inputBg};
    border: 1px solid #A1E9C5;
    border:${props => props.theme.name === 'dark' ? '1px solid #9F9F9F' :  '1px solid ##A1E9C5'};
    color: ${props => props.theme.colors.textTirdyColor};
    border-radius: 20px;
    padding: 21px 24px;
    
 }



`;


export const Button = styled.button<PropsButtonSubmit>`

  margin-top: 42px;
  width: 360px;
  height: 64px;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  background: #37C77F;
  border: 0;
  border-radius: 20px;

  transition: all .2s ease;


  ${props => props.realease ? css`

    opacity: 1;
    cursor: pointer;


    &:hover{

      background: #2bb972;

    }

  ` 
  : 
  css`
  
  
    opacity: 0.6;
    cursor: not-allowed;
  
  ` }

`;
