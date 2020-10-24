import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LayoutDashBoard from '../../../components/LayoutDashBoard';
import MiniMap from '../../../components/MiniMap';
import api from '../../../services/api';
import useUser from '../../../utils/useUser';


import {MapContainer, NotFoundOrphanages} from './styles';

import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

import BadMarker from '../../../assets/images/BadMarker.svg';


import mapMarkerImg from '../../../assets/images/map-marker.svg';
import mapIconYellow from '../../../assets/images/Marker-yellow.svg';
import mapIconGreen from '../../../assets/images/Marker-green.svg';
import mapIconBlack from '../../../assets/images/Marker-black.svg';
import mapIconBlue from '../../../assets/images/Marker-blue.svg';
import mapIconRed from '../../../assets/images/Marker-red.svg';


const DashBoard = () => {

  const [orphanages, setOrphanages] = useState([
    {
      id: '',
      name: '',
      latitude: 0,
      longitude: 0,
      about: '',
      instructions: '',
      phone: '',
      opening_hours: '',
      open_on_weekends: '',
      pending: '',
      markerMap: ''
    }

  ]);

  const history = useHistory();

  const { token } = useUser();


  useEffect(() => {

   (async () => {

    

      try{

        const auth = `Bearer ${token}`

 

        const { data } = await api.get('/dashboard/orphanages?option=registred',
        { headers: { Authorization: auth}}
        );

        if(data.length === 0) return;

        setOrphanages(data);
     
       
        


      }catch{
       
        toast.error('Erro no servidor - ( 500 )',{
          position: toast.POSITION.TOP_LEFT

        });

        return history.push('/');

      };

   })()

  }, [history, token]);



  const handleSelectMarker = (color: string) => {


    switch(color){

      case  '#FF6666':
        return mapIconRed;

      case  '#68DF7B':
        return mapIconGreen;

      case  '#FFD666':
        return mapIconYellow;

      case  '#434343':
        return mapIconBlack;

      case  '#15D3D6':
        return mapIconBlue;


      default:
        return mapMarkerImg;
        
    };

  };






  return (

    <>
      <LayoutDashBoard 
        countOrphanage={orphanages[0].latitude === 0 ? 
          orphanages.length - 1 
          :
          orphanages.length
      
        } 
        titleHeader='Instituições Cadastrados'>
      {orphanages[0].id === '' ? (


        <NotFoundOrphanages>
          <img src={BadMarker} alt=""/>
          <h1>Nenhum no momento</h1>
        </NotFoundOrphanages>
        
        ) : (
          orphanages.map(orphanage => (
   
             <MapContainer key={orphanage.id}>
             <MiniMap 
             page='dashboard' 
             latitude={orphanage.latitude} 
             longitude={orphanage.longitude}
             idOrphanage={orphanage.id}
             nameOrphanage={orphanage.name}
             handleSelectMarker={handleSelectMarker}
             colorMarker={orphanage.markerMap}
             />
             </MapContainer>
   
         ))

      )}
          


      </LayoutDashBoard>

    </>
  );
};



export default DashBoard;