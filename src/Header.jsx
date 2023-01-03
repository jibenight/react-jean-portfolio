import { useState } from 'react';
import chevron from './images/chevron.png';

function Header() {
  const buttonNav = ['nav-about', 'nav-portfolio', 'nav-contact', 'nav-skills'];
  const [hide, setShow] = useState(true);

  const showContent = () => {};

  return (
    <nav>
      <div className='flex-centre'>
        <p onClick={showContent} id='nav-about' className='target icon-cross'>
          À propos de moi
        </p>
        <img
          className='fade-in-image'
          src={chevron}
          alt='Chevron en gradient bleu du menu À propos de moi'
        />
      </div>

      <div className='flex-centre icon-cross'>
        <p id='nav-portfolio' className='icon-cross'>
          Portfolio
        </p>
        <img
          className='fade-in-image'
          src={chevron}
          alt='Chevron en gradient bleu du menu portfolio'
        />
      </div>
      <div id='nav-contact' className='flex-centre'>
        <p className='icon-cross'>Contact</p>
        <img
          className='fade-in-image'
          src={chevron}
          alt='Chevron en gradient bleu du menu contact'
        />
      </div>
      <div id='nav-skills' className='flex-centre'>
        <p className='icon-cross'>Mes compétences</p>
        <img
          className='fade-in-image'
          src={chevron}
          alt='Chevron en gradient bleu du menu compétences'
        />
      </div>
    </nav>
  );
}

export default Header;
