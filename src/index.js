import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
//import './font-awesome.js';
//import { scrollToTop } from './helpers';
//import App from './App';

import getroutes from './routes';
// import store, { apiClient } from './redux';
const mountNode = document.getElementById('content');

const render = routes => {
  match(
    { history: browserHistory, routes },
    (error, redirectLocation, renderProps) => {
      ReactDOM.render(
        // <Provider store={store} key="provider">
        <Router
          {...renderProps}
          history={browserHistory}
          //onUpdate={scrollToTop}
        >
          {routes}
        </Router>,
        // </Provider>
        mountNode
      );
    }
  );
};

render(getroutes(window.location.host, window.location.pathname));

// if (module.hot) {
//   module.hot.accept(['./containers/app/app', './routes'], () => {
//     render(getroutes(store, apiClient, window.location.host, window.location.pathname));
//   });
// }