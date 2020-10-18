import React from 'react';

import LayoutDashBoard from '../../../components/LayoutDashBoard';
import { NotFoundOrpanages } from './styles';

import BadMarker from '../../../assets/images/BadMarker.svg';

const PendingEntries = () => {
  return (
   <>
    <LayoutDashBoard titleHeader='Cadastros pendentes'>

{/* 
      <MapContainer>
      <MiniMap page='dashboard/pending' latitude={-8.8061861} longitude={-44.2194616}/>
      </MapContainer>
      
      <MapContainer>
      <MiniMap page='dashboard/pending' latitude={-8.8061861} longitude={-44.2194616}/>
      </MapContainer>
      <MapContainer>
      <MiniMap page='dashboard/pending' latitude={-8.8061861} longitude={-44.2194616}/>
      </MapContainer>

      <MapContainer>
      <MiniMap page='dashboard/pending' latitude={-8.8061861} longitude={-44.2194616}/>
      </MapContainer>
      <MapContainer>
      <MiniMap page='dashboard/pending' latitude={-8.8061861} longitude={-44.2194616}/>
      </MapContainer>

      <MapContainer>
      <MiniMap page='dashboard/pending' latitude={-8.8061861} longitude={-44.2194616}/>
      </MapContainer> */}

      <NotFoundOrpanages>
        <img src={BadMarker} alt=""/>
        <h1>Nenhum no momento</h1>
      </NotFoundOrpanages>



    </LayoutDashBoard>

   </>
  );
};



export default PendingEntries