import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import CVModal from "./CVModal";
import photo from '../assets/profile.png';

export default function Hero() {
  const { t } = useLanguage();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 transition-colors duration-500" style={{ background: 'var(--gradient-primary)' }}>
      {/* Floating geometric shapes with parallax */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-30 transition-colors duration-500"
        style={{ backgroundColor: 'var(--bg-accent)' }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-96 h-96 rounded-full blur-3xl opacity-30 transition-colors duration-500"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full blur-2xl opacity-20 transition-colors duration-500"
        style={{ backgroundColor: 'var(--border-medium)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 backdrop-blur-sm rounded-full text-sm tracking-wide transition-colors duration-500" style={{ backgroundColor: 'var(--bg-accent)', color: 'var(--text-tertiary)' }}>
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            className="mb-4 transition-colors duration-500"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t.hero.title}<br />
            {t.hero.titleLine2}
          </motion.h1>

          <motion.p
            className="text-xl mb-8 max-w-xl transition-colors duration-500"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              onClick={() => setIsCVModalOpen(true)}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
              style={{ backgroundColor: 'var(--interactive-primary)', color: 'var(--bg-primary)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 transition-colors duration-500"
                style={{ backgroundColor: 'var(--interactive-hover)' }}
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2 justify-center">
                <Download size={18} />
                {t.hero.downloadCV}
              </span>
            </motion.button>

            <motion.button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-transparent rounded-full border-2 transition-all duration-300"
              style={{ color: 'var(--interactive-primary)', borderColor: 'var(--border-medium)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2 justify-center">
                <Mail size={18} />
                {t.hero.contactMe}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full blur-2xl transition-colors duration-500" style={{ background: 'var(--gradient-secondary)' }} />
            <ImageWithFallback
              src={photo}
              alt="Professional portrait"
              className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl transition-all duration-500"
              style={{ borderWidth: '8px', borderColor: 'var(--bg-primary)', boxShadow: 'var(--shadow-lg)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 transition-colors duration-500" style={{ borderColor: 'var(--border-dark)' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
            style={{ backgroundColor: 'var(--border-dark)' }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
