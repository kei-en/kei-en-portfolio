import { motion } from 'framer-motion';

export default function Intro({ inView }) {
  return (
    <motion.div
      layout
      style={
        inView ? { opacity: 0 } : { position: 'sticky', top: 0, zIndex: 1 }
      }
      className={
        'h-screen w-full bg-black flex flex-col justify-between align-middle'
      }
    >
      <div className="overflow-hidden pt-16">
        <motion.h1
          initial={{ y: -200 }}
          animate={{
            y: 0,
            transition: {
              duration: 0.75,
              ease: 'easeOut',
            },
          }}
          className={'font-monoton text-5xl md:text-6xl text-center mb-4'}
        >
          Karanja
        </motion.h1>
        <motion.h1
          className="font-monoton text-center font-bold text-5xl md:text-6xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ease: 'easeOut',
              duration: 1.75,
            },
          }}
        >
          J.
        </motion.h1>
        <motion.h1
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: {
              duration: 0.75,
              ease: 'easeOut',
            },
          }}
          className={'font-monoton text-5xl md:text-6xl text-center'}
        >
          Njuguna
        </motion.h1>
      </div>
      <div className="overflow-hidden mt-20">
        <motion.h2
          initial={{ y: -100 }}
          animate={{
            y: 0,
            transition: {
              duration: 0.75,
              ease: 'easeOut',
              delay: 0.75,
            },
          }}
          className={
            'font-la_belle_aurore font-semibold text-3xl ml-12 md:ml-[calc(100vw-70%)] lg:ml-[calc(100vw-60%)]'
          }
        >
          I'm Karanja
        </motion.h2>
        <motion.h3
          className="font-space_mono text-base w-3/4 md:w-1/2 lg:w-1/4 ml-12 md:ml-[calc(100vw-70%)] lg:ml-[calc(100vw-60%)]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ease: 'easeOut',
              duration: 0.75,
              delay: 1.5,
            },
          }}
        >
          a software developer and designer with a passion for creating slick
          digital experiences.
        </motion.h3>
      </div>
      <motion.div
        className="font-space_mono text-lg mx-auto text-center"
        initial={{ y: -15 }}
        animate={{
          y: 15,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
          },
        }}
      >
        &#8595;
        <br />
        <motion.span
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 2,
            },
          }}
          className="uppercase text-sm"
        >
          scroll
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
