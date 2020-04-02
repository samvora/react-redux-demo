import React from 'react';
import './App.css';
import MainRoutes from '../../routes';

const app = () => {
  console.log('app');
  return (

    <MainRoutes />

    // <Layout header={false}>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //     </a>
    //     </header>
    //   </div>
    // </Layout>

  );
}

export default app;
