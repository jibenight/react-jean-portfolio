import { useState } from 'react';
import chevron from '../images/chevron.png';

function Header({ setActiveComponent }) {
  const components = [
    { name: 'about', label: 'À propos de moi' },
    { name: 'portfolio', label: 'Portfolio' },
    { name: 'contact', label: 'Contact' },
    { name: 'skills', label: 'Mes compétences' },
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
          <div className='flex-centre'>
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
