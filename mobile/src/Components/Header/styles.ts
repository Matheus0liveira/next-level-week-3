import styled from 'styled-components/native'


import { PropsTheme } from '../../utils/useTheme';

interface Props {
  theme: PropsTheme

}

 
export const Container = styled.View<Props>`

    padding: 24px;
    background-color:${props => props.theme.colors.inpuBg};
    border-bottom-width: 1px;
    border-color: #DDE3F0;
    padding-top: 44px;

    flex-direction: row;
    justify-content: space-between;
    align-content: center;

`;
export const Title = styled.Text`

    font-family: 'Nunito_600SemiBold';
    color: #8FA7B3;
    font-size: 16px;

`;