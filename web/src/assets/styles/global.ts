import { createGlobalStyle } from 'styled-components';

interface Props{
  theme: {
    name: string;
    colors: {

      
      linearGradient: string;
      primaryBackground: string;
      textPrimaryColor:string;
      createOrphanageBg:string;
      textSecondaryColor: string; 
      textTirdyColor: string; 
      textFourthColor: string; 
      primaryButton: string; 
      secondaryButton: string; 
      primarySelectButton: string; 
      primarycontentButton: string; 
      secondarycontentButton: string; 
      primaryWeekendsGradient: string; 
      secondaryWeekendsGradient: string;
      primaryIconWeekends: string; 
      secondaryIconWeekends: string; 
      primaryConfirmButton: string; 
      secondaryConfirmButton: string; 
    
    };
  }
  
}

const GlobalStyle = createGlobalStyle<Props>`


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }


  body{
    color: #FFF;
    background: ${props => props.theme.colors.primaryBackground};

  }


  body, input, button, textarea{
    font: 600 18px  Nunito, sans-serif;
  }


  input, button, textarea{
    outline: 0;
  }
  

  a{
    text-decoration: none;
  }

`;


export default GlobalStyle;