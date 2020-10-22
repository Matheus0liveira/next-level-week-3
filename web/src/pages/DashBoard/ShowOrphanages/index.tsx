import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LayoutDashBoard from '../../../components/LayoutDashBoard';
import MiniMap from '../../../components/MiniMap';
import api from '../../../services/api';
import useUser from '../../../utils/useUser';


import {MapContainer} from './styles';

import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

const DashBoard = () => {

  const [orphanage, setOrphanage] = useState({
    orphanages: [
    {
      id: '',
      name: '',
      latitude: '',
      longitude: '',
      about: '',
      instructions: '',
      phone: '',
      opening_hours: '',
      open_on_weekends: '',
      pending: '',
      markerMap: ''
    }
  ]
  });

  const history = useHistory();

  const { token } = useUser();


  useEffect(() => {

   (async () => {

    

      try{

        const auth = `Bearer ${token}`

 

        const { data } = await api.get('/dashboard/orphanages?option=pending',
        { headers: { Authorization: auth}}
        );

          

      }catch{

      toast.error('Erro no servidor - ( 500 )',{ 
        position: toast.POSITION.TOP_LEFT

      });

      history.push('/app');

      };

   })()

  }, [history, token]);




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