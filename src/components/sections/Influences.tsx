import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  en: {
    label: 'Our Influences',
    heading: 'Rooted in Ancient Wisdom',
    influences: [
      {
        id: 'iyengar',
        name: 'B.K.S. Iyengar',
        tradition: 'Iyengar Yoga',
        detail:
          'Kusum Modak was a disciple of B.K.S. Iyengar — one of the world\'s most respected Yoga masters — and spent 20 years studying the science of postures, breath and body at his institute.',
        number: '01',
      },
      {
        id: 'limaye',
        name: 'Limaye',
        tradition: 'Ayurvedic Massage',
        detail:
          'In the late 1980s Kusum Modak met Indian master Limaye, a renowned propagator of traditional Ayurvedic massage. His wisdom awakened her to the paths of body therapy and compassionate care.',
        number: '02',
      },
    ],
    pillars: ['Ayurveda', 'Iyengar Yoga', 'Conscious Breathing', 'Deep Touch', 'Foot Work', 'Prana Flow'],
  },
  pt: {
    label: 'As Nossas Influências',
    heading: 'Enraizadas na Sabedoria Ancestral',
    influences: [
      {
        id: 'iyengar',
        name: 'B.K.S. Iyengar',
        tradition: 'Yoga Iyengar',
        detail:
          'Kusum Modak foi discípula de B.K.S. Iyengar — um dos mestres de Yoga mais respeitados do mundo — e passou 20 anos a estudar a ciência das posturas, respiração e corpo no seu instituto.',
        number: '01',
      },
      {
        id: 'limaye',
        name: 'Limaye',
        tradition: 'Massagem Ayurvédica',
        detail:
          'No final da década de 1980, Kusum Modak conheceu o mestre indiano Limaye, notável propagador da massagem ayurvédica tradicional. A sua sabedoria despertou-a para os caminhos da terapia corporal e do cuidado compassivo.',
        number: '02',
      },
    ],
    pillars: ['Ayurveda', 'Yoga Iyengar', 'Respiração Consciente', 'Toque Profundo', 'Uso dos Pés', 'Fluxo de Prana'],
  },
};

export default function Influences() {
  const { lang } = useLanguage();
  const t = content[lang];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-stone-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-10 bg-gold-500/60" />
            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium">{t.label}</span>
            <span className="h-px w-10 bg-gold-500/60" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">{t.heading}</h2>
        </motion.div>

        {/* Two influence cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {t.influences.map((inf, i) => (
            <motion.div
              key={inf.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="relative bg-stone-800/60 border border-stone-700/50 rounded-2xl p-8 overflow-hidden group hover:border-gold-500/40 transition-colors duration-300"
            >
              {/* Large faded number */}
              <span
                className="absolute top-4 right-6 font-serif text-8xl font-bold text-stone-700/40 leading-none select-none group-hover:text-gold-500/10 transition-colors duration-300"
                aria-hidden="true"
              >
                {inf.number}
              </span>

              {/* Gold accent line */}
              <div className="w-10 h-0.5 bg-gold-500 mb-5" />

              <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-1">
                {inf.tradition}
              </p>
              <h3 className="font-serif text-2xl font-semibold text-white mb-4">{inf.name}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{inf.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Pillars strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {t.pillars.map((pillar, i) => (
            <span
              key={pillar}
              className="px-4 py-2 rounded-full border border-stone-700 text-stone-400 text-xs font-medium tracking-wide hover:border-gold-500/50 hover:text-gold-400 transition-colors duration-200"
            >
              {i > 0 && <span className="mr-3 text-stone-700" aria-hidden="true">·</span>}
              {pillar}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
