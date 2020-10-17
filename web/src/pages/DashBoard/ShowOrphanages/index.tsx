import React from 'react';
import Header from '../../../components/Header';
import MiniMap from '../../../components/MiniMap';
import SideBar from '../../../components/SideBar';

import {ShowOrphanagePage, Container,FlexMap, MapContainer} from './styles';





const DashBoard = () => {




  return (

    <>
      <SideBar page='dashboard'/>
      <ShowOrphanagePage>
        <Container>


          <Header title='Orfanatos Cadastrados' countOrphanages={5}/>

          <FlexMap>



          <MapContainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContainer>
          <MapContainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContainer>
          <MapContainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContainer>
          <MapContainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContainer>
          <MapContainer>
          <MiniMap page='dashboard' latitude={-8.8061861} longitude={-44.2194616}/>
          </MapContainer>


         

          </FlexMap>
        





        </Container>
      </ShowOrphanagePage>
    </>
  );
};



export default DashBoard;