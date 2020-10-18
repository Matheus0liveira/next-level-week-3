import styled from 'styled-components';



export const LayoutPage = styled.div`
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

   padding-top: 122px;
    /* width: 48%; */
   @media (max-width:840px){
      
    /* width: 90%; */
  }

`;



export const Container = styled.div`
  position: relative;
  width: 100%;
  width: 100%;
  max-width: 1100px;
  
  height: 100%;
  max-height: 680px;
 ;
`;


export const FlexMap = styled.div`

  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-bottom:50px;

 
   @media (max-width:840px){
      
    justify-content: center;
  }
 
  

`;