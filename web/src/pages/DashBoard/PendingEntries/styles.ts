import styled from 'styled-components';




export const PendingEntriesPage = styled.div`
  position: relative;
  left: 96px;
  right: 0;
  top: 0;
  bottom: 0;

  width: calc(100% - 100px);



  display: flex;
  align-items: center;
  justify-content: center;

`;



export const MapContainer = styled.div`


    width: 48%;
   @media (max-width:840px){
      
    width: 90%;
  }

`;



export const Container = styled.div`
  position: relative;
  width: 100%;
  width: 100%;
  max-width: 1100px;
  
  height: 100%;
  max-height: 680px;
`;




export const NotFoundOrphanages = styled.div`
  
  width: 100%;
  /* max-width: 1100px; */
  
  height: calc(90vh - 146px);
  /* max-height: 680px; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  
  h1{
    color: ${props => props.theme.colors.textTirdyColor};
    font-weight: 600;
    font-size: 24px;
  }
`;
