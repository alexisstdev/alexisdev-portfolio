import { motion } from 'framer-motion';

export default function AnimatedContainer({ children }) {
  const slide = {
    initial: { opacity: 0, y: 150 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 150 },
  };
  return (
    <>
      <motion.div
        variants={slide}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
