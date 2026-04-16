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
      {/* Ornamental divider — ✦ flanked lines */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className={`block h-px w-10 ${light ? 'bg-gold-400/50' : 'bg-gold-500/50'}`} />
        <span
          className={`text-[9px] tracking-[0.4em] ${light ? 'text-gold-300' : 'text-gold-400'}`}
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className={`font-ritual italic text-[11px] tracking-[0.25em] font-light ${
            light ? 'text-gold-300' : 'text-gold-500'
          }`}
        >
          Julle Havva
        </span>
        <span
          className={`text-[9px] tracking-[0.4em] ${light ? 'text-gold-300' : 'text-gold-400'}`}
          aria-hidden="true"
        >
          ✦
        </span>
        <span className={`block h-px w-10 ${light ? 'bg-gold-400/50' : 'bg-gold-500/50'}`} />
      </div>

      {/* Main heading */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          light ? 'text-stone-800' : 'text-stone-800'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle rendered in Cormorant Garamond italic for ethereal feel */}
      {subtitle && (
        <p
          className={`mt-4 sm:mt-5 font-ritual italic text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-stone-300' : 'text-stone-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
