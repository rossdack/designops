import { Switch } from 'react-router';
import React from 'react';
import RouteWithSubRoutes from './RouteWithSubRoutes';

export default function Router(props) {
  const { routes } = props;

  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
}
