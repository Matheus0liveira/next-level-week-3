import styled from 'styled-components/native';

import { PropsTheme } from '../../utils/useTheme';

interface Props {
  theme: PropsTheme;

}

export const StyledSwitchTheme = styled.TouchableOpacity<Props>`
 position: absolute;
 top: 40px;
 right: 20px;
 width: 40px;
 height: 40px;
 background: ${props => props.theme.colors.createOrphanageBg};
 border: 0;
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 999;
 
 &:hover{
   background: ${props => props.theme.colors.textSecondaryColor};  
 }
`;