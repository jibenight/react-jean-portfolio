//rendu
import about from '../images/about.jpg';
import phone from '../images/phone-call.png';
import pin from '../images/pin.png';
import email from '../images/email.png';
import { motion as m } from 'framer-motion';

function Contact({ motionAttributes }) {
  const { initial, animate, exit } = motionAttributes.Contact;
  console.log(initial);
  return (
    <m.section
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      id='contact'
    >
      <div className='contact-titre'>
        <div id='contact-animation'>
          <div className='titre'>
            <h2>Me contacter</h2>
            <p>Hire me</p>
          </div>
          <div className='contact-form'>
            <div className='form-left'>
              <img src={about} alt='photo de jean en noir et blanc' />
            </div>
            <div className='form-right'>
              <form method='POST' id='formulaire'>
                <input type='text' name='name' placeholder='Nom' />
                <input type='text' name='subject' placeholder='Object' />
                <input type='email' name='email' placeholder='Email' />
                <textarea
                  name='message'
                  cols='30'
                  rows='10'
                  placeholder='Votre message'
                ></textarea>
                <input
                  type='submit'
                  value='envoi'
                  className='btn-grad'
                  id='submit-form'
                />
                <p className='mentions'>
                  Les données ne sont pas enregistrées, mais seulement envoyées
                  sur ma boite mail.
                </p>
              </form>
              <div id='succes-message'>
                <p id='send-message'>Votre message a bien été envoyé.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='direct-contact'>
          <div className='contact1'>
            <img src={phone} alt="icone d'un téléphone avec un degradé bleu" />
          </div>
          <div className='contact2'>
            <p>(+33)6 11 45 18 56</p>
          </div>
          <div className='contact3'>
            <img
              src={pin}
              alt="icone d'un d'un point de localisation avec un degradé bleu"
            />
          </div>
          <div className='contact4'>
            <p>Agen</p>
          </div>
          <div className='contact5'>
            <a href='mailto:contact@jean-nguyen.dev'>
              <img
                src={email}
                alt="icone d'une enveloppe avec un degradé bleu"
              />
            </a>
          </div>
          <div className='contact6'>
            <a href='mailto:contact@jean-nguyen.dev'>
              <p>contact@jean-nguyen.dev</p>
            </a>
          </div>
        </div>
      </div>
    </m.section>
  );
}

export default Contact;
