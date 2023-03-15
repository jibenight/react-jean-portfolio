import chevron from '../images/chevron.png';
import { motion as m } from 'framer-motion';

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
    <m.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, fade: 'fadeIn' }}
    >
      <nav
        className='flex-centre'
        role='navigation'
        aria-label='main navigation'
      >
        {components.map(component => (
          <div className='flex-centre' key={component.key}>
            <p
              className='icon-cross'
              name={component.name}
              onClick={() => handleNavClick(component.name)}
            >
              {component.label}
            </p>
            <img
              className='fade-in-image icon-cross'
              src={chevron}
              alt='Chevron en gradient bleu du menu À propos de moi'
            />
          </div>
        ))}
      </nav>
    </m.header>
  );
}

export default Header;
