import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './containters/App';
import GlobalStore from './containters/GlobalStore';



// Render Setup
const MOUNT_NODE = document.getElementById('root');
const initialState = {
  app: null,
  test: { t: { in: 'dd' } },
};
const renderApp = RootComponent => {
  render(
    // <React.StrictMode>
    <BrowserRouter>
      <GlobalStore initialState={initialState}>
        <RootComponent />
      </GlobalStore>
    </BrowserRouter>
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
