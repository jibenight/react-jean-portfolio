import gilian from '../images/images_portfolio/gilian-officiel.webp';
import tuktuk from '../images/images_portfolio/tuktuk.webp';
import getPassword from '../images/images_portfolio/get-password.webp';
import ghostCmsLogo from '../images/icons/ghost-logo-dark.svg';
import astro from '../images/icons/astro.svg';
import handlebars from '../images/icons/handlebars.svg';
import Github from '../images/icons/github.svg';

const LastDataPortfolio = [
  {
    src: getPassword,
    alt: 'Jeune femme devant sonr ordinateur',
    titre: 'Get-password.com',
    details: 'Réalisation à 100%',
    logo: [astro],
    logogit: Github,
    github: 'https://github.com/jibenight/Get-password',
    href: 'https://get-password.com',
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
