import { motion as m } from 'framer-motion';

function Home({ motionAttributes }) {
  const { initial, animate, exit } = motionAttributes.Home;

  return (
    <m.section
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 1.0, fade: 'fadeIn' }}
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
