import { motion } from "motion/react";
import { ExternalLink, Database, Brain, Workflow, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

const projectImages = [
  "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM0MDcyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydCUyMGdyYXBofGVufDF8fHx8MTc2MzQ3NTE1MXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2MzQ3NTE1MXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc2MzQ3NTE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1706894037802-42fdc083c72b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMHJlcG9ydHxlbnwxfHx8fDE3NjM0NTY5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydCUyMGdyYXBofGVufDF8fHx8MTc2MzQ3NTE1MXww&ixlib=rb-4.1.0&q=80&w=1080",
];

const categoryIcons = {
  dataAnalysis: Database,
  machineLearning: Brain,
  dataEngineering: Workflow,
};

export default function Projects() {
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
          <h2 className="mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{t.projects.title}</h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-20">
          {Object.entries(t.projects.categories).map(([categoryKey, category], categoryIndex) => {
            const CategoryIcon = categoryIcons[categoryKey as keyof typeof categoryIcons];
            let imageStartIndex = categoryIndex * 2;
            
            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500"
                    style={{ backgroundColor: 'var(--bg-accent)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <CategoryIcon
                      size={28}
                      strokeWidth={2}
                      className="transition-colors duration-500"
                      style={{ color: 'var(--interactive-primary)' }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                    <p className="transition-colors duration-500" style={{ color: 'var(--text-tertiary)' }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Projects grid for this category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="group relative rounded-3xl overflow-hidden transition-all duration-500"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                    >
                      {/* Image container */}
                      <div className="relative h-64 overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ImageWithFallback
                            src={projectImages[imageStartIndex + index]}
                            alt={project.title}
                            className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-90"
                          />
                        </motion.div>
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category badge */}
                        <motion.div
                          className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <span className="text-white text-sm">{category.title}</span>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Title */}
                        <h3 className="transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-tertiary)' }}>
                          {project.description}
                        </p>

                        {/* Role */}
                        <motion.div 
                          className="flex items-start gap-3 p-3 rounded-2xl transition-colors duration-500"
                          style={{ backgroundColor: 'var(--bg-accent)' }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <motion.div
                            className="mt-0.5"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <User 
                              size={18} 
                              className="transition-colors duration-500" 
                              style={{ color: 'var(--interactive-primary)' }} 
                            />
                          </motion.div>
                          <p className="text-sm leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                            {project.role}
                          </p>
                        </motion.div>

                        {/* Technologies */}
                        <div>
                          <p className="text-sm mb-2 transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                            Technologies:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                className="px-3 py-1.5 rounded-full text-sm transition-all duration-300"
                                style={{ 
                                  backgroundColor: 'var(--bg-tertiary)', 
                                  color: 'var(--text-secondary)',
                                  border: '1px solid var(--border-light)'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: tagIndex * 0.05 }}
                                whileHover={{ 
                                  scale: 1.05, 
                                  backgroundColor: 'var(--interactive-primary)',
                                  color: 'var(--bg-primary)',
                                  borderColor: 'var(--interactive-primary)'
                                }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* View button */}
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 mt-4"
                          style={{ 
                            backgroundColor: 'var(--interactive-primary)',
                            color: 'var(--bg-primary)'
                          }}
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'var(--interactive-hover)'
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{t.projects.viewProject}</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <ExternalLink size={18} />
                          </motion.div>
                        </motion.button>
                      </div>

                      {/* Hover border effect */}
                      <motion.div
                        className="absolute inset-0 border-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ borderColor: 'var(--interactive-primary)' }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
