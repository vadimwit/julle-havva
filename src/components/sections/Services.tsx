import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiFeather } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { services } from '../../data/content';
import { asset } from '../../utils/asset';
import SectionTitle from '../ui/SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Decorative elements that hint at the method's character
const pillars = {
  en: ['Ayurvedic Principles', 'Assisted Yoga', 'Conscious Breathing', 'Deep Continuous Touch', 'Foot Work'],
  pt: ['Princípios Ayurvédicos', 'Yoga Assistido', 'Respiração Consciente', 'Toque Profundo e Contínuo', 'Uso dos Pés'],
};

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;
  const service = services[0]; // Kusum Mudak Method — the only service
  const s = service[lang];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Split description into paragraphs on \n\n
  const paragraphs = s.description.split('\n\n');

  return (
    <section id="services" className="section-padding bg-cream-100">
      <div className="container-max" ref={ref}>
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: visual card */}
          <motion.div variants={fadeUp} className="relative">
            {/* Decorative background */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gold-300/20 rounded-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-300/20 rounded-2xl z-0" />

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-200/50">
              {/* Try service image, fall back to gradient */}
              <img
                src={asset(`/images/services/${service.id}.jpg`)}
                alt={s.name}
                className="w-full h-[480px] object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              {/* Gradient always rendered behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-stone-200 -z-10" />

              {/* Centred icon overlay (visible when no image) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center text-gold-500">
                  <FiFeather size={40} />
                </div>
              </div>

              {/* Duration badge */}
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-stone-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
                {service.duration}
              </span>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

            {/* Label + name */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium">
                {s.subtitle}
              </span>
            </motion.div>

            <motion.h3
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-semibold text-stone-800 leading-tight mb-6"
            >
              {s.name}
            </motion.h3>

            {/* Description paragraphs */}
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-stone-500 leading-relaxed text-base mb-4"
              >
                {para}
              </motion.p>
            ))}

            {/* Method pillars */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6 mb-8">
              {pillars[lang].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white border border-gold-200 text-stone-600 text-xs font-medium rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="btn-primary inline-block cursor-pointer"
              >
                {t.bookLink}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
