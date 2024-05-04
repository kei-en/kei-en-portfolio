import { motion } from 'framer-motion';

import useAnimateIn from '../hooks/useAnimateIn';

import SiteGrid from './SiteGrid';
import HeroProjectTitle from './HeroProjectTitle';

export default function HeroProject({ data }) {
  // Intro animation
  const {
    ref: introRef,
    ctrls: introCtrls,
    vars: introVars,
  } = useAnimateIn({
    delay: 0.75,
    threshold: 0.5,
  });

  // Tags animation
  const {
    ref: tagsRef,
    ctrls: tagsCtrls,
    vars: tagsVars,
  } = useAnimateIn({
    delay: 0.5,
    threshold: 0.5,
  });

  return (
    <section className="mb-40">
      <SiteGrid>
        <HeroProjectTitle title={data.name} />
        <div className="flex flex-row-reverse col-span-full max-w-2xl md:col-[6/-1] lg:col-[10/-1]">
          <motion.p
            className="leading-relaxed"
            ref={introRef}
            initial="hidden"
            animate={introCtrls}
            variants={introVars}
          >
            {data.intro}
          </motion.p>
          <motion.div
            className="flex flex-col text-[0.5rem] mr-4 w-4 md:text-xs md:mr-7 md:w-5"
            ref={tagsRef}
            initial="hidden"
            animate={tagsCtrls}
            variants={tagsVars}
          >
            {data.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={`leading-none mb-2 py-2 px-1 uppercase [writing-mode:vertical-rl] w-4 md:w-5 font-bold`}
                  style={{
                    backgroundColor: data.custom_theme.text.hex,
                    opacity: 0.8,
                    color: data.custom_theme.background.hex,
                  }}
                >
                  {tag.name}
                </div>
              );
            })}
          </motion.div>
        </div>
      </SiteGrid>
    </section>
  );
}
