import React from 'react';
import { motion } from 'framer-motion';

export default function About({ inView }) {
  return (
    <motion.div
      layout
      style={
        inView ? { opacity: 1 } : { position: 'sticky', top: '6%', zIndex: 2 }
      }
      className={
        ' h-[calc(100vh-4rem)] bg-grey w-[94%] m-auto mb-20 p-2 rounded-lg flex flex-col text-center overflow-hidden'
      }
    >
      <motion.h2 className={'font-monoton text-3xl p-4'}>Who?</motion.h2>
      <div className="h-full lg:pt-5 pb-10">
        <p className="lg:ml-auto lg:mr-auto lg:w-1/2 text-center md:text-lg text-base">
          Hey, I'm Kei En. I'm a web developer and designer - here's a bit more
          about my background. I'm available for web projects and based in
          Nairobi, Kenya.
          <br />I am skilled in developing user interfaces for web apps that are
          easy to use and visually appealing while being optimised for both
          desktop and mobile devices. I appreciate working with cross-functional
          teams to produce high-quality products that go above and beyond
          customer expectations. I am always looking to take on new challenges
          and continue learning in order to stay up-to-date on the latest trends
          and technologies in the field. Feel free to get in touch at the bottom
          of this page if you're interested in working with me.
        </p>
      </div>
    </motion.div>
  );
}
