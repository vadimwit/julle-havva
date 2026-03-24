import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { aboutContent } from '../../data/content';

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
    <section id="about" className="section-padding bg-cream-50">
      <div className="container-max" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gold-300/20 rounded-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sage-300/20 rounded-2xl z-0" />

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-200/60">
              <img
                src="/images/about/julle.jpg"
                alt="Julle Havva"
                className="w-full h-[520px] object-cover"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  if (!el.src.includes('IMG_5054')) {
                    el.src = '/images/hero/IMG_5054.PNG';
                  }
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 left-8 z-20 bg-white rounded-xl shadow-xl px-5 py-4 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                <span className="text-gold-500 text-lg">✦</span>
              </div>
              <div>
                <p className="text-stone-800 font-semibold text-sm">{t.badgeTitle}</p>
                <p className="text-stone-400 text-xs">{t.badgeSub}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium">
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
              <h3 className="text-stone-700 font-semibold text-sm uppercase tracking-wider mb-4">
                {t.certsHeading}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {content.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-stone-500 text-sm">
                    <HiCheckCircle className="text-gold-500 shrink-0 mt-0.5" size={16} />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-cream-200"
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
