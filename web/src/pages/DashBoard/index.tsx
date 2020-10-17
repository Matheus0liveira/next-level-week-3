import React from 'react';
import MiniMap from '../../components/MiniMap';
import SideBar from '../../components/SideBar';

import {DashBoardPage, Header, Text, Container,FlexMap, MapContaainer} from './styles';





const DashBoard = () => {




  return (

    <>
      <SideBar page='dashboard'/>
      <DashBoardPage>
        <Container>


          <Header>

            <Text typeText='title'>Orfanatos Cadastrados</Text>
            <Text typeText='count'>2 orfanatos</Text>
          </Header>

          <FlexMap>



          <MapContaainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContaainer>
          <MapContaainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContaainer>
          <MapContaainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContaainer>
          <MapContaainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContaainer>
          <MapContaainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContaainer>


         

          </FlexMap>
        





        </Container>
      </DashBoardPage>
    </>
  );
};



export default DashBoard;