import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Skills from './Skills';
import './css/styles.css';

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About />
    <Portfolio />
    <Skills />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
