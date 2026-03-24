import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Decorative line above */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className={`block h-px w-12 ${light ? 'bg-gold-300' : 'bg-gold-500'}`} />
        <span className={`text-xs tracking-[0.25em] uppercase font-medium ${light ? 'text-gold-300' : 'text-gold-500'}`}>
          Julle Havva
        </span>
        <span className={`block h-px w-12 ${light ? 'bg-gold-300' : 'bg-gold-500'}`} />
      </div>

      {/* Main heading */}
      <h2
        className={`font-serif text-4xl md:text-5xl font-semibold leading-tight ${
          light ? 'text-cream-50' : 'text-stone-800'
        }`}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-stone-300' : 'text-stone-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
