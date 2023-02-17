import { useState } from 'react';
import dataPortfolio from '../Dataportfolio';

function Portfolio() {
  // state
  const [infos, setinfos] = useState(dataPortfolio);

  //render
  return (
    <section id='portfolio'>
      <div className='portfolio-titre'>
        <div className='titre'>
          <h2>Portfolio</h2>
          <p>My work</p>
        </div>
      </div>
      <div className='portfolio-item'>
        {infos.map((info, index) => (
          <div className='card' key={index}>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <picture>
                  <img src={info.src} alt={info.alt} />
                </picture>
              </div>
              <div className='flip-card-back'>
                <h2>{info.titre}</h2>
                <p>{info.logo}</p>
                <p>{info.titre2}</p>
                <button className='btn-grad'>
                  <a href={info.href} target='_blank'>
                    Voir le site
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
