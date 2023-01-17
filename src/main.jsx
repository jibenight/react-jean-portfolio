import Home from './componants/Home';
import About from './componants/About';

import Portfolio from './componants/Portfolio';
import Skills from './componants/Skills';
import Contact from './componants/Contact';

import chevron from './images/chevron.png';
import arrowDown from './images/down-arrow.png';
import cancel from './images/cancel.png';

function Main() {
  //state

  // Comportements
  const closePage = () => {
    document.getElementById('home').style.display = 'flex';
    document.querySelector('nav').style.display = 'block';
    document.querySelector('footer').style.display = 'none';
    const elements = ['aboutMe', 'portfolio', 'contact', 'skills', 'cancel'];
    elements.map(element => {
      if (document.getElementById(element)) {
        document.getElementById(element).style.display = 'none';
      }
      if (element == 'skills' || element == 'aboutMe') {
        document.getElementById('arrow-down').style.display = 'none';
      }
    });
  };

  document.onscroll = () => {
    document.getElementById('arrow-down').style.display = 'none';
  };

  //rendu
  return (
    <main className='flex-centre animate__animated animate__fadeIn animate__delay-1s'>
      {/* zone d'accueil */}
      <div id='cancel' onClick={closePage} className='icon-cross'>
        <img id='chevron' src={cancel} alt='icon pour fermer la page' />
      </div>
      <div id='arrow-down' className='animate__animated'>
        <img id='arrow-animation' src={arrowDown} alt='' />
      </div>

      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}

export default Main;
