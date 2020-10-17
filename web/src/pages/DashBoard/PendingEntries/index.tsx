import React from 'react';
import Header from '../../../components/Header';
import LayoutDashBoard from '../../../components/LayoutDashBoard';
import MiniMap from '../../../components/MiniMap';



const Pending = () => {
  return (
   <>
    <LayoutDashBoard>
      <MiniMap page='dashboard/pending' latitude={-8.8061861} longitude={-44.2194616}/>
    </LayoutDashBoard>

   </>
  );
};



export default Pending