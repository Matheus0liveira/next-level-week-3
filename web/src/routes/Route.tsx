import React from 'react';

import PropTypes from 'prop-types';


import { Redirect, Route } from 'react-router-dom';


interface PropsRoute{
  redirectTo: string;
  isPrivate: boolean;
  component: Function;
  path: string;
  exact: boolean;

}

const RouteWrapper = ({ redirectTo, isPrivate, component: Component, ...rest }: PropsRoute) => {


  const authenticated = localStorage.getItem('@dashboard:token');

  console.log(authenticated);

  if(!authenticated && isPrivate) return <Redirect to={redirectTo} />;
  
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
