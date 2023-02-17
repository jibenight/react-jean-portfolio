import { useState } from 'react';
import chevron from '../images/chevron.png';

function Header({ setActiveComponent }) {
  const components = [
    { name: 'About', label: 'À propos de moi', key: '1' },
    { name: 'Portfolio', label: 'Portfolio', key: '2' },
    { name: 'Contact', label: 'Contact', key: '3' },
    { name: 'Skills', label: 'Mes compétences', key: '4' },
  ];

  const handleNavClick = componentName => {
    setActiveComponent(componentName);
  };

  //affichage render
  return (
    <header>
      <nav
        className='flex-centre'
        role='navigation'
        aria-label='main navigation'
      >
        {components.map(component => (
          <div className='flex-centre' key={component.key}>
            <p
              key={component.name}
              onClick={() => handleNavClick(component.name)}
            >
              {component.label}
            </p>
            <img
              className='fade-in-image'
              src={chevron}
              alt='Chevron en gradient bleu du menu À propos de moi'
            />
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
