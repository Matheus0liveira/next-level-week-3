import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes = () => {

  return (

    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={Landing}/>
        <Route exact path='/app' component={OrphanagesMap}/>

      </Switch>
    </BrowserRouter>

  );

};


export default Routes;