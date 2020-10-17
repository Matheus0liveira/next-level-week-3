import React from 'react';

import { StyledHeader,Text }  from './styles';

interface PropsHeader{
  title: string;
  countOrphanages: number;

}

const Header = ({title, countOrphanages} : PropsHeader) => {


  return (

    <StyledHeader>

  <Text typeText='title'>{title}</Text>
      <Text typeText='count'>{ countOrphanages } orfanatos</Text>
    </StyledHeader>

  );
};



export default Header;