import gilian from '../images/images_portfolio/gilian-officiel.webp';
import tuktuk from '../images/images_portfolio/tuktuk.webp';
import ghostCmsLogo from '../images/icons/ghost-logo-dark.svg';
import reactLogo from '../images/icons/react.svg';
import handlebars from '../images/icons/handlebars.svg';
import Express from '../images/icons/express.svg';
import Github from '../images/icons/github.svg';

const LastDataPortfolio = [
  {
    src: gilian,
    alt: 'à Gauche portrait de Gilian et à gauche le logo du site internet gilian-officiel.com',
    titre: 'Gilian-officiel.com',
    details: 'Réalisation à 100%',
    logo: [reactLogo, Express],
    logogit: Github,
    github: 'https://github.com/jibenight/Gilian-officiel',
    href: 'https://gilian-officiel.com',
  },
  {
    src: tuktuk,
    alt: 'tuktuk en ligne',
    titre: 'tuktukworldtour.com',
    details:
      'Réalisation à 100% - Création de theme pour le CMS ghost - Self-hosted',
    logo: [handlebars, ghostCmsLogo],
    logogit: Github,
    github: 'https://github.com/jibenight/Ghost-theme-tuktuk',
    href: 'https://tuktukworldtour.com/',
  },
];

export default LastDataPortfolio;
