import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const timelineIcons = [Briefcase, GraduationCap, Award, Briefcase, GraduationCap];

export default function Timeline() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4" style={{ color: 'var(--text-primary)' }}>{t.timeline.title}</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t.timeline.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line that draws on scroll */}
          <motion.div
            className="absolute left-8 top-0 w-0.5"
            style={{ background: 'var(--gradient-secondary)' }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-12">
            {t.timeline.events.map((event, index) => {
              const IconComponent = timelineIcons[index];
              return (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Icon circle with fill animation */}
                <motion.div
                  className="absolute left-0 w-16 h-16 rounded-full border-4 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    borderColor: 'var(--border-medium)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: 'var(--bg-accent)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.4 }}
                  />
                  <IconComponent
                    className="relative z-10"
                    style={{ color: 'var(--interactive-primary)' }}
                    size={28}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-elevated)', 
                    borderColor: 'var(--border-light)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  whileHover={{ 
                    x: 4,
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <motion.span
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: 'var(--bg-accent)', color: 'var(--text-secondary)' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {event.year}
                    </motion.span>
                  </div>

                  <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>{event.title}</h3>
                  <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>{event.organization}</p>
                  <p className="leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    {event.description}
                  </p>

                  {/* Progress line */}
                  <motion.div
                    className="h-1 rounded-full mt-4"
                    style={{ background: 'var(--gradient-secondary)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            className="relative pl-20 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: t.timeline.events.length * 0.15, duration: 0.6 }}
          >
            <motion.div
              className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ 
                background: 'var(--gradient-secondary)',
                boxShadow: 'var(--shadow-md)'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--bg-primary)' }} />
            </motion.div>
            <p className="italic" style={{ color: 'var(--text-muted)' }}>
              {t.timeline.continuing}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
