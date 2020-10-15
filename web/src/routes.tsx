import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrpahanage from './pages/CreateOrpahanage';
import Orphanage from './pages/Orphanage';

const Routes = () => {

  return (

    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={Landing}/>
        <Route exact path='/app' component={OrphanagesMap}/>
        <Route exact path='/orphanage/create' component={CreateOrpahanage}/>
        <Route exact path='/orphanage/:id' component={Orphanage}/>

      </Switch>
    </BrowserRouter>

  );

};


export default Routes;