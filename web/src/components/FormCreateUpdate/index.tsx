import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

import InputMask from "react-input-mask";

import { Map, Marker, TileLayer } from 'react-leaflet';




import mapIcon from '../../utils/mapIcon';

import {
  PageCreateOrphanage,
  CreateOrphanageForm,
  InputBlock,
  Label,
  ButtonsSelect,
  ButtonForm,
  ImagesContainer,
  NewImageLabel,
  Footer,
  Button,
  Text,
  ImagesMarkers,
  ButtonMarkerSelect
} from './styles';
import SideBar from '../../components/SideBar';
import { FiCheck, FiPlus, FiXCircle } from 'react-icons/fi';
import SwitchTheme from '../../components/SwitchTheme';
import useTheme from '../../utils/useTheme';
import { LeafletMouseEvent } from 'leaflet';

import Image from '../../assets/images/map-marker.svg';

import MarkerYellow from '../../assets/images/Marker-yellow.svg';
import MarkerRed from '../../assets/images/Marker-red.svg';
import MarkerGreen from '../../assets/images/Marker-green.svg';
import MarkerBlue from '../../assets/images/Marker-blue.svg';
import MarkerBlack from '../../assets/images/Marker-black.svg';
interface PropsCreateOrphanage{

  name: string;
  setName: Dispatch<SetStateAction<string>>;
  about: string;
  setAbout: Dispatch<SetStateAction<string>>;
  instructions: string;
  setInstructions: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  opening_hours: string;
  setOpeningHours: Dispatch<SetStateAction<string>>;
  open_on_weekends: boolean;
  setOpenOnWeekends: Dispatch<SetStateAction<boolean>>;
  position: {
     latitude: number; longitude: number;
  };
  setPosition: Dispatch<SetStateAction<{ latitude: number; longitude: number; }>>;
  previewImages:string[];
  location: {
    latitude: number;
    longitude: number;
  };
  handleMapClick: (event: LeafletMouseEvent) => void;
  handleSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  handleForm:(event: FormEvent) => void;
  page?: string
  



};

export default function CreateOrphanage({
  
  name,
  setName,
  about,
  setAbout,
  instructions,
  setInstructions,
  phone,
  setPhone,
  opening_hours,
  setOpenOnWeekends,
  open_on_weekends,
  setOpeningHours,
  position,
  setPosition,
  previewImages,
  location,
  handleMapClick,
  handleSelectImage,
  handleForm,
  page = 'default'
  
}: PropsCreateOrphanage) {

  const [markerSelect, setMarkerSelect ] = useState('#FF6666');

  const {themeValues } = useTheme();

  return (

  <>
      <PageCreateOrphanage>

        <SwitchTheme/>
        <SideBar />

        <main>
          <Text> Editar perfil de {name} </Text>
          
          <CreateOrphanageForm onSubmit={handleForm}>
            <fieldset>
              <legend>Dados</legend>

              <Map
                center={[location.latitude, location.longitude]}
                style={{ width: '100%', height: 280 }}
                zoom={15}
                onClick={handleMapClick}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/${themeValues.name}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {location.latitude !== 0 && (

                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[
                      location.latitude,
                      location.longitude
                    ]}
                  />

                )


                }
              </Map>



              <InputBlock>
              <label>Selecione a cor do seu marcador</label>

              <ImagesMarkers>
                <ButtonMarkerSelect
                type='button' 
                active={markerSelect === '#FF6666'}
                onClick={() => setMarkerSelect('#FF6666')}
                >
                <img src={MarkerRed} alt="" />
                </ButtonMarkerSelect>
                <ButtonMarkerSelect
                type='button' 
                active={markerSelect === '#68DF7B'}
                onClick={() => setMarkerSelect('#68DF7B')}
                >
                <img src={MarkerGreen} alt="" />
                </ButtonMarkerSelect>
                <ButtonMarkerSelect
                type='button' 
                active={markerSelect === '#FFD666'}
                onClick={() => setMarkerSelect('#FFD666')}
                >
                <img src={MarkerYellow} alt="" />
                </ButtonMarkerSelect>
                <ButtonMarkerSelect
                type='button' 
                active={markerSelect === '#434343'}
                onClick={() => setMarkerSelect('#434343')}
                >
                <img src={MarkerBlack} alt="" />
                </ButtonMarkerSelect>
                <ButtonMarkerSelect
                type='button' 
                active={markerSelect === '#15D3D6'}
                onClick={() => setMarkerSelect('#15D3D6')}
                >
                <img src={MarkerBlue} alt="" />
                </ButtonMarkerSelect>
                
              </ImagesMarkers>
              </InputBlock>
              <InputBlock>
                <Label htmlFor="name">Nome</Label>
                <input
                  id="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </InputBlock>
              



              <InputBlock >
                <Label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></Label>
                <textarea
                  id="about"
                  maxLength={300}
                  value={about}
                  onChange={event => setAbout(event.target.value)}
                />
              </InputBlock>

              <InputBlock>
                <Label htmlFor="phone">Número para contato</Label>
                <InputMask
                mask='(99) 9 9999-9999'
                  id="phone"
                  value={phone}
                  onChange={event => setPhone(event.target.value)}
              />
              </InputBlock>



              <InputBlock>


                <Label htmlFor="images">Fotos</Label>

                <ImagesContainer>

                  {/* {previewImages.map((image, index) => (
                    
                   <>
                   {console.log('PREVIEW', image)}
                    <img key={image} src={image} alt="" />
                   </>
                   
                  ))}
                    */}

                  <NewImageLabel htmlFor='image[]'>
                    <FiPlus size={24} color={themeValues.colors.secondarycontentButton} />
                  </NewImageLabel>

                  <input multiple type="file" onChange={handleSelectImage} id="image[]" />

                </ImagesContainer>



              </InputBlock>




            </fieldset>

            <fieldset>
              <legend>Visitação</legend>

              <InputBlock>
                <Label htmlFor="instructions">Instruções</Label>
                <textarea
                  id="instructions"
                  value={instructions}
                  onChange={event => setInstructions(event.target.value)}
                />
              </InputBlock>


              <InputBlock>

                <Label htmlFor="opening_hours">Horário de funcionamento</Label>
                <input
                  id="opening_hours"
                  value={opening_hours}
                  onChange={event => setOpeningHours(event.target.value)}
                />

              </InputBlock>


              <InputBlock>
                <Label htmlFor="open_on_weekends">Atende fim de semana</Label>

                <ButtonsSelect>
                  <Button
                    type="button"
                    typeStyle='select'
                    active={open_on_weekends ? true : false}
                    onClick={() => setOpenOnWeekends(true)}
                  >
                    Sim
                    </Button>


                  <Button
                    type="button"
                    typeStyle='select'
                    active={!open_on_weekends ? true : false}
                    onClick={() => setOpenOnWeekends(false)}
                  >
                    Não
                    </Button>
                </ButtonsSelect>
              </InputBlock>
            </fieldset>
          {
            page === 'default' && (

            <Button typeStyle="confirm" type="submit">
              Confirmar
            </Button>

            )
          }
          </CreateOrphanageForm>

          {
          page === 'newOrphanage' &&
            (
              <Footer>
                <ButtonForm type='button' color='red'>
                  <FiXCircle size={24} color='#FFF'/>
                  <p>Recusar</p>

                </ButtonForm>


                <ButtonForm type='button' color='green'>
                  <FiCheck size={24} color='#FFF'/>
                  <p>Aceitar</p>
                </ButtonForm>
              </Footer>
            )
          }
        </main>
      </PageCreateOrphanage>
    </>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
