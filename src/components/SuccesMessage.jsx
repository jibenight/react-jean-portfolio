import { motion as m } from 'framer-motion';
function SuccesMessage() {
  return (
    <m.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      id='succes-message'
      className='flex-centre'
    >
      <p id='send-message'>Votre message a bien été envoyé.</p>
    </m.div>
  );
}

export default SuccesMessage;
