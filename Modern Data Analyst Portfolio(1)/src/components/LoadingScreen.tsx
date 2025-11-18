import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ background: "var(--gradient-primary)" }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Logo/Name */}
        <motion.div
          className="relative mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Floating circles background */}
          <motion.div
            className="absolute -top-8 -left-8 w-24 h-24 rounded-full blur-2xl opacity-40"
            style={{ backgroundColor: "var(--bg-accent)" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40"
            style={{ backgroundColor: "var(--bg-tertiary)" }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Name with letter animation */}
          <div className="relative text-6xl md:text-8xl tracking-tight" style={{ color: "var(--text-primary)" }}>
            {"AMOIN ACQUAYE".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Cute animated loader */}
        <div className="flex gap-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--interactive-primary)" }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-96 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border-light)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--gradient-secondary)" }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress percentage */}
        <motion.p
          className="mt-4 text-lg"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-3 h-3 rounded-full"
          style={{ backgroundColor: "var(--interactive-primary)" }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--interactive-primary)" }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
