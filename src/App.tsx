import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Router from './components/router';
import NavBar from './components/nav-bar/nav-bar';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <NavBar />
      <Router />
    </React.Fragment>
  );
};

export default App;
