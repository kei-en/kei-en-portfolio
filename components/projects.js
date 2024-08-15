import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { projectQuery } from '../data';

import Title from './sections/Title';
import { CardBody, CardContainer, CardItem } from './sections/3dCard';
import { useRouter } from 'next/router';

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

function Projects({
  inView,
  offset = CARD_OFFSET,
  scaleFactor = SCALE_FACTOR,
}) {
  const router = useRouter();

  const [cards, setCards] = useState(projectQuery || []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const textHdr = 'Projects';

  const flipCard = (direction) => {
    if (!cards.length) return; // Error handling for empty array

    if (direction === 'next') {
      setCurrentIndex((currentIndex + 1) % cards.length);
    } else if (direction === 'prev') {
      setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
    }
  };

  return (
    <div
      layout="true"
      style={
        inView ? { opacity: 1 } : { position: 'sticky', top: '10%', zIndex: 3 }
      }
      className={
        'relative h-[calc(100vh-7rem)] overflow-hidden bg-white dark:bg-white text-black w-[90%] m-auto mb-20 p-2 rounded-lg aspect-video'
      }
    >
      <Title title={textHdr} />
      <motion.div
        className="absolute dark:bg-zinc-900 bg-zinc-800 h-60 w-60 md:h-60 md:w-96 rounded-2xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between mx-auto mt-24 md:mt-28 left-0 right-0 hover:cursor-pointer"
        style={{
          transformOrigin: 'top center',
        }}
        animate={{
          top: currentIndex * -offset,
          scale: 1 - currentIndex * scaleFactor,
          zIndex: cards.length - currentIndex,
        }}
        onClick={() => router.push(`/projects/${cards[currentIndex].project}`)}
      >
        <SingleProject currentProject={cards[currentIndex]} />
      </motion.div>
      <div className="flex justify-between items-center absolute top-28 md:top-1/2 right-0 left-0 mx-auto w-full lg:md-1/2 z-50">
        <button
          className="px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-50 dark:text-black text-black hover:bg-honey hover:underline text-sm font-bold"
          onClick={() => flipCard('prev')}
          aria-label="Previous project"
        >
          ← Back
        </button>
        <button
          className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-100 dark:text-black text-black hover:bg-honey hover:underline text-sm font-bold"
          onClick={() => flipCard('next')}
          aria-label="Next project"
        >
          Forth →
        </button>
      </div>
    </div>
  );
}

export function SingleProject({ currentProject }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-zinc-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {currentProject.data.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 text-xs md:text-sm max-w-sm mt-2 dark:text-neutral-300 "
        >
          {currentProject.data.intro}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={-5}
          className="w-full mt-4"
        >
          <Image
            src={currentProject.data.meta_image}
            height="768"
            width="1080"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={currentProject.data.name}
            priority
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default Projects;
