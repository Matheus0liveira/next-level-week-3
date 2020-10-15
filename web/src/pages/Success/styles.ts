import styled from 'styled-components';


export const SuccessPage = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.theme === 'dark' ? '#494949': '#3EE08F' };


`;
export const Space = styled.div`
  width: 200px; 
  height: 200px;

    
`;
export const Text = styled.h1`
  

    
`;