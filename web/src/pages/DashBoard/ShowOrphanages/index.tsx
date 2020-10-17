import React from 'react';
import LayoutDashBoard from '../../../components/LayoutDashBoard';
import MiniMap from '../../../components/MiniMap';


import {MapContainer} from './styles';





const DashBoard = () => {




  return (

    <>
      <LayoutDashBoard titleHeader='Orfanatos Cadastrados'>

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


      </LayoutDashBoard>

    </>
  );
};



export default DashBoard;