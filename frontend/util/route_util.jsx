import { Route, withRouter, Redirect } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
