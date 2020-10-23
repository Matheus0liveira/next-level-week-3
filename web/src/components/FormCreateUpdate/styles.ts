import styled, { css } from 'styled-components';


interface PropsButton{

  typeStyle: 'select' | 'confirm';
  active?: boolean;
}
interface PropsButtonForm{

  color: 'red'| 'green'
}



interface PropsButtonMarkerSelect{

  active: boolean;

}

export const PageCreateOrphanage = styled.div`

  display: flex;


  main{
    flex: 1;
  }
`


export const CreateOrphanageForm = styled.form`

  position: relative;
  width: 700px;
  margin: 40px auto 60px auto;

  background:${props => props.theme.colors.createOrphanageBg};

  border: ${props => props.theme.name === 'dark' ? '1px solid #585858' :  '1px solid #D3E2E5'};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  padding: 64px 80px 250px 80px;

  overflow: hidden;



  fieldset{

      border: 0;
  }


  fieldset + fieldset {

    margin-top: 80px;
  }


  legend{

    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color:${props => props.theme.colors.textPrimaryColor};
    
    font-weight: 700;

   
    border-bottom: ${props => props.theme.name === 'dark' ? '1px solid #9F9F9F' :  '1px solid #D3E2E5'};
    margin-bottom: 40px;
    padding-bottom: 24px;

  }

  .leaflet-container{

    margin-bottom: 40px;
    border-bottom: ${props => props.theme.name === 'dark' ? '1px solid #9F9F9F' :  '1px solid #D3E2E5'};
    border-radius: 20px;
  }


`;


export const Text = styled.h1`

  text-align: center;
  font-weight: 600;
  font-size: 18px;
  margin: 40px 0 0;

  color: ${props => props.theme.colors.textTirdyColor};
`;


export const InputBlock = styled.div`

  & + & {
      margin-top: 24px;
  }

  label{

  display: flex;
  color:${props => props.theme.colors.textTirdyColor};
  margin-bottom: 8px;
  line-height: 24px;
  
  }


  input{

    height: 64px;
    padding: 0 16px;
  }

  textarea{

    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;

  }


  input,
  textarea{

    width: 100%;
    background: ${props => props.theme.colors.inputBg};
    
    border:${props => props.theme.name === 'dark' ? '1px solid #9F9F9F' :  '1px solid #D3E2E5'};
    border-radius: 20px;
    outline: none;
    color: ${props => props.theme.colors.textFourthColor};
  }

`;


export const Label = styled.label`

  display: flex;
  color: ${props => props.theme.colors.textTirdyColor};
  margin-bottom: 8px;
  line-height: 24px;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.textTirdyColor};
    margin-left: 24px;
    line-height: 24px;
  }



`;

export const ButtonsSelect = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;

`;


export const Button = styled.button<PropsButton>`


  ${props => props.typeStyle === 'select' && css`

    height: 64px;
    background: ${props => props.theme.name === 'light' ? '#F5F8FA' : '#505050'};
    border:${props => props.theme.name === 'dark' ? '1px solid #9F9F9F' :  '1px solid #D3E2E5'};
    color: ${props => props.theme.colors.textTirdyColor};
    cursor: pointer;


    &:first-child {

      border-radius: 20px 0px 0px 20px;
    }


    &:last-child {

      border-radius: 0 20px 20px 0;
      border-left: 0;
    }

  `}


  ${props => props.active && css`

    background ${props => props.theme.colors.primarySelectButtonBg};

    border: 1px solid ${props => props.theme.colors.primaryBorderSelectButton };
    color: #37C77F;

  `}


  ${props => props.typeStyle === 'confirm' && css`

    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3CDC8C;
    border-radius: 20px;
    color: #FFFFFF;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;


    svg{

        margin-right: 16px;
    }


    &:hover{

        background: #36CF82;
    }

  `}
`;

export const ImagesContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;


    input[type='file'] {
      display: none;
    }
    
    img{

      width: 100%;
      height: 96px;
      object-fit:cover;
      border-radius: 20px;
    }

    div{
      position: relative;
      /* background: red; */
    }
`;


export const NewImageLabel = styled.label`

    height: 96px;
    background: ${props => props.theme.colors.inputBg};
    border: 1px dashed ${props => props.theme.colors.textTirdyColor};
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;



`;
export const BtnDeleteImg = styled.button`

  position: absolute;
  left: 55px;
  bottom: 64px;
  width: 40px;
  height: 40px;
  border: 1px solid #CCC;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transform: rotate(90deg);

  display: flex;
  align-items: center;
  justify-content: center;


  cursor: pointer;

  background: ${props => props.theme.colors.inputBg};
  border: 1px solid ${props => props.theme.name === 'light' ? '#D3E2E5' : '#212121' };



`;



export const Footer = styled.footer`


  width: 100%;
  height: 160px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
   align-items: center;
  background:${props => props.theme.colors.inputBg};
  gap: 20px;
  width: 700px;
  margin: 30px auto 0 auto;
  border-top: ${props => props.theme.name === 'dark' ? '1px solid #585858' :  '1px solid #D3E2E5'};
  border-left: ${props => props.theme.name === 'dark' ? '1px solid #585858' :  '1px solid #D3E2E5'};
  border-right: ${props => props.theme.name === 'dark' ? '1px solid #585858' :  '1px solid #D3E2E5'};
  border-bottom: ${props => props.theme.name === 'dark' ? '1px solid #585858' :  '1px solid #D3E2E5'};
  justify-content: space-around;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0  80px;

   
/*


*/




  

`;

export const ButtonForm = styled.button<PropsButtonForm>`

  border-radius: 20px;
  width: 264px;
  height: 64px;
  border: 0;


  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;


  color: #FFFF;
  cursor: pointer;


  font-weight: 800;
  font-size: 18px;
  transition: opacity .2s ease;



  &:hover{
    opacity: 0.6;
  }


  ${props => props.color === 'red' && css`

    background: #FF669D;

  `};
  ${props => props.color === 'green' && css`
  
    background: #3CDC8C;
  
  `};


`;

export const ImagesMarkers = styled.div`


  padding: 10px 0;
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  justify-content:space-between;

  grid-column-gap: 40px;



  justify-items: stretch;
  align-items: center;

  
  button{
    background: none;
    
    cursor: pointer;
    
  }


`;


export const ButtonMarkerSelect = styled.button<PropsButtonMarkerSelect>`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;



    ${props => props.active  && css`
  
    border-bottom:  ${props => props.theme.name === 'dark' ? '5px solid #585858' :  '5px solid #D3E2E5'};
  
  `};


  
`;