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
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 32px;
  line-height: 34px;

`;


export const Form = styled.form`
  width: 100%;
  max-width: 360px;
  max-height: 430px;

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


export const Footer = styled.footer`

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;


  a{
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.colors.textTirdyColor};
    transition: opacity .2s ease;

    &:hover{
      opacity: 0.6;
    }
  }


`;

export const ContentFooter = styled.div`



  display: inherit;
  align-items: inherit;
  justify-content: space-between;


  label{
    color: ${props => props.theme.colors.textTirdyColor};

  }


  input[type='checkbox'] {
    position: absolute;
    z-index: -1;
    /* opacity: 0; */
  }

  input[type='checkbox'] + label {
    position: relative;
    cursor: pointer;
    padding-left: 30px;
    
  }
  input[type='checkbox'] + label::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    bottom: 0;
    border: solid 2px #D3E2E5;
    background: #F5F8FA;
    border-radius: 8px;
    vertical-align: bottom;
  }

  
  input[type='checkbox']:checked + label::after {
    content: '';
    position: absolute;
    left: 0px;
    /* bottom: 10px; */
    width: 21px;
    height: 21px;
    border-radius: 8px;
    border-right:  solid 3px #37C77F;
    border-bottom: solid 3px #37C77F;
    background: #37C77F;
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



