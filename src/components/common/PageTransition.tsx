import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  useEffect(() => {
    if (window.lenis) {
      window.lenis.stop();
      window.lenis.scrollTo(0, { immediate: true, force: true });
      window.lenis.start();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}
