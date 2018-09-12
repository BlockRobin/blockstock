import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import MenuAppBar from './appBar.jsx';
import reactLogo from './assets/React-icon.png';
import Grid from '@material-ui/core/Button';

const App = () => (
  <BrowserRouter>
    <main>
      <div>
      </div>
      {/* <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">About</Link>
        </li>
      </ul>  */}
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
