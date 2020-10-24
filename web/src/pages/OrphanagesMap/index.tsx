import React , {useEffect, useState} from 'react';

import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import { PageMap, Header, Aside, Text, Footer, CreateOrphanages, SelectStyleMap } from './styles';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { FiArrowRight, FiPlus } from 'react-icons/fi';

import SwitchTheme from '../../components/SwitchTheme';
import useTheme from '../../utils/useTheme';
import L from 'leaflet';


import mapIconYellow from '../../assets/images/Marker-yellow.svg';
import mapIconGreen from '../../assets/images/Marker-green.svg';
import mapIconBlack from '../../assets/images/Marker-black.svg';
import mapIconBlue from '../../assets/images/Marker-blue.svg';
import mapIconRed from '../../assets/images/Marker-red.svg';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string
  markerMap: string;
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
     
    <PageMap>

      <SwitchTheme />
       
      <Aside>
        <Header>
          <Link to='/'>
            <img src={mapMarkerImg} alt="Happy"/>
          </Link>
          <Text typeText='title' >Escolha uma instituição no mapa</Text>
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
              icon={
                L.icon({
                  iconUrl: handleSelectMarker(orphanage.markerMap),

                  iconSize: [58, 68],
                  iconAnchor: [29, 68],
                  popupAnchor: [0, -60]
                })
              }
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