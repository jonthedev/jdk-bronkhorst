import { motion, AnimatePresence } from "framer-motion";

interface TransitionProps {
  isTransitioning: boolean;
}

export function Transition({ isTransitioning }: TransitionProps) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 bg-black z-30 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}
