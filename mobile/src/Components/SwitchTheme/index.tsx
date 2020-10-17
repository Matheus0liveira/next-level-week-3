import React, { useState } from 'react';


import useTheme from '../../utils/useTheme';
import dark from '../../themes/dark';
import light from '../../themes/light';

import { Feather } from '@expo/vector-icons';

import { StyledSwitchTheme } from './styles';


const SwitchTheme = () => {

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
      onPress={toggleTheme}
      > 
      {
      
      themeValues.name === 'light' ?
      ( 
        <Feather name='sun' color={themeValues.colors.primarycontentButton} size={28} />
      // <FiSun size={28} color={themeValues.colors.primarycontentButton}/>
      ) 

      :

      (
        <Feather name='moon' color={themeValues.colors.primarycontentButton} size={28} />
      )

      }

      </StyledSwitchTheme>
  )
}


export default SwitchTheme;