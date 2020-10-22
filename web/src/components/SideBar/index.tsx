import React, { memo, useEffect, useState } from 'react';
import { FiArrowLeft, FiMapPin, FiAlertCircle, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Aside, Footer, Main, Button } from './styles';

import mapMarkerImg from '../../assets/images/map-marker.svg';
import SwitchTheme from '../SwitchTheme';
import { toast } from 'react-toastify';


interface PropsSideBar{

  page?: string;

};

const SideBar = ({ page = 'default' } : PropsSideBar) => {

  const [selectPage, setSelectPage] = useState('');

  const { goBack } = useHistory();

  const history = useHistory();


  

  
  
  
  useEffect(() => {
    
    const param = history.location.pathname.split('/')[3];

     setSelectPage(param);

  },[history.location.pathname]);




  const handleLeftDashBoard = () => {
    localStorage.removeItem('@dashboard:token');
    localStorage.removeItem('@dashboard:user');

    toast.success('Você saiu, volte sempre!!',{ 
          position: toast.POSITION.BOTTOM_RIGHT,
          closeOnClick: true,    

    });
        history.push('/');
 
  };


        



  return (

    <>
    {

      page === 'dashboard' ?
      
      
      (

        <Aside>
          <Link to='/'>
            <img src={mapMarkerImg} alt="Happy" />
          </Link>
          <Main>
            <Link to='/restrict/dashboard/orphanages'>
              <Button active={selectPage === 'orphanages'} type="button" >
                <FiMapPin size={24} id='map' color="#FFF" />
              </Button>
            </Link>


            <Link to='/restrict/dashboard/pending'>
              <Button active={selectPage === 'pending'} type="button">
                <FiAlertCircle size={24} color="#FFF" />
             
                
              </Button>
            </Link>
            

          </Main>
          <Footer>
            <SwitchTheme styleSwitch={false}/>
            <button type="button" onClick={handleLeftDashBoard}>
              <FiPower size={24} color="#FFF" />
            </button>

          </Footer>
    
        </Aside>

      ) 
      : 
      (

        <Aside>
          <Link to='/'>
            <img src={mapMarkerImg} alt="Happy" />
          </Link>
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