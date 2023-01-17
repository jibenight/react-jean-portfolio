import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import './css/styles.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
