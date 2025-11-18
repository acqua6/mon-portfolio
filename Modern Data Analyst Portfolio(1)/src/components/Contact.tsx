import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-6" style={{ background: 'var(--gradient-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4" style={{ color: 'var(--text-primary)' }}>{t.contact.title}</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t.contact.form.name}
                </label>
                <motion.div
                  className="relative"
                  animate={{
                    scale: focusedField === "name" ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-elevated)', 
                      borderColor: focusedField === "name" ? 'var(--border-dark)' : 'var(--border-light)',
                      color: 'var(--text-primary)'
                    }}
                    required
                  />
                  {focusedField === "name" && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ background: 'var(--gradient-secondary)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t.contact.form.email}
                </label>
                <motion.div
                  className="relative"
                  animate={{
                    scale: focusedField === "email" ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-elevated)', 
                      borderColor: focusedField === "email" ? 'var(--border-dark)' : 'var(--border-light)',
                      color: 'var(--text-primary)'
                    }}
                    required
                  />
                  {focusedField === "email" && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ background: 'var(--gradient-secondary)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t.contact.form.message}
                </label>
                <motion.div
                  className="relative"
                  animate={{
                    scale: focusedField === "message" ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 resize-none"
                    style={{ 
                      backgroundColor: 'var(--bg-elevated)', 
                      borderColor: focusedField === "message" ? 'var(--border-dark)' : 'var(--border-light)',
                      color: 'var(--text-primary)'
                    }}
                    required
                  />
                  {focusedField === "message" && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ background: 'var(--gradient-secondary)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              <motion.button
                type="submit"
                className="group relative w-full px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
                style={{ backgroundColor: 'var(--interactive-primary)', color: 'var(--bg-primary)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Ripple effect container */}
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: 'var(--interactive-hover)' }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center gap-2 justify-center">
                  <Send size={18} />
                  {t.contact.form.send}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="mb-6" style={{ color: 'var(--text-primary)' }}>{t.contact.info.title}</h3>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-tertiary)' }}>
                {t.contact.info.description}
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:amoin.acquaye@epitech.eu"
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-light)' }}
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-accent)' }}>
                  <Mail style={{ color: 'var(--interactive-primary)' }} size={20} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{t.contact.info.email}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>amoin.acquaye@epitech.eu</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+22507999420​55"
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-light)' }}
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-accent)' }}>
                  <Phone style={{ color: 'var(--interactive-primary)' }} size={20} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{t.contact.info.phone}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>+225 07 999 420 55</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/amoin-marie-ange-estelle-acquaye-5540b6373"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-light)' }}
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-accent)' }}>
                  <Linkedin style={{ color: 'var(--interactive-primary)' }} size={20} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{t.contact.info.linkedin}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Amoin marie ange-estelle ACQUAYE</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/EpitechCodingAcademyPromo2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-light)' }}
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-accent)' }}>
                  <Github style={{ color: 'var(--interactive-primary)' }} size={20} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{t.contact.info.github}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Amoin ACQUAYE(acqua6)</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
