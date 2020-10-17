import styled from 'styled-components/native';



export const ViewContainer  = styled.View`

  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;

`;
export const CalloutContainer  = styled.View`

    width: 160px;
    height: 46px;
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    justify-content: center;
`;
export const Footer  = styled.View`

    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;

    background-color: #FFF;
    border-radius: 20px;
    height: 56px;
    padding-left: 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* elevation: 3; */
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;
export const FooterText  = styled.Text`

      font-family: 'Nunito_700Bold';
      color: #8FA7B3;
`;
export const CalloutText  = styled.Text`

    font-family: 'Nunito_700Bold';
    color: #0089A5;
    font-size: 14px;
`;