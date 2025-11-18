import { motion } from "motion/react";
import { Linkedin, Github, Mail, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/yourprofile",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:amoin.acquaye@epitech.eu",
    label: "Email",
  },
];

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-16 px-6 border-t" style={{ background: 'var(--gradient-primary)', borderColor: 'var(--border-light)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Social links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border rounded-full transition-colors duration-300"
              style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                borderColor: 'var(--border-light)',
                color: 'var(--text-tertiary)'
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
              }}
              transition={{
                duration: 0.5,
              }}
              aria-label={social.label}
            >
              <social.icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="flex items-center justify-center gap-2" style={{ color: 'var(--text-tertiary)' }}>
            {t.footer.madeWith}{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={16} style={{ color: 'var(--text-accent)' }} fill="var(--text-accent)" />
            </motion.span>{" "}
            {t.footer.forData}
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </motion.div>

        {/* Decorative gradient line */}
        <motion.div
          className="mt-8 h-1 max-w-xs mx-auto rounded-full"
          style={{ background: 'var(--gradient-secondary)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </div>
    </footer>
  );
}
