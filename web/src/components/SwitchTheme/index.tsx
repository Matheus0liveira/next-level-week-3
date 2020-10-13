import React, { useState } from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';

import useTheme from '../../utils/useTheme';
import { theme } from '../../context/theme';

import { StyledSwitchTheme } from './styles';


const SwitchTheme = () => {

  const [toggleIcon, setToggleIcon] = useState(false);
  
  const {themeValues, setThemeValues } = useTheme();


  const toggleTheme = () => {

    setToggleIcon(!toggleIcon);

    if(themeValues.name === 'dark'){
     return  setThemeValues(theme[0]);
    }
    
      return  setThemeValues(theme[1]);

  };

  return (
    <StyledSwitchTheme 
      onClick={toggleTheme}
      > 
      {
      
      themeValues.name === 'light' ?
      ( 
      <FiSun size={28} color={themeValues.colors.primarycontentBackgroundButton}/>
      ) 

      :

      (
      <FiMoon size={28} color={themeValues.colors.primarycontentBackgroundButton}/>
      )

      }

      </StyledSwitchTheme>
  )
}


export default SwitchTheme