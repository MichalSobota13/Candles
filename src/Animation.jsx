export const containerAnim = {
  hidden: { x: 100 },
  show: {
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.4,
      when: "afterChildren",
    },
  },
};

export const pictureAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export const pageAnim = {
  hidden: { opacity: 0, y: 300 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};
