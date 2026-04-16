import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  en: {
    label: 'Beyond the Treatment Room',
    heading: 'Available for Gatherings & Events',
    subheading: 'Bringing the practice to you ⁓wherever presence is welcome.',
    items: [
      {
        icon: '🌿',
        title: 'Retreats',
        desc: 'Integrated bodywork sessions woven into wellness and yoga retreats, offering participants a deep experience of release and reconnection.',
      },
      {
        icon: '✦',
        title: 'Gatherings',
        desc: 'Community events, holistic spaces, and intentional circles ⁓available for group sessions, demonstrations, and collaborative offerings.',
      },
      {
        icon: '☽',
        title: 'Festivals',
        desc: 'Presence at wellness festivals, conscious markets, and cultural events, sharing the Kusum Modak Method with curious bodies and open hearts.',
      },
    ],
    cta: 'Get in Touch',
  },
  pt: {
    label: 'Além do Espaço de Sessão',
    heading: 'Disponível para Encontros & Eventos',
    subheading: 'Levando a prática até si ⁓onde quer que a presença seja bem-vinda.',
    items: [
      {
        icon: '🌿',
        title: 'Retiros',
        desc: 'Sessões de trabalho corporal integradas em retiros de bem-estar e yoga, oferecendo aos participantes uma experiência profunda de libertação e reconexão.',
      },
      {
        icon: '✦',
        title: 'Encontros',
        desc: 'Eventos comunitários, espaços holísticos e círculos intencionais ⁓disponível para sessões em grupo, demonstrações e propostas colaborativas.',
      },
      {
        icon: '☽',
        title: 'Festivais',
        desc: 'Presença em festivais de bem-estar, mercados conscientes e eventos culturais, partilhando o Método Kusum Modak com corpos curiosos e corações abertos.',
      },
    ],
    cta: 'Entrar em Contacto',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Availability() {
  const { lang } = useLanguage();
  const t = content[lang];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-cream-100 relative overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-max relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-mauve-400/50" />
            <span className="text-mauve-500 text-xs tracking-[0.25em] uppercase font-medium">{t.label}</span>
            <span className="h-px w-10 bg-mauve-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-800 leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="font-ritual italic text-stone-400 text-lg max-w-xl mx-auto">
            {t.subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {t.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-plum-800/50 rounded-3xl border border-plum-700/40 px-8 py-10 text-center hover:border-gold-600/30 transition-all duration-300"
            >
              <p className="text-4xl mb-5">{item.icon}</p>
              <h3 className="font-serif text-xl font-semibold text-stone-800 mb-3">{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="btn-primary inline-block cursor-pointer"
          >
            {t.cta}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
