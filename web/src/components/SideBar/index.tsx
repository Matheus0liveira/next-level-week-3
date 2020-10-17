import React, { memo } from 'react';
import { FiArrowLeft, FiMapPin, FiAlertCircle, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Aside, Footer, Main, Alert } from './styles';

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
            <Link to='/restrict/dashboard/orphanages'>
              <button type="button" >
                <FiMapPin size={24} id='map' color="#FFF" />
              </button>
            </Link>


            <Link to='/restrict/dashboard/pending'>
              <button type="button">
                <FiAlertCircle size={24} color="#FFF" />
                <Alert/>
              </button>
            </Link>
            

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

export default memo(SideBar);