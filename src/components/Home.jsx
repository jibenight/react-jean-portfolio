import { motion as m } from 'framer-motion';

function Home() {
  return (
    <m.section
      initial={{ y: '-100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      id='home'
    >
      <div className='home-left'>
        {/* <img src="./images/banner_bg.jpg" alt="" /> */}
      </div>
      <div className='home-right'>
        <div className='text-focus-in'>
          <h1>
            I'm
            <br />
            Jean
            <br />
            Nguyen
          </h1>
        </div>
      </div>
    </m.section>
  );
}

export default Home;
