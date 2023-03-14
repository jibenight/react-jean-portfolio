import chevron from '../images/chevron.png';
import Footer from './Footer';

function Error404() {
  return (
    <>
      <div className='flex-centre nopage'>
        <div>
          <a href='https://jean-nguyen.dev'>
            <img src={chevron} alt="icon d'un chevron" />
          </a>
          <h2>Oups.... pas de page</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
