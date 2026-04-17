import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { services } from '../../data/content';
import { asset } from '../../utils/asset';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillars = {
  en: ['Ayurvedic Principles', 'Yoga Opening Stretches', 'Conscious Breathing', 'Deep Continuous Touch', 'Foot Work'],
  pt: ['Princípios Ayurvédicos', 'Aberturas de Yoga', 'Respiração Consciente', 'Toque Profundo e Contínuo', 'Uso dos Pés'],
};

const forWhomContent = {
  en: {
    items: [
      'For those seeking to slow down, relax, and reconnect with their body and inner space.',
      'For those who feel tension ⁓from stress, routine, or emotional overload.',
      'For those living with chronic discomfort, stiffness, or pain.',
      'And also for those already in movement ⁓yogis, surfers, athletes, dancers, walkers ⁓seeking more space, fluidity, and awareness.',
    ],
    closing: 'A practice that meets you where you are, inviting the body to release, reorganize, and reconnect.',
  },
  pt: {
    items: [
      'Para quem procura abrandar, relaxar e reencontrar-se com o seu corpo e espaço interior.',
      'Para quem sente tensão ⁓do stress, da rotina ou de uma sobrecarga emocional.',
      'Para quem vive com desconforto crónico, rigidez ou dor.',
      'E também para quem já está em movimento ⁓yogis, surfistas, atletas, dançarinos, caminhantes ⁓à procura de mais espaço, fluidez e consciência.',
    ],
    closing: 'Uma prática que vem ao teu encontro onde estás, convidando o corpo a libertar-se, reorganizar-se e reconectar-se.',
  },
};

const benefitsContent = {
  en: {
    physical: {
      label: 'Physical',
      items: [
        'Stimulates blood and lymph circulation',
        'Releases muscular tension and joint stiffness',
        'Improves posture and body alignment',
        'Increases flexibility and range of motion',
        'Relieves chronic pain and headaches',
      ],
    },
    mental: {
      label: 'Mental',
      items: [
        'Deeply calms the nervous system',
        'Reduces stress and anxiety',
        'Improves sleep quality',
        'Clears mental fog and improves focus',
        'Creates space for inner stillness',
      ],
    },
    emotional: {
      label: 'Emotional',
      items: [
        'Releases emotional tension held in the body',
        'Promotes groundedness and ease',
        'Reconnects you to your body and inner self',
        'Supports emotional processing and balance',
        'Encourages a natural sense of well-being',
      ],
    },
  },
  pt: {
    physical: {
      label: 'Físicos',
      items: [
        'Estimula a circulação sanguínea e linfática',
        'Liberta a tensão muscular e rigidez articular',
        'Melhora a postura e o alinhamento corporal',
        'Aumenta a flexibilidade e amplitude de movimento',
        'Alivia dores crónicas e cefaleias',
      ],
    },
    mental: {
      label: 'Mentais',
      items: [
        'Acalma profundamente o sistema nervoso',
        'Reduz o stress e a ansiedade',
        'Melhora a qualidade do sono',
        'Elimina a névoa mental e melhora o foco',
        'Cria espaço para a quietude interior',
      ],
    },
    emotional: {
      label: 'Emocionais',
      items: [
        'Liberta a tensão emocional retida no corpo',
        'Promove enraizamento e leveza',
        'Reconecta com o corpo e o ser interior',
        'Apoia o equilíbrio e processamento emocional',
        'Encoraja uma sensação natural de bem-estar',
      ],
    },
  },
};

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;
  const service = services[0];
  const s = service[lang];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const paragraphs = s.description.split('\n\n');
  const forWhom = forWhomContent[lang];
  const benefits = benefitsContent[lang];

  return (
    <section id="services" className="section-padding bg-plum-800">
      <div className="container-max" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-mauve-400/60" />
            <span className="text-mauve-500 text-xs tracking-[0.25em] uppercase font-medium">
              {s.subtitle}
            </span>
            <span className="h-px w-10 bg-mauve-400/60" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-800 leading-tight mb-6"
          >
            {s.name.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h2>

          {/* Description paragraphs */}
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-stone-500 leading-relaxed text-base mb-4 text-left"
            >
              {para}
            </motion.p>
          ))}

          {/* Method pillars */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
            {pillars[lang].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-plum-900/60 border border-plum-600/50 text-stone-600 text-xs font-medium rounded-full hover:border-gold-600/50 transition-colors duration-200"
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

        {/* ── Landscape video ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 w-full rounded-2xl overflow-hidden border border-plum-700/40"
          style={{ height: 220 }}
        >
          <video
            src={asset('/videos/gallery/Release.mov')}
            className="w-full h-full object-cover" style={{ objectPosition: '50% 35%' }}
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        {/* ── For whom ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 bg-plum-800/40 rounded-3xl border border-plum-700/40 px-8 py-10 md:px-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-mauve-400/60" />
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-stone-800">
              {t.forWhomHeading}
            </h3>
          </div>
          <ul className="space-y-3 mb-5">
            {forWhom.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-500 text-base leading-relaxed">
                <span className="text-mauve-400 shrink-0 mt-1 text-xs">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-stone-600 font-ritual italic text-lg leading-relaxed border-l-2 border-mauve-300/60 pl-4 mt-6">
            {forWhom.closing}
          </p>
        </motion.div>

        {/* ── Benefits ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-mauve-400/60" />
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-stone-800">
              {t.benefitsHeading}
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {(['physical', 'mental', 'emotional'] as const).map((key) => {
              const col = benefits[key];
              const labelKey = `${key}Label` as 'physicalLabel' | 'mentalLabel' | 'emotionalLabel';
              const icons = { physical: '🌿', mental: '🌙', emotional: '✦' };
              return (
                <div
                  key={key}
                  className="bg-plum-800/50 rounded-2xl border border-plum-700/40 px-6 py-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-mauve-500 mb-4 flex items-center gap-2">
                    <span>{icons[key]}</span>
                    {t[labelKey]}
                  </p>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-stone-500 text-sm leading-snug">
                        <span className="text-mauve-300 shrink-0 mt-0.5 text-xs">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
