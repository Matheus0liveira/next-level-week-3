import React from 'react';
import { FiArrowLeft, FiMapPin, FiAlertCircle, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Aside, Footer, Main } from './styles';

import mapMarkerImg from '../../assets/images/map-marker.svg';


interface PropsSideBar{

  page?: string

};

const SideBar = ({ page = 'default' } : PropsSideBar) => {

    const { goBack } = useHistory();
  return (

    <>
    {
      page === 'dashboard' ?
      
      
      (

        <Aside>
    
          <img src={mapMarkerImg} alt="Happy" />

          <Main>

            <button type="button" onClick={() => {}}>
              <FiMapPin size={24} id='map' color="#FFF" />
            </button>
            <button type="button" onClick={() => {}}>
              <FiAlertCircle size={24} color="#FFF" />
            </button>

          </Main>
          <Footer>
            <button type="button" onClick={() => {}}>
              <FiPower size={24} color="#FFF" />
            </button>
          </Footer>
    
        </Aside>

      ) 
      : 
      (

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
    </>
  )
}

export default SideBar;