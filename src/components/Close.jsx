import cancel from '../images/cancel.png';
import { motion as m } from 'framer-motion';

function Close(props) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, fade: 'fadeIn' }}
      id='cancel'
      className='icon-cross'
      onClick={props.onClick}
    >
      <img id='chevron' src={cancel} alt='icon pour fermer la page' />
    </m.div>
  );
}

export default Close;
