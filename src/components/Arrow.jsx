import arrowDown from '../images/down-arrow.png';
import { motion as m } from 'framer-motion';
function Arrow() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, fade: 'fadeIn', delay: 1 }}
      whileInView='hidden'
      viewport={{ once: true }}
      id='arrow-down'
    >
      <img id='arrow-animation' src={arrowDown} alt='' />
    </m.div>
  );
}

export default Arrow;
