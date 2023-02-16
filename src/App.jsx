import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import Header from './componants/Header';
import Footer from './componants/Footer';
import './css/styles.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Main />
    <Footer />
  </BrowserRouter>
);
