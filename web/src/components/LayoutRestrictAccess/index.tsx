import React from 'react';
import useTheme from '../../utils/useTheme';


import { FiArrowLeft } from 'react-icons/fi';

import Logo from '../../assets/images/Logotipo.svg';


import { Container, Banner, ButtonBack} from './styles';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export const LayoutRestrictAccess:  React.FC = ({ children }) => {

  const { themeValues } = useTheme();



  return (
    <Container>
      <Banner>
        <img src={Logo} alt="Happy"/>
        <div>
          <strong>Rio do Sul</strong>
          
          <span>Santa Catarina</span>
        </div>
      </Banner>

        <Link to='/'>
          <ButtonBack>
            <FiArrowLeft size={24} color={themeValues.colors.secondarycontentButton} />
          </ButtonBack>
        </Link>
          {children}
       
    </Container>
  );
};



export default LayoutRestrictAccess;