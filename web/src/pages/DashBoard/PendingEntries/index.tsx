import React, { useEffect, useState } from 'react';

import LayoutDashBoard from '../../../components/LayoutDashBoard';

import BadMarker from '../../../assets/images/BadMarker.svg';
import { useHistory } from 'react-router-dom';
import useUser from '../../../utils/useUser';
import { toast } from 'react-toastify';
import api from '../../../services/api';



import { NotFoundOrphanages, MapContainer } from './styles';
import MiniMap from '../../../components/MiniMap';

const PendingEntries = () => {
  


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

    <LayoutDashBoard  titleHeader='Orfanatos Pendentes'>
      {orphanages[0].id === '' ? (


        <NotFoundOrphanages>
          <img src={BadMarker} alt=""/>
          <h1>Nenhum no momento</h1>
        </NotFoundOrphanages>
        
        ) : (
          orphanages.map(orphanage => (
   
             <MapContainer key={orphanage.id}>
               {console.log(orphanage.id)}
             <MiniMap 
             page='dashboard/pending' 
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



export default PendingEntries