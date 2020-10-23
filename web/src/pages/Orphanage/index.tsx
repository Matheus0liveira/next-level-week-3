import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";


import SideBar from '../../components/SideBar';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import SwitchTheme from '../../components/SwitchTheme';
import useTheme from '../../utils/useTheme';


import mapMarkerImg from '../../assets/images/map-marker.svg';
import mapIconYellow from '../../assets/images/Marker-yellow.svg';
import mapIconGreen from '../../assets/images/Marker-green.svg';
import mapIconBlack from '../../assets/images/Marker-black.svg';
import mapIconBlue from '../../assets/images/Marker-blue.svg';
import mapIconRed from '../../assets/images/Marker-red.svg';


import {
  PageOrphanage,
  OrphanageDetails,
  Images,
  Button,
  OrphanageDetailsContent,
  OpenDetails,
  Hour,
  OpenOnWeekends
} from './styles';
import MiniMap from '../../components/MiniMap';


interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  phone: string;
  markerMap: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface ParamsOrphanage {

  id: string;
}

export default function Orphanage() {

  const { themeValues } = useTheme();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const history = useHistory();

  const params = useParams<ParamsOrphanage>();


  const [orphanage, setOrphanage] = useState<Orphanage>();




  useEffect(() => {

    (async () => {
      try {

        const { data } = await api.get(`/orphanages/${params.id}`);

        setOrphanage(data);

      } catch (e) {

        if (e) return history.push('/notfound');

      }



    })();



  }, [history, params.id]);



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


  if (!orphanage) {
    return <p>Carregando...</p>
  }



  return (
    <PageOrphanage>
      <SwitchTheme />
      <SideBar />

      <main>
        <OrphanageDetails>
          {
            !orphanage.images[activeImageIndex].url ? (

              <p>Sem imagens</p>
              
              )
              : 
              (
                <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />
            )
          }

          <Images>
            {orphanage.images.map((image, index) => (

              <Button
                key={image.id}
                active={activeImageIndex === index}
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

            <MiniMap 
            latitude={orphanage.latitude} 
            longitude={orphanage.longitude}
            handleSelectMarker={handleSelectMarker}
             colorMarker={orphanage.markerMap}
             />

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
              href={`https://api.whatsapp.com/send?phone=+55${orphanage.phone}&text=Oi! ví seu orfanato (${orphanage.name}) no happy, como posso fazer uma visita?`}>
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