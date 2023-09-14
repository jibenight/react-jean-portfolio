import { useState } from 'react';
import dataPortfolio from '../data/Dataportfolio';
import LastDataPortfolio from '../data/LastDataPortfolio';
import { motion as m } from 'framer-motion';

function Portfolio({ motionAttributes }) {
  // state
  const [infos, setinfos] = useState(dataPortfolio);
  const [lastinfo, setlastinfo] = useState(LastDataPortfolio);
  const { initial, animate, exit } = motionAttributes.Portfolio;
  //render
  return (
    <m.section
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      id='portfolio'
    >
      <div className='portfolio-titre'>
        <div className='titre'>
          <h2>Portfolio</h2>
          <p>My work</p>
        </div>
      </div>

      {/* last work */}
      <div className='last-work'>
        <h2>Derniers projets</h2>
        <hr />
        {lastinfo.map((lastinfos, index) => (
          <div className='last-card' key={index}>
            <div className='last-images'></div>
            <div className='last-infos'>
              <a
                href={lastinfos.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                <h3>{lastinfos.titre}</h3>
              </a>

              <div className='last-logo'>
                {lastinfos.logo.map((logos, index) => (
                  <div key={index}>{logos}</div>
                ))}
              </div>
              <div>
                <p>{lastinfos.details}</p>
              </div>

              <div>
                <a
                  href={lastinfos.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='git-link'>
                    <div>{lastinfos.logogit}</div>
                    <p> Voir le repositorie Github</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='autre-projets'>
        <h2>Autres Projets</h2>
        <hr />
        {/* other website   */}
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
      </div>
    </m.section>
  );
}

export default Portfolio;
