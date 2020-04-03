import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import App from './containters/App';

import { Provider } from 'react-redux';

import configureStore from './store';
import history from './history/history';


const store = configureStore();

// Render Setup
const MOUNT_NODE = document.getElementById('root');

const renderApp = RootComponent => {
  render(
    // <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <RootComponent />
      </Router>
    </Provider>
    // </React.StrictMode>
    ,
    MOUNT_NODE
  );
};

renderApp(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
