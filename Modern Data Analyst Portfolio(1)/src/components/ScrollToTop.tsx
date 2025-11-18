import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "var(--interactive-primary)",
            color: "var(--bg-primary)",
            boxShadow: "var(--shadow-md)",
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "var(--interactive-hover)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={20} strokeWidth={2} />
        </motion.button>
      )}
    </>
  );
}
