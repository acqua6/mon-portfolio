import { motion } from "motion/react";
import {
  Code2,
  Database,
  BarChart3,
  Brain,
  LineChart,
  TrendingUp,
  FileCode,
  Boxes,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const skillIcons = [Code2, Database, BarChart3, Brain, LineChart, TrendingUp, FileCode, Boxes];

export default function Skills() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6 transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{t.skills.title}</h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.skills.items.map((skill, index) => {
            const IconComponent = skillIcons[index];
            return (
            <motion.div
              key={index}
              className="group relative backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-2"
              style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                borderColor: 'var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Hover gradient background */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ 
                  background: 'var(--gradient-primary)', 
                  zIndex: -1,
                  boxShadow: 'var(--shadow-md)'
                }}
              />

              {/* Icon with stroke draw effect */}
              <motion.div
                className="w-14 h-14 mb-6 transition-colors duration-500"
                style={{ color: 'var(--text-muted)' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent
                  size={56}
                  strokeWidth={1.5}
                  className="transition-all duration-500"
                />
              </motion.div>

              <h3 className="mb-3 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{skill.title}</h3>
              <p className="leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                {skill.description}
              </p>

              {/* Subtle underline animation */}
              <motion.div
                className="h-0.5 mt-6 transition-colors duration-500"
                style={{ backgroundColor: 'var(--border-dark)' }}
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              />
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
