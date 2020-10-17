import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import { Container, LayoutPage, MapContainer, FlexMap } from './styles';


interface PropsLayoutDashBoard{

  titleHeader: string;
}


const LayoutDashBoard: React.FC<PropsLayoutDashBoard> = ({ children, titleHeader } ) => {

  return (
    
    <>
      <SideBar page='dashboard'/>
      <LayoutPage>

        <Container>
          <Header title={titleHeader} countOrphanages={0}/>

            <MapContainer>
              <FlexMap>

              {children}

              </FlexMap>

            </MapContainer>

        </Container>

      </LayoutPage>

   </>
  );
};


export default LayoutDashBoard;