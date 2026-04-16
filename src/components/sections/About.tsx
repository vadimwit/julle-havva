import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { aboutContent } from '../../data/content';
import { asset } from '../../utils/asset';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const content = aboutContent[lang];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-cream-50 ritual-glow">
      <div className="container-max" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Organic blob decorators — dry leaf, brown, wine */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-900/25 rounded-full z-0 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-red-900/20 rounded-full z-0 blur-2xl" />
            <div className="absolute top-1/2 -right-4 w-24 h-24 bg-yellow-900/20 rounded-full z-0 blur-xl" />

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-rose-200/40">
              <img
                src={asset('/images/about/julle.jpeg')}
                alt="Julle Havva"
                className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  if (!el.src.includes('IMG_5054')) {
                    el.src = asset('/images/hero/IMG_5054.PNG');
                  }
                }}
              />
            </div>

          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-mauve-400/60" />
              <span className="text-mauve-500 text-xs tracking-[0.25em] uppercase font-medium">
                {content.subheading}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-semibold text-stone-800 leading-tight mb-6"
            >
              {content.heading}
            </motion.h2>

            {content.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-stone-500 leading-relaxed mb-4 text-base"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Certifications */}
            <motion.div variants={fadeUp} className="mt-6">
              <h3 className="text-stone-600 font-semibold text-xs uppercase tracking-wider mb-4 font-sans">
                {t.certsHeading}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {content.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5 text-stone-500 text-sm">
                    <span className="text-mauve-400 shrink-0 mt-0.5 text-xs leading-5">✦</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-blush-200/60"
            >
              {content.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-serif text-3xl font-bold text-gold-500">{stat.value}</span>
                  <span className="block text-xs text-stone-400 mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
