import { Redirect, Route } from 'react-router-dom';
import React from 'react';

export default function RouteWithSubRoutes(route) {
  const renderRoute = (props) => {
    if (route.redirect) {
      return <Redirect to={route.redirect} />;
    }

    return (
      route.component && <route.component {...props} routes={route.routes} />
    );
  };

  return <Route path={route.path} render={renderRoute} />;
}
