import { useState } from 'react';
import Arrow from './Arrow';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Footer from './Footer';
import Close from './Close';
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
