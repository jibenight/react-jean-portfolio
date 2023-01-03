function About() {
  render(
    <section id='aboutMe'>
      <div id='entete'>
        <div className='left'>
          <img src='./images/about.jpg' alt='' />
        </div>
        <div className='right'>
          <div className='titre'>
            <h2>À propos de moi</h2>
            <p>Who I am</p>
          </div>
          <p>
            De nature curieuse, j’aime apprendre de nouvelles choses. Ce qui
            m’est grandement utile dans le milieu de l’informatique. Issue du
            domaine commercial, je me suis reconvertie dans le développement web
            car j’ai toujours été un passionné d’informatique et je voulais
            plutôt concevoir que ventre des choses.
          </p>
          <br />
          <p>
            De nature calme et pédagogue, j’aime transmettre mon savoir et mon
            expérience professionnelle. Ce qui m’a conduit à enseigner des
            langages comme le HTML et CSS3 ou des notions plus générales dans le
            domaine du digital.
          </p>
          <br />
          <p>
            Dans mon temps libre, tu peux me trouver au cinéma, en train de
            jouer à la console ou de prendre un avion pour une destination à
            l’autre bout du monde. J’aime aussi me retrouver avec mes amis pour
            partager un bon repas accompagné d’un bon verre. Je ne suis pas
            difficile à convaincre quand il s’agit de sortir.{' '}
          </p>

          <a href='./images/CV-Jean-Nguyen.pdf' target='_blank'>
            <button className='btn-grad'>Télécharger mon CV</button>
          </a>
        </div>
      </div>

      <div className='experience flex-centre'>
        <div className='experience-titre'>
          <div className='titre'>
            <h2>Expérience</h2>
            <p>Learning</p>
          </div>
        </div>
        <div className='timeline'>
          <div className='container right'>
            <i className='icon'>&#128214;</i>
            <div className='content'>
              <h2>Formateur digital et web</h2>
              <h4 className='date'>Depuis septembre 2019 en freelance</h4>

              <ul>
                <li className='list-experience'>
                  Préparation des cours en tenant compte du programme de
                  formation et des objectifs définis, en travaillant autour de
                  thématiques précises comme le HMTL, CSS, Wordpress en
                  construisant des exercices pour aider les stagiaires à
                  acquérir les savoirs.
                </li>
                <li>
                  Élaboration des supports de cours (PDF, support en ligne,
                  Keynote) de manière à faciliter la transmission des savoirs, à
                  capter plus facilement l'attention des stagiaires, à
                  visualiser les concepts.
                </li>
                <li>
                  Direction d'ateliers collectifs pour former des étudiants sur
                  le CMS Wordpress, sur des sites statiques, en adaptant les
                  techniques pédagogiques au profil des participants, animation
                  des cours et supervision des exercices d'application en
                  m'assurant du résultat final.
                </li>
                <li>
                  Évaluation des compétences des participants en leur faisant
                  passer des tests (questionnaire, devoirs, cas pratiques),
                  correction des épreuves et analyse de leurs résultats,
                  rédaction des bilans de formation.
                </li>
                <li>
                  Animation de formations à distance dans le cadre de TP, de
                  cours, en accompagnant les participants dans la prise en main
                  des logiciels, en m'adaptant au niveau de chacun, en vérifiant
                  leurs avancements.
                </li>
              </ul>
            </div>
          </div>
          <div className='container right'>
            <i className='icon'>&#128421;</i>
            <div className='content'>
              <h2>Développeur Web</h2>
              <h4 className='date'>Depuis juin 2017 en freelance</h4>
              <ul>
                <li>
                  Création d'un site internet en Freelance, développement de
                  sites statiques et dynamiques selon le cahier des charges
                  établi.
                </li>
                <li>
                  Prise en charge de projet de création de site internet pour
                  des clients en tenant compte de ses besoins et de ses
                  contraintes, définition du nom de domaine, choix du type
                  d'hébergement, réalisation des pages, mise en place de
                  solutions techniques, e-commerce, site vitrine.
                </li>
                <li>
                  Gestion du support technique d'application web comprenant
                  l'ajout de fonctionnalités, la réalisation de modifications
                  sur les pages, la gestion de la base de données, l'ajout de
                  plugin, la modification de contenu, l'evolution du site.
                </li>
                <li>
                  Formation des clients à l'utilisation du Back-end en les
                  guidant dans la prise en main du site selon les besoins de
                  chacun, définition au préalable des objectifs de la formation
                  et préparation de support pour animer les séances.
                </li>
                <li>
                  Veille professionnelle afin de me tenir au courant des
                  avancées technologiques en lien avec mon activité, lecture
                  d'articles et de vidéos, participation à des salons
                  professionnels.
                </li>
              </ul>
            </div>
          </div>
          <div className='container right'>
            <i className='icon'>&#128241;</i>
            <div className='content'>
              <h2>Superviseur de niveau 2</h2>
              <h4 className='date'>
                Juillet 2012 - Mars 2015 - Apple - Cork Irlande
              </h4>
              <ul>
                <li>
                  Fourniture d'une assistance à distance aux clients afin de
                  diagnostiquer et, si possible, de résoudre leurs problèmes
                  informatiques en proposant des solutions immédiates ou en les
                  rappelant ultérieurement pour leur proposer la venue d'un
                  technicien.
                </li>
                <li>
                  Fourniture d'une assistance aux utilisateurs d'informatique
                  mobile afin de connecter un équipement mobile à un réseau
                  filaire et de partager des ressources ou de synchroniser les
                  données de l'équipement mobile.
                </li>
                <li>
                  Gestion d'un service d'assistance par téléphone en répondant
                  de façon simple et claire aux questions des clients concernant
                  l'utilisation d'un équipement informatique ou d'un logiciel et
                  fourniture d'instructions, de manuels ou d'autres documents
                  afin de les aider à résoudre leur problème.Collaboration avec
                  l'équipe de développement sur les erreurs et les bogues
                  signalés dans des logiciels nouvellement publiés, et
                  assistance fournie pour le déploiement des correctifs.
                </li>
                <li>
                  Intégration des innovations technologiques et numériques,
                  capacité à acquérir rapidement de nouvelles connaissances.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='education flex-centre'>
        <div className='education-titre'>
          <div className='titre'>
            <h2>Formation</h2>
            <p>Learning</p>
          </div>
        </div>
        <div className='certificat'>
          <div className='certif-item'>
            <img src='./images/certificats/diplome_ifocop.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/web_development.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/javascript_website.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/nodejs.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/swift.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/SwiftUI.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/git.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/ruby.jpg' alt='' />
          </div>
          <div className='certif-item'>
            <img src='./images/certificats/bootstrap.jpg' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
