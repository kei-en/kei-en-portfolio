import { motion } from 'framer-motion';

export default function Layout({ children, background, text }) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.25,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.main
      style={{ backgroundColor: background, color: text }}
      className="min-h-screen pt-60 pb-40 w-full bg-primaryBg"
      variants={variants}
      inlist="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}
