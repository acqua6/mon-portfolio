import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon part - stylized AA initials */}
      <motion.div 
        className="relative w-10 h-10"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {/* Background circle with gradient */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "var(--gradient-secondary)",
          }}
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Inner circle */}
        <div
          className="absolute inset-1 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "var(--bg-primary)",
            border: "2px solid var(--border-medium)",
          }}
        >
          {/* AA monogram */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* First A */}
              <motion.path
                d="M8 30 L15 10 L22 30"
                stroke="var(--text-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <motion.line
                x1="11"
                y1="23"
                x2="19"
                y2="23"
                stroke="var(--text-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              
              {/* Second A (overlapping) */}
              <motion.path
                d="M18 30 L25 10 L32 30"
                stroke="var(--text-accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
              />
              <motion.line
                x1="21"
                y1="23"
                x2="29"
                y2="23"
                stroke="var(--text-accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Animated ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 pointer-events-none"
          style={{
            borderColor: "var(--interactive-primary)",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.3, opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Text part */}
      <div className="flex flex-col leading-none">
        <motion.div
          className="flex items-baseline gap-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span
            className="tracking-wider"
            style={{
              color: "var(--text-primary)",
              fontSize: "1.125rem",
              fontWeight: "600",
            }}
          >
            Amoin
          </span>
          <motion.span
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            •
          </motion.span>
          <span
            className="tracking-wider"
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.125rem",
              fontWeight: "600",
            }}
          >
            ACQUAYE
          </span>
        </motion.div>
        
        <motion.div
          className="text-xs tracking-widest mt-0.5"
          style={{
            color: "var(--text-muted)",
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          DATA ANALYST
        </motion.div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none blur-xl"
        style={{
          background: "var(--gradient-secondary)",
          opacity: 0,
        }}
        whileHover={{
          opacity: 0.3,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
