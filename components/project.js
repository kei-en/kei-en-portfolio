import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { imageCoverAnimation, textAnimation } from '../animation';
import Title from './sections/Title';
import useAnimateIn from '../hooks/useAnimateIn';

const delayedWordAnimation = {
  hidden: {
    opacity: 0,
    y: `0.75em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      delay: 1,
      duration: 1.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function Project({ currentProject }) {
  //Image Animation
  const { ref: imageRef, ctrls: imageCtrls } = useAnimateIn({
    delay: 0.35,
    threshold: 0.5,
  });

  // text animation
  const { ref: textRef, ctrls: textCtrls } = useAnimateIn({});

  return (
    <div className="flex lg:flex-row lg:align-middle flex-col">
      <div className="text-center flex-1 relative z-10 h-fit overflow-hidden">
        <Image
          src={currentProject.cover}
          alt="cover image of the project"
          sizes="100vw"
          width={16}
          height={10}
        />
        <motion.span
          ref={imageRef}
          initial="hidden"
          animate={imageCtrls}
          variants={imageCoverAnimation}
          className="absolute top-0 left-0 bottom-0 right-0 bg-honey"
        ></motion.span>
      </div>
      <div className={'p-2 flex-1 z-20 relative'}>
        <Title
          title={currentProject.name}
          className="uppercase text-4xl py-2 font-monoton lg:-ml-14 lg:mt-0 -mt-10 absolute lg:top-6"
          delayed={delayedWordAnimation}
        />
        <motion.p
          className="pt-10 lg:mt-12"
          ref={textRef}
          initial="hidden"
          animate={textCtrls}
          variants={textAnimation}
        >
          {currentProject.description}
        </motion.p>
      </div>
    </div>
  );
}
