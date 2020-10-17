import styled, { css } from 'styled-components/native';

interface PropsScheduleItem{

  colorItem: 'blue' | 'green' | 'red';
}

export const ImagesContainer = styled.View`

  height: 240px;
`;
export const DetailsContainer = styled.View`

  padding: 24px;
`;
export const MapContainer = styled.View`

  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #B3DAE2;
  margin-top: 40px;
  background: #E6F7FB;
`;
export const RoutesText = styled.Text`

  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const Separator = styled.Text`

  height: 0.8px;
  width: 100%;
  background: #D3E2E6;
  margin: 40px 0;
`;

export const Title = styled.Text`

  color: #4D6F80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;
export const Description = styled.Text`

  font-family: 'Nunito_600SemiBold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;
export const ScheduleContainer = styled.View`

  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ScheduleItem = styled.View<PropsScheduleItem>`

  width: 48%;
  padding: 20px;


  ${ props => props.colorItem === 'blue' && css`

  background: #E6F7FB; 
    
    border-radius: 20px;
    border: 1px solid #B3DAE2;

  `}
  ${ props => props.colorItem === 'green' && css`

    background: #EDFFF6;
    
    border-radius: 20px;
    border: 1px solid #A1E9C5;

  `}
  ${ props => props.colorItem === 'red' && css`

    background: #FEF6F9, 
    
    border-radius: 20px;
    border: 1px solid #FFBCD4;
  `}
`;

export const ContactButtonText = styled.Text`

    font-family: 'Nunito_800ExtraBold';
    color: #FFF;
    font-size: 16px;
    margin-left: 16px;

`;
export const ScheduleText = styled.Text<PropsScheduleItem>`

    font-family: 'Nunito_600SemiBold';
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;


  ${ props => props.colorItem === 'blue' && css`

    color: #5C8599;
  `}

  ${ props => props.colorItem === 'green' && css`

    color: #37C77F;

  `}

  ${ props => props.colorItem === 'red' && css`

    color: #FF669D;

  `}
`;