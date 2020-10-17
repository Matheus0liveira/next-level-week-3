import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import { Container, LayoutPage, MapContainer } from './styles';

const LayoutDashBoard: React.FC = ({ children }) => {

  return (
    
    <>
      <SideBar page='dashboard'/>
      <LayoutPage>

        <Container>
          <Header title='Cadastros pendentes' countOrphanages={0}/>

            <MapContainer>

              {children}

            </MapContainer>

        </Container>

      </LayoutPage>

   </>
  );
};


export default LayoutDashBoard;