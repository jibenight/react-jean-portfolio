import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './components/Main';
import Error404 from './components/Error404';
import './css/styles.css';
import './css/mobile.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  window.location.pathname === '/' ? <Main /> : <Error404 />
);
