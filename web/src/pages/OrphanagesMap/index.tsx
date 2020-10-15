import React , {useEffect, useState} from 'react';

import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import { PageMap, Header, Aside, Text, Footer, CreateOrphanages, SelectStyleMap } from './styles';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { FiArrowRight, FiPlus } from 'react-icons/fi';

import SwitchTheme from '../../components/SwitchTheme';
import mapIcon from '../../utils/mapIcon';
import useTheme from '../../utils/useTheme';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string
}

const OrphanagesMap = () => {

  const { themeValues } = useTheme();

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
 

  const [toggleSwitch, setToggleSwitch] = useState(themeValues.name);



  useEffect(() => {

    (async () => {
      const { data } = await api.get('/orphanages');

     setOrphanages(data);

    } )();

  } , []);

  


  return (
     
    <PageMap>

      <SwitchTheme />
       
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy"/>

          <Text typeText='title' >Escolha um orfanato no mapa</Text>
          <Text typeText='description' >Muitas crianças estão esperando a sua visita {':)'}</Text>
        </Header>

        <Footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </Footer>
      </Aside>

      <Map
        center={[-8.8229483,-44.2194616]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        {/* <TileLayer  url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/> */}
        <TileLayer  url={`https://api.mapbox.com/styles/v1/mapbox/${toggleSwitch}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

        {
          orphanages.map(orphanage => (

            <Marker 
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
          
              
            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color='#FFF'/>
                </Link>
            </Popup>
            </Marker>

          ))
        }

      </Map>

      <SelectStyleMap 
      typeSwitch='light' 
      onClick={() => setToggleSwitch('light')}
      select={toggleSwitch === 'light' ?  true : false}

      >
      Light
      </SelectStyleMap>


      <SelectStyleMap 
      typeSwitch='dark' 
      onClick={() => setToggleSwitch('dark')}
      select={toggleSwitch === 'dark' ?  true : false}

      >
      Dark
      </SelectStyleMap>


      <SelectStyleMap 
      typeSwitch='satelite'
      onClick={() => setToggleSwitch('satellite-streets')}
      select={toggleSwitch === 'satellite-streets' ?  true : false}

      >
      Satelite
      </SelectStyleMap>


      <Link to='/orphanage/create' >
        <CreateOrphanages >
          <FiPlus size={28} color="#FFF"/>
        </CreateOrphanages>
      </Link>
    </PageMap>
  );
}

export default OrphanagesMap;