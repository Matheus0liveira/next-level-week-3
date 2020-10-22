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

 

        const { data } = await api.get('/dashboard/orphanages?option=pending',
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



  return (

    <>
      <LayoutDashBoard titleHeader='Orfanatos Cadastrados'>
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
             />
             </MapContainer>
   
         ))

      )}
          


      </LayoutDashBoard>

    </>
  );
};



export default DashBoard;