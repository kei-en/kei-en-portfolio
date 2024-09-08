import { motion } from 'framer-motion';

import useAnimateIn from '../../hooks/useAnimateIn';

export default function Footer() {
  const {
    ref: linkRef,
    ctrls: linkCtrls,
    vars: linkVars,
  } = useAnimateIn({
    delay: 1,
  });

  return (
    <div className="p-2 lg:w-3/4 lg:ml-auto lg:mr-auto text-stone-300 dark:text-stone-300">
      <ul className="w-full inline-flex justify-around">
        <motion.li
          ref={linkRef}
          initial="hidden"
          animate={linkCtrls}
          variants={linkVars}
          className="uppercase underline underline-offset-2 hover:overline"
        >
          <a
            href="https://drive.google.com/file/d/1Wpx9qGTjKvq3FoB7DJd4Ls3-TDzkDCjn/view?usp=sharing"
            target="_blank"
          >
            Resume/CV
          </a>
        </motion.li>
        <motion.li
          ref={linkRef}
          initial="hidden"
          animate={linkCtrls}
          variants={linkVars}
          className="uppercase underline underline-offset-2 hover:overline"
        >
          <a href="https://github.com/kei-en" target="_blank">
            Github
          </a>
        </motion.li>
        <motion.li
          ref={linkRef}
          initial="hidden"
          animate={linkCtrls}
          variants={linkVars}
          className="uppercase underline underline-offset-2 hover:overline"
        >
          <a href="https://linkedin.com/in/kei-en" target="_blank">
            Linkedin
          </a>
        </motion.li>
      </ul>
    </div>
  );
}
