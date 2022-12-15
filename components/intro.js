import Image from 'next/image';
import React from 'react';
import { TiArrowDownThick } from 'react-icons/ti';
import { motion } from 'framer-motion';
import { imageAnim, fade } from '../animation';

export default function Intro({ ref, inView }) {
  
  return (
    
        <motion.div 
          ref={ref}
          layout
          style={inView ? {opacity: 1} : {position: "sticky", top: 0, zIndex: 1}}
          className={"h-screen w-full bg-black flex flex-col justify-around align-middle"}
        >
          <div className='overflow-hidden  pt-16'>
              <motion.h1
                initial={{y: -200}}
                animate={{
                  y: 0,
                  transition: {duration: 0.75, ease: 'easeOut'}
                }}
                className={'font-monoton text-5xl text-center mb-4'}>
                  Njuguna
              </motion.h1>
              <motion.h1 
                initial={{y: 200}}
                animate={{
                  y: 0,
                  transition: {duration: 0.75, ease: 'easeOut'}
                }}
                className={'font-monoton text-5xl text-center'}>
                  Karanja
              </motion.h1>
          </div>
          <motion.div variants={imageAnim} initial='hidden' animate='show' className={"text-center"}>
            <Image 
              className={"rounded-full"} 
              src='/joe1.jpg' 
              alt='Image: Kei En' 
              width={250} height={250} />
          </motion.div>
          <motion.h3 variants={fade} initial='hidden' animate='show' className={"text-center text-2xl"}>web developer & designer</motion.h3>
          <div className={"flex justify-center overflow-hidden"}>
            <motion.button initial={{y: -100}} animate={{y: 0, transition:{type: 'spring', bounce: 0.5, delay: 0.75}}}>
              <TiArrowDownThick size={42}/> 
            </motion.button>
            <h2 className={"text-gray-400 text-sm"}>more about me</h2>
          </div>
        </motion.div>
      
  )
}
