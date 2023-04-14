import { motion } from 'framer-motion';

export default function AnimatedContainer({ children }) {
  const slideLeft = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <>
      <motion.div
        variants={slideLeft}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
