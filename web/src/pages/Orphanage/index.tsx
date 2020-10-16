import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";


import { 
  PageOrphanage,
  OrphanageDetails, 
  Images, 
  Button, 
  OrphanageDetailsContent, 
  MapContainer,
  OpenDetails,
  Hour,
  OpenOnWeekends
} from './styles';
import SideBar from '../../components/SideBar';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import SwitchTheme from '../../components/SwitchTheme';
import useTheme from '../../utils/useTheme';


interface  Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  phone: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface ParamsOrphanage{

  id: string;
}

export default function Orphanage() {

  const { themeValues } = useTheme();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const params = useParams<ParamsOrphanage>();


  const [orphanage, setOrphanage] = useState<Orphanage>();
  



  useEffect(() => {

    (async () => {
      const { data } = await api.get(`/orphanages/${params.id}`);

      
      setOrphanage(data);
      
    } )();


    
  },[params.id]);
  
  if(!orphanage){
    return <p>Carregando...</p>
  }
  


  return (
    <PageOrphanage>
      <SwitchTheme/>
      <SideBar/>
      
      <main>
        <OrphanageDetails>
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <Images>
            {orphanage.images.map((image, index) => (

            <Button 
            key={image.id} 
            active={activeImageIndex === index ? true : false}  
            typeStyle='image' 
            type="button"
            onClick={() => setActiveImageIndex(index)}
            
            >

              <img src={image.url} alt={orphanage.name} />
            </Button>

            ))}
         
          </Images>
          
          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
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
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <Hour className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>


              {orphanage.open_on_weekends ?
              (
              <OpenOnWeekends open >
                <FiInfo size={32} color={themeValues.colors.primaryWeekendsGradient} />
                Atendemos <br />
                finais de semana

              </OpenOnWeekends>
               
               )

               :

               (

                <OpenOnWeekends open={false}>
                    <FiInfo size={32} color="#FF669D" />
                      Não Atendemos <br />
                      finais de seman


                </OpenOnWeekends>
                )
                }
            </OpenDetails>

              <a 
              target='_blank' 
              rel="noopener noreferrer" 
              href={`https://api.whatsapp.com/send?phone=${orphanage.phone}&text=Oi! ví seu orfanato (${orphanage.name}) no happy, como posso fazer uma visita?`}>
            <Button type="button" typeStyle="contact">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </Button>
              </a>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </PageOrphanage>
  );
}