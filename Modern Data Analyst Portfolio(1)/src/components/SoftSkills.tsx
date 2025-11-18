import { motion } from "motion/react";
import {
  Lightbulb,
  MessageSquare,
  Users,
  Zap,
  Target,
  Clock,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const softSkillIcons = [Lightbulb, MessageSquare, Users, Zap, Target, Clock];

export default function SoftSkills() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6 transition-colors duration-500" style={{ background: 'var(--gradient-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{t.softSkills.title}</h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
            {t.softSkills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.softSkills.items.map((skill, index) => {
            const IconComponent = softSkillIcons[index];
            return (
            <motion.div
              key={index}
              className="group relative backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500"
              style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                borderColor: 'var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  background: 'radial-gradient(circle at center, var(--interactive-primary), transparent)',
                }}
              />

              {/* Icon with pulse animation */}
              <motion.div
                className="w-14 h-14 mb-6 rounded-2xl flex items-center justify-center transition-colors duration-500"
                style={{ backgroundColor: 'var(--bg-accent)' }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <IconComponent
                  size={28}
                  strokeWidth={2}
                  className="transition-colors duration-500"
                  style={{ color: 'var(--interactive-primary)' }}
                />
              </motion.div>

              <h3 className="mb-3 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{skill.title}</h3>
              <p className="leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                {skill.description}
              </p>

              {/* Progress indicator */}
              <motion.div
                className="flex gap-1 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {[...Array(4)].map((_, dotIndex) => (
                  <motion.div
                    key={dotIndex}
                    className="h-1 rounded-full transition-colors duration-500"
                    style={{ 
                      width: '1.5rem',
                      backgroundColor: 'var(--interactive-primary)',
                      opacity: 0.3 + (dotIndex * 0.15)
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.5 + dotIndex * 0.1,
                      duration: 0.4 
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
