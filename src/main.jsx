import { useState } from 'react';
import arrowDown from './images/down-arrow.png';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import cancel from './images/cancel.png';

function Main() {
  //state
  const [activeComponent, setActiveComponent] = useState(<Home />);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [showHiddenComponent, setShowHiddenComponent] = useState(false);

  //Comportements
  const handleComponentClick = componentName => {
    setIsNavHidden(true);
    setActiveComponent(componentName);
    setShowHiddenComponent(true);
  };

  const handleShowNavClick = () => {
    setIsNavHidden(false);
    setShowHiddenComponent(false);
    setActiveComponent(<Home />);
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
    <div>
      <Header setActiveComponent={handleComponentClick} />
      <main className='flex-centre animate__animated animate__fadeIn animate__delay-1s'>
        {/* zone d'accueil */}
        <div id='arrow-down' className='animate__animated'>
          <img id='arrow-animation' src={arrowDown} alt='' />
        </div>

        {!isNavHidden && <ActiveComponent />}
        {showHiddenComponent && (
          <div id='cancel' className='icon-cross' onClick={handleShowNavClick}>
            <img id='chevron' src={cancel} alt='icon pour fermer la page' />
          </div>
        )}
        {!isNavHidden && showHiddenComponent && (
          <div id='cancel' className='icon-cross' onClick={handleShowNavClick}>
            <img id='chevron' src={cancel} alt='icon pour fermer la page' />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Main;
