import React from 'react';
import { Route } from 'react-router';
import { getUrl as getRoutePath } from './helpers/url-manager';
//import App from './containers/app/app';
// import NoMatch from './containers/not-found/';
// import NoServer from './containers/no-server';
import RouterLoader from './components/route-loader';
import './register-routes';


export default (hostName, pathName, cookie) => {
  let component;
  component = (
    <Route>
      <Route path="/">
        <Route
          path={getRoutePath('landing')}
          // path="/landing"
          component={RouterLoader({
            loader: () => import('./containers/landing')
          })}
        />
      </Route>
      {/* <Route path="/noserver" component={NoServer} />
      <Route path="*" component={NoMatch} /> */}
    </Route>
  );
  return component;
};