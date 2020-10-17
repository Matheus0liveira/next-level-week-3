import React from 'react';
import SideBar from '../../components/SideBar';

import {DashBoardPage} from './styles';

const DashBoard = () => {


  return (
    <DashBoardPage>

      <SideBar page='dashboard'/>

    </DashBoardPage>
  );
};



export default DashBoard;