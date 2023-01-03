function Header() {
  return (
    <nav>
      <div className='flex-centre'>
        <p id='nav-about' class='target icon-cross'>
          À propos de moi
        </p>
        <img
          className='fade-in-image'
          src='./images/chevron.png'
          alt='Chevron en gradient bleu du menu À propos de moi'
        />
      </div>

      <div className='flex-centre icon-cross'>
        <p id='nav-portfolio' class='icon-cross'>
          Portfolio
        </p>
        <img
          className='fade-in-image'
          src='./images/chevron.png'
          alt='Chevron en gradient bleu du menu portfolio'
        />
      </div>
      <div id='nav-contact' className='flex-centre'>
        <p className='icon-cross'>Contact</p>
        <img
          className='fade-in-image'
          src='./images/chevron.png'
          alt='Chevron en gradient bleu du menu contact'
        />
      </div>
      <div id='nav-skills' class='flex-centre'>
        <p className='icon-cross'>Mes compétences</p>
        <img
          className='fade-in-image'
          src='./images/chevron.png'
          alt='Chevron en gradient bleu du menu compétences'
        />
      </div>
    </nav>
  );
}

export default Header;
