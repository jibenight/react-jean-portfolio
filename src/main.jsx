import { useState } from 'react';
import Arrow from './components/Arrow';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Close from './components/Close';
import { AnimatePresence } from 'framer-motion';

function Main() {
  //états
  const [activeComponent, setActiveComponent] = useState('Home');
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [showHiddenComponent, setShowHiddenComponent] = useState(false);
  const [isOneSecondPassed, setIsOneSecondPassed] = useState(false);
  //animations
  const [componentMotion, setComponentMotion] = useState({
    Home: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    About: {
      initial: { y: '-100%' },
      animate: { y: '0%' },
      exit: { y: '-100%' },
    },
    Contact: {
      initial: { x: '100%' },
      animate: { x: '0%' },
      exit: { x: '100%' },
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
  //cache la nav et affiche le composant cliqué
  const handleComponentClick = componentName => {
    setIsNavHidden(true);
    setActiveComponent(componentName);
    setShowHiddenComponent(true);
  };
  //affiche la nav et le composant Home
  const handleShowNavClick = () => {
    //scroll to top
    window.scrollTo(0, top);
    //reset
    setIsNavHidden(false);
    setShowHiddenComponent(false);
    setActiveComponent('Home');
  };

  //composants
  const components = {
    Home,
    About,
    Contact,
    Skills,
    Portfolio,
  };

  //composant actif
  const ActiveComponent = components[activeComponent];

  //rendu
  return (
    <>
      {/* header */}
      {!isNavHidden && <Header setActiveComponent={handleComponentClick} />}
      <main className='flex-centre'>
        {/* flèche */}
        {activeComponent !== 'Home' && <Arrow />}
        {/* composant actif */}
        <AnimatePresence mode='sync'>
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
        {/* fermeture */}
        {showHiddenComponent && <Close onClick={handleShowNavClick} />}
      </main>
      {/* footer */}
      {activeComponent !== 'Home' && <Footer />}
    </>
  );
}

export default Main;
