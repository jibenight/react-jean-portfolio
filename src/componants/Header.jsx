import { useState } from 'react';
import chevron from '../images/chevron.png';
import cancel from '../images/cancel.png';
import About from './About';
import Portfolio from './Portfolio';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Main from '../Main';

function Header() {
  const [displayedComponent, setDisplayedComponent] = useState(<Home />);
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const handleItemClick = component => {
    setDisplayedComponent(component);
    setIsMenuHidden(true);
  };

  const handleMenuButtonClick = () => {
    setIsMenuHidden(false);
  };

  const menuItems = [
    { id: 1, label: 'À propos de moi', component: <About /> },
    { id: 2, label: 'Portfolio', component: <Portfolio /> },
    { id: 3, label: 'Contact', component: <Contact /> },
    { id: 4, label: 'Mes compétences', component: <Skills /> },
  ];

  //affichage render
  return (
    <header>
      {!isMenuHidden ? (
        <nav
          className='flex-centre'
          role='navigation'
          aria-label='main navigation'
        >
          {menuItems.map(item => (
            <div className='flex-centre'>
              <p key={item.id} onClick={() => handleItemClick(item.component)}>
                {item.label}
              </p>
              <img
                className='fade-in-image'
                src={chevron}
                alt='Chevron en gradient bleu du menu À propos de moi'
              />
            </div>
          ))}
        </nav>
      ) : (
        <div id='cancel' className='icon-cross' onClick={handleMenuButtonClick}>
          <img id='chevron' src={cancel} alt='icon pour fermer la page' />
        </div>
      )}
      <Main component={displayedComponent} />
    </header>
  );
}

export default Header;
