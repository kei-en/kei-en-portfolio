import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';

import useMediaQuery from '../../hooks/useMediaQuery';

export default function Title({ title, className, delayed }) {
  //Trigger when in view
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start('visible');
    }
    if (!inView) {
      ctrls.start('hidden');
    }
  }, [ctrls, inView]);

  // Animation
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)');

  // Parallax
  const yOffset = isSmall ? [`40px`, `-40px`] : [`80px`, `-80px`];

  return (
    <Parallax y={yOffset} className="col-span-full md:col-[4/21]">
      <h1
        aria-label={title}
        role="heading"
        className={className || 'font-monoton text-3xl p-4 text-center py-6'}
      >
        {title.split(' ').map((word, index) => {
          return (
            <motion.span
              ref={ref}
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
              className="inline-block mr-[0.25em] whitespace-nowrap"
            >
              {word.split('').map((character, index) => {
                return (
                  <motion.span
                    aria-hidden="true"
                    key={index}
                    variants={delayed || characterAnimation}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </h1>
    </Parallax>
  );
}
