//rendu
import about from '../images/about.jpg';
import phone from '../images/phone-call.png';
import pin from '../images/pin.png';
import email from '../images/email.png';
// import ContactForm from './ContactForm';
import FormNetlify from './FormNetlify';
import SuccesMessage from './SuccesMessage';
import { motion as m } from 'framer-motion';
import { useState } from 'react';

function Contact({ motionAttributes }) {
  //state
  const [form, setForm] = useState(true);
  const { initial, animate, exit } = motionAttributes.Contact;
  //component
  function handleFormSubmit() {
    setForm(false);
  }

  return (
    <m.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <section id='contact'>
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
              <div className='form-right flex-center'>
                {form ? (
                  // <ContactForm onSubmit={handleFormSubmit} />
                  <FormNetlify onSubmit={handleFormSubmit} />
                ) : (
                  <SuccesMessage />
                )}
              </div>
            </div>
          </div>
          <div className='direct-contact'>
            <div className='contact1'>
              <img
                src={phone}
                alt="icone d'un téléphone avec un degradé bleu"
              />
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
      </section>
    </m.div>
  );
}

export default Contact;
