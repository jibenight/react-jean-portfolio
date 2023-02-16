import arrowDown from './images/down-arrow.png';
// import { DisplayedComponent } from './componants/Header';

function Main({ component }) {
  //state

  // Comportements
  document.onscroll = () => {
    document.getElementById('arrow-down').style.display = 'none';
  };

  //rendu
  return (
    <main className='flex-centre animate__animated animate__fadeIn animate__delay-1s'>
      {/* zone d'accueil */}
      <div id='arrow-down' className='animate__animated'>
        <img id='arrow-animation' src={arrowDown} alt='' />
      </div>

      {/* <DisplayedComponent component={component} /> */}
    </main>
  );
}

export default Main;
