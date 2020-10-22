import React, { Component} from 'react';

import PropTypes from 'prop-types';


import { Redirect, Route, Router } from 'react-router-dom';


interface PropsRoute{
  redirectTo: string;
  isPrivate: boolean;
  component: React.ComponentClass;
  exact: boolean;

}

const RouteWrapper = ({ redirectTo, isPrivate, component: Component, ...rest }: PropsRoute) => {


  const token = localStorage.getItem('@dashboard:token');

  if(!token && isPrivate) return <Redirect to={redirectTo} />;





  
    return <Route {...rest} render={props => <Component {...props} />} />;
};


RouteWrapper.propTypes = {

  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired

};

RouteWrapper.defaultProps = {

  redirectTo: '/restrict/login',
  isPrivate: false,
}

export default RouteWrapper;
