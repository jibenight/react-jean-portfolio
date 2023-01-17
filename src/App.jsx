import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Header from './componants/Header';
import Footer from './componants/Footer';
import './css/styles.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
