import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import Logo from "./Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        backgroundColor: isScrolled
          ? "var(--bg-elevated)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Logo />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="px-4 py-2 rounded-full transition-colors duration-300"
              style={{ color: "var(--text-tertiary)" }}
              whileHover={{
                backgroundColor: "var(--bg-accent)",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle, Language Selector & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-accent)",
              color: "var(--text-tertiary)",
            }}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </motion.button>

          {/* Language Toggle */}
          <motion.div
            className="flex items-center gap-2 px-3 py-2 rounded-full"
            style={{
              backgroundColor: "var(--bg-accent)",
              color: "var(--text-tertiary)",
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Globe size={16} />
            <motion.button
              className="px-2 py-1 rounded-full text-sm transition-all duration-300"
              style={{
                backgroundColor:
                  language === "en" ? "var(--interactive-primary)" : "transparent",
                color: language === "en" ? "var(--bg-primary)" : "var(--text-tertiary)",
              }}
              onClick={() => setLanguage("en")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EN
            </motion.button>
            <motion.button
              className="px-2 py-1 rounded-full text-sm transition-all duration-300"
              style={{
                backgroundColor:
                  language === "fr" ? "var(--interactive-primary)" : "transparent",
                color: language === "fr" ? "var(--bg-primary)" : "var(--text-tertiary)",
              }}
              onClick={() => setLanguage("fr")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FR
            </motion.button>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="px-6 py-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--interactive-primary)",
              color: "var(--bg-primary)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {t.nav.hireMe}
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: "var(--bg-accent)",
            color: "var(--text-tertiary)",
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6 p-6 rounded-3xl border shadow-xl"
          style={{
            backgroundColor: "var(--bg-elevated)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--border-light)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="px-4 py-3 rounded-xl transition-colors duration-300"
                style={{ color: "var(--text-tertiary)" }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{
                  backgroundColor: "var(--bg-accent)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Theme toggle in mobile menu */}
            <motion.button
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 mt-2"
              style={{
                backgroundColor: "var(--bg-accent)",
                color: "var(--text-tertiary)",
              }}
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "light" ? (
                <>
                  <Moon size={18} />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={18} />
                  <span>Light Mode</span>
                </>
              )}
            </motion.button>
            
            {/* Language selector in mobile menu */}
            <div className="flex gap-2 mt-2 mb-2">
              <motion.button
                className="flex-1 px-4 py-2 rounded-xl text-sm transition-all duration-300"
                style={{
                  backgroundColor:
                    language === "en" ? "var(--interactive-primary)" : "var(--bg-accent)",
                  color: language === "en" ? "var(--bg-primary)" : "var(--text-tertiary)",
                }}
                onClick={() => setLanguage("en")}
                whileTap={{ scale: 0.95 }}
              >
                English
              </motion.button>
              <motion.button
                className="flex-1 px-4 py-2 rounded-xl text-sm transition-all duration-300"
                style={{
                  backgroundColor:
                    language === "fr" ? "var(--interactive-primary)" : "var(--bg-accent)",
                  color: language === "fr" ? "var(--bg-primary)" : "var(--text-tertiary)",
                }}
                onClick={() => setLanguage("fr")}
                whileTap={{ scale: 0.95 }}
              >
                Français
              </motion.button>
            </div>

            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-xl text-center transition-all duration-300"
              style={{
                backgroundColor: "var(--interactive-primary)",
                color: "var(--bg-primary)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.nav.hireMe}
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
