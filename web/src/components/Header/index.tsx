import React from 'react';

import { StyledHeader,Text }  from './styles';

interface PropsHeader{
  title: string;
  countOrphanages: number;
  countOrphanage: number;

}

const Header = ({title, countOrphanages, countOrphanage} : PropsHeader) => {


  return (

    <StyledHeader>

  <Text typeText='title'>{title}</Text>
  <Text typeText='count'>{ countOrphanage } orfanato{countOrphanage === 1 ? '': 's'} encontrado </Text>
    </StyledHeader>

  );
};



export default Header;