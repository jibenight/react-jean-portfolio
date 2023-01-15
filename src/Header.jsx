import { useState } from 'react';
import chevron from './images/chevron.png';

function Header() {
  // state (état, données)
  const [infos, setinfos] = useState([
    {
      id: 1,
      name: 'nav-about',
      text: 'À propos de moi',
      alt: 'Chevron en gradient bleu du menu À propos de moi',
    },
    {
      id: 2,
      name: 'nav-portfolio',
      text: 'Portfolio',
      alt: 'Chevron en gradient bleu du menu portfolio',
    },
    {
      id: 3,
      name: 'nav-contact',
      text: 'Contact',
      alt: 'Chevron en gradient bleu du menu contact',
    },
    {
      id: 4,
      name: 'nav-skills',
      text: 'Mes compétences',
      alt: 'Chevron en gradient bleu du menu compétences',
    },
  ]);

  // Comportements
  const showContent = id => {
    // show section by id
    const elements = ['aboutMe', 'portfolio', 'contact', 'skills'];
    if (id > 0 && id <= elements.length) {
      document.getElementById(elements[id - 1]).style.display = 'block';
      if (skills) {
        document.getElementById('skills-techno').style.display = 'block';
      }

      if (id == 4 || id == 1) {
        document.getElementById('arrow-down').style.display = 'block';
      }
    }
    // hide main section
    document.getElementById('home').style.display = 'none';
    //show cancel button
    document.getElementById('cancel').style.display = 'block';
    //hide nav
    document.querySelector('nav').style.display = 'none';
  };

  //affichage render
  return (
    <nav>
      {infos.map(info => (
        <div className='flex-centre' key={info.id}>
          <p
            onClick={() => showContent(info.id)}
            id={info.name}
            className='icon-cross'
          >
            {info.text}
          </p>
          <img className='fade-in-image' src={chevron} alt={info.alt} />
        </div>
      ))}
    </nav>
  );
}

export default Header;
