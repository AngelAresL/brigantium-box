import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationProps {
  children: React.ReactNode;
  initial: any;
  animate: any;
  transition: any;
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  initial,
  animate,
  transition,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{...transition,delay}}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
