import React from 'react';
import { motion } from 'framer-motion';

import Title from './sections/Title';
import useAnimateIn from '../hooks/useAnimateIn';
import Typewriter from 'typewriter-effect';

export default function About({ inView }) {
  const textHdr = 'Who?';

  // Copy animation
  const {
    ref: textRef,
    ctrls: textCtrls,
    vars: textVars,
  } = useAnimateIn({
    delay: 0.25,
    threshold: 0.5,
  });

  return (
    <div
      layout="true"
      style={
        inView ? { opacity: 1 } : { position: 'sticky', top: '6%', zIndex: 2 }
      }
      className={
        ' h-[calc(100vh-4rem)] bg-grey w-[94%] m-auto mb-20 p-2 rounded-lg flex flex-col text-center overflow-hidden'
      }
    >
      <Title title={textHdr} />
      <div className="h-full lg:pt-5 pb-10">
        <span className="text-xl">Hey, I'm</span>
        <Typewriter
          className="my-4"
          options={{
            strings: [
              '<a href="https://linkedin.com/in/kei-en" style="color: #efcb48;" target="_blank">@kei-en(linkedin)</a>',
              '<a href="https://github.com/kei-en" style="color: #efcb48;" target="_blank">@kei-en(github)</a>',
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <motion.p
          className="lg:ml-auto lg:mr-auto lg:w-1/2 text-center md:text-lg text-sm leading-6"
          ref={textRef}
          initial="hidden"
          animate={textCtrls}
          variants={textVars}
        >
          A web developer and designer - here's a bit more about my background.
          I'm available for web projects and based in Nairobi, Kenya.
          <br />I am skilled in developing user interfaces for web apps that are
          easy to use and visually appealing while being optimised for both
          desktop and mobile devices. I appreciate working with cross-functional
          teams to produce high-quality products that go above and beyond
          customer expectations. I am always looking to take on new challenges
          and continue learning in order to stay up-to-date on the latest trends
          and technologies in the field. Feel free to get in touch at the bottom
          of this page if you're interested in working with me.
        </motion.p>
      </div>
    </div>
  );
}
