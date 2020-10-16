import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";

import InputMask from "react-input-mask";

import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';


import { LeafletMouseEvent } from 'leaflet';


import mapIcon from '../../utils/mapIcon';

import {
  PageCreateOrphanage,
  CreateOrphanageForm,
  InputBlock,
  Label,
  ButtonsSelect,
  Button,
  ImagesContainer,
  NewImageLabel
} from './styles';
import SideBar from '../../components/SideBar';
import { FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import SwitchTheme from '../../components/SwitchTheme';
import useTheme from '../../utils/useTheme';



export default function CreateOrphanage() {

  const {themeValues } = useTheme();

  const [location, setLocation] = useState({
    latitude: -27.2092052,
    longitude: -49.6401092
  });

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [phone, setPhone] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setpreviewImages] = useState<string[]>([]);


  const history = useHistory();


  useEffect(() => {

      navigator.geolocation.getCurrentPosition( (position: any) => {


        if(position){
          const { latitude, longitude } = position.coords;


          setLocation({latitude, longitude});

        }
      }, error => console.log(error));
    
     
      },[]);


  const handleMapClick = (event: LeafletMouseEvent) => {
 

    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    });
  };

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {

   


    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);



    const selectImagesPreview = selectedImages.map(image => {

      return URL.createObjectURL(image);
    });

    setpreviewImages(selectImagesPreview);
  };


  const handleForm = async (event: FormEvent) => {

    event.preventDefault();



    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('phone', phone);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));


    console.log(data);

    images.forEach(image => {

      data.append('images', image);

    });

    await api.post('/orphanages', data);

    history.push('/orphanage/create/success');

  };

return (

  <PageCreateOrphanage>

    <SwitchTheme/>
    <SideBar />

    <main>
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

            {position.latitude !== 0 && (

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[
                  position.latitude,
                  position.longitude
                ]}
              />

            )


            }
          </Map>



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
            mask='(99) 99999-9999'
              id="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </InputBlock>



          <InputBlock>


            <Label htmlFor="images">Fotos</Label>

            <ImagesContainer>

              {previewImages.map(image => (
                <img key={image} src={image} alt="" />
              ))}

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

        <Button typeStyle="confirm" type="submit">
          Confirmar
          </Button>
      </CreateOrphanageForm>
    </main>
  </PageCreateOrphanage>
);
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
