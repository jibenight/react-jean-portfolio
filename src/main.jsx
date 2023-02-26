import { useState } from 'react';
import arrowDown from './images/down-arrow.png';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Close from './components/Close';
import { AnimatePresence, motion as m } from 'framer-motion';

function Main() {
  //state
  const [activeComponent, setActiveComponent] = useState('Home');
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [showHiddenComponent, setShowHiddenComponent] = useState(false);
  const [componentMotion, setComponentMotion] = useState({
    Home: {
      initial: { x: '100%' },
      animate: { x: '0%' },
      exit: { x: '100%' },
    },
    About: {
      initial: { y: '-100%' },
      animate: { y: '0%' },
      exit: { y: '-100%' },
    },
    Contact: {
      initial: { y: '100%' },
      animate: { y: '0%' },
      exit: { y: '100%' },
    },
    Skills: {
      initial: { y: '100%' },
      animate: { y: '0%' },
      exit: { y: '100%' },
    },
    Portfolio: {
      initial: { x: '-100%' },
      animate: { x: '0%' },
      exit: { x: '-100%' },
    },
  });

  //Comportements
  const handleComponentClick = componentName => {
    setIsNavHidden(true);
    setActiveComponent(componentName);
    setShowHiddenComponent(true);
    setComponentMotion(prevState => ({
      ...prevState,
      [componentName]: {
        initial: { x: '100%' },
        animate: { x: '0%' },
        exit: { x: '100%' },
      },
    }));
  };

  const handleShowNavClick = () => {
    setIsNavHidden(false);
    setShowHiddenComponent(false);
    setActiveComponent('Home');
  };

  const components = {
    Home,
    About,
    Contact,
    Skills,
    Portfolio,
  };

  const ActiveComponent = components[activeComponent] || Home;

  // Comportements
  document.onscroll = () => {
    const arrowDownEl = document.getElementById('arrow-down');
    if (arrowDownEl) {
      arrowDownEl.style.display = 'none';
    }
  };

  //rendu
  return (
    <>
      {!isNavHidden && <Header setActiveComponent={handleComponentClick} />}
      <main className='flex-centre animate__animated animate__fadeIn animate__delay-1s'>
        {/* zone d'accueil */}
        <div id='arrow-down' className='animate__animated'>
          <img id='arrow-animation' src={arrowDown} alt='' />
        </div>
        <AnimatePresence>
          {!isNavHidden && (
            <ActiveComponent
              key={activeComponent}
              motionAttributes={componentMotion}
            />
          )}

          {isNavHidden && showHiddenComponent && (
            <ActiveComponent
              key={activeComponent}
              motionAttributes={componentMotion}
            />
          )}
        </AnimatePresence>
        {showHiddenComponent && <Close onClick={handleShowNavClick} />}
      </main>
      {activeComponent !== 'Home' && <Footer />}
    </>
  );
}

export default Main;
