export const imageAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
      delay: 0.65,
    },
  },
};

/* header animation */
export const characterAnimation = {
  hidden: {
    opacity: 0,
    y: `0.75em`,
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

export const textAnimation = {
  hidden: {
    opacity: 0,
    y: '0.1em',
  },
  visible: {
    opacity: 1,
    y: '0em',
    transition: {
      duration: 1.25,
      delay: 1.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const wordAnimation = {
  hidden: {},
  visible: {},
};

/* Projects images */
export const imageCoverAnimation = {
  hidden: {
    x: 0,
    color: '#efcb48',
  },
  visible: {
    x: 1000,
    transition: {
      delay: 0.25,
      duration: 0.75,
    },
  },
};

export const buttonAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 1.75,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
