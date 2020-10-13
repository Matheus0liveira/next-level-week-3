import React , {useState} from 'react';

import {ThemeProvider} from 'styled-components';

import { Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Link } from 'react-router-dom';

import { PageMap, Header, Aside, Text, Footer, CreateOrphanages, SelectStyleMap } from './styles';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import useTheme from '../../utils/useTheme';
import { FiPlus } from 'react-icons/fi';

import SwitchTheme from '../../components/SwitchTheme';

const OrphanagesMap = () => {

   const {themeValues } = useTheme();
 

  const [toggleSwitch, setToggleSwitch] = useState('light');


  return (
     <ThemeProvider theme={themeValues}>
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


      <Link to='' >
        <CreateOrphanages >
          <FiPlus size={28} color="#FFF"/>
        </CreateOrphanages>
      </Link>
    </PageMap>
    </ThemeProvider>
  );
}

export default OrphanagesMap;