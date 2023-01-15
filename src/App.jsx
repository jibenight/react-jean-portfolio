import { useState } from 'react';
import chevron from './images/chevron.png';
import arrowDown from './images/down-arrow.png';

function App() {
  //state

  // Comportements
  const closePage = () => {
    document.getElementById('home').style.display = 'flex';
    document.querySelector('nav').style.display = 'block';
    const elements = ['aboutMe', 'portfolio', 'contact', 'skills', 'cancel'];
    elements.map(element => {
      if (document.getElementById(element)) {
        document.getElementById(element).style.display = 'none';
      }
    });
  };

  //rendu
  return (
    <main className='flex-centre animate__animated animate__fadeIn animate__delay-1s'>
      {/* zone d'accueil */}
      <div id='cancel' onClick={closePage} className='icon-cross'>
        <img id='chevron' src={chevron} alt='icon pour fermer la page' />
      </div>
      <div id='arrow-down'>
        <img id='arrow-animation' src={arrowDown} alt='' />
      </div>

      <section id='home'>
        <div className='home-left'>
          {/* <img src="./images/banner_bg.jpg" alt="" /> */}
        </div>
        <div className='home-right'>
          <div className='text-focus-in'>
            <h1>
              I'm
              <br />
              Jean
              <br />
              Nguyen
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
