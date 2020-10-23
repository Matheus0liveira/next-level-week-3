import React, { memo } from 'react';

import { Map, Marker, TileLayer } from "react-leaflet";
import mapIcon from '../../utils/mapIcon';
import useTheme from '../../utils/useTheme';

import { FiEdit3, FiTrash, FiArrowRight } from 'react-icons/fi';

import { MapContainer, Footer, Button } from './styles';
import { Link } from 'react-router-dom';
import L from 'leaflet';



interface PropsMiniMap{

  page?: string;
  latitude: number;
  longitude: number;
  idOrphanage?: string;
  nameOrphanage?: string;
  colorMarker: string;
  handleSelectMarker: (color: string) => string;

};


const MiniMap = ({ page='default', latitude, longitude, idOrphanage, nameOrphanage, colorMarker, handleSelectMarker} : PropsMiniMap) => {


  const { themeValues } = useTheme();


  return (
    <MapContainer page='dashboard'>


      <Map 
        center={[latitude, longitude]} 
        zoom={16} 
        style={{ width: '100%', height: 280 }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/${themeValues.name}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker interactive={false} 

          icon={
            L.icon({
              iconUrl: handleSelectMarker(colorMarker),

              iconSize: [58, 68],
              iconAnchor: [29, 68],
              popupAnchor: [0, -60]
             })

        } 
        position={[latitude,longitude]} />
      </Map>

      {page === 'dashboard' && (

        <Footer page='dashboard'>

          <h1>{nameOrphanage}</h1>

          <div>


            <Link to={`/restrict/dashboard/pending/edit/${idOrphanage}`}>
              
              <Button>
                <FiEdit3 size={24} color={themeValues.colors.secondarycontentButton}/>
              </Button>

            </Link>
            
            <Link to={`/restrict/dashboard/orphanages/delete-orphanage/${nameOrphanage}/${idOrphanage}`}>

              <Button>
                <FiTrash size={24} color={themeValues.colors.secondarycontentButton}/>
              </Button>

            </Link>
          </div>

        </Footer>

      ) 
      }

        {

          page === 'dashboard/pending' && (

          <Footer page='dashboard'>

            <h1>{nameOrphanage}</h1>

            <div>
              <Link to={`/restrict/dashboard/orphanages/new-orphanage/${idOrphanage}`}> 
                <Button>
                  <FiArrowRight size={24} color={themeValues.colors.secondarycontentButton}/>
                </Button>
              </Link>

            </div>

          </Footer>

          )

        }


      {
        page === 'default' && (

        <Footer>

          <a 
          target="_blank" 
          rel='noopener noreferrer' 
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          >
            Ver rotas no Google Maps
          </a>

        </Footer>

      )}
  </MapContainer>
  );
};


export default memo(MiniMap);