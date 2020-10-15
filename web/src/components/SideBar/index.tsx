import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Aside, Footer } from './styles';


import mapMarkerImg from '../../assets/images/map-marker.svg';

const SideBar = () => {

    const { goBack } = useHistory();
  return (

    <Aside>

      <img src={mapMarkerImg} alt="Happy" />

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>

    </Aside>
  )
}

export default SideBar;