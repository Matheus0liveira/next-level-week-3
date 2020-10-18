import React, { useState } from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';

import useTheme from '../../utils/useTheme';
import dark from '../../themes/dark';
import light from '../../themes/light';

import { StyledSwitchTheme } from './styles';

interface PropsSwitch {
  styleSwitch?: boolean;
};


const SwitchTheme = ({ styleSwitch = true }: PropsSwitch) => {

  const [toggleIcon, setToggleIcon] = useState(false);
  
  const {themeValues, setThemeValues } = useTheme();


  const toggleTheme = () => {

    setToggleIcon(!toggleIcon);

    if(themeValues.name === 'dark'){
     return  setThemeValues(light);
    }
    
      return  setThemeValues(dark);

  };

  return (
    <StyledSwitchTheme 
      fixed={styleSwitch}

      onClick={toggleTheme}
      > 
      {
      
      themeValues.name === 'light' ?
      ( 

      <FiSun size={28} color={ styleSwitch ? themeValues.colors.primarycontentButton: '#FFF'}/>

      ) 

      :

      (

      <FiMoon size={28} color={ styleSwitch ? themeValues.colors.primarycontentButton : '#FFF'}/>

      )

      }

      </StyledSwitchTheme>
  )
}


export default SwitchTheme