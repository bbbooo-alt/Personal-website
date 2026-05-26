import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  scale: 1.02,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

export const tapScale = {
  scale: 0.98,
};

export const cardHover = {
  y: -6,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};
