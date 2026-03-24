import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  en: {
    label: 'Our Influences',
    heading: 'A Living Lineage',
    subheading: 'The Kusum Modak Method draws from two great Indian traditions, passed down through decades of devoted practice and teaching.',
    influences: [
      {
        id: 'iyengar',
        name: 'B.K.S. Iyengar',
        tradition: 'Iyengar Yoga',
        years: '20 years of study',
        img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
        detail:
          'Bellur Krishnamachar Sundararaja Iyengar — widely regarded as one of the world\'s foremost yoga masters — transformed the global understanding of asana practice through precision, alignment and the intelligent use of the body. Kusum Modak was a devoted disciple at his Pune institute for over 20 years, absorbing not just technique but philosophy: the breath as a bridge, stillness as medicine, and the body as a doorway to the self.',
        quote: '"Health is a state of complete harmony of the body, mind and spirit."',
        quoteBy: '— B.K.S. Iyengar',
      },
      {
        id: 'limaye',
        name: 'Master Limaye',
        tradition: 'Ayurvedic Bodywork',
        years: 'Traditional Indian lineage',
        img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
        detail:
          'In the late 1980s, Kusum Modak was introduced to Master Limaye — a deeply respected Indian practitioner of classical Ayurvedic massage. His approach was rooted in the ancient science of Ayurveda: the use of warm oils, rhythmic strokes and touch that moves with the body\'s natural energetic flow. Through his guidance, Kusum Modak developed the hands-and-feet technique that became the defining signature of her method — a practice of deep contact, complete presence, and compassionate care.',
        quote: '"True healing begins where medicine ends — in presence and touch."',
        quoteBy: '— Ayurvedic tradition',
      },
    ],
    pillarsLabel: 'The method brings together',
    pillars: [
      { label: 'Ayurveda', desc: 'Ancient Indian life science' },
      { label: 'Iyengar Yoga', desc: 'Precision & alignment' },
      { label: 'Conscious Breathing', desc: 'Pranayama principles' },
      { label: 'Deep Touch', desc: 'Continuous & uninterrupted' },
      { label: 'Foot Work', desc: 'Signature technique' },
      { label: 'Prana Flow', desc: 'Energy channel work' },
    ],
  },
  pt: {
    label: 'As Nossas Influências',
    heading: 'Uma Linhagem Viva',
    subheading: 'O Método Kusum Modak bebe de duas grandes tradições indianas, transmitidas através de décadas de prática e ensino devotados.',
    influences: [
      {
        id: 'iyengar',
        name: 'B.K.S. Iyengar',
        tradition: 'Yoga Iyengar',
        years: '20 anos de estudo',
        img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
        detail:
          'Bellur Krishnamachar Sundararaja Iyengar — amplamente considerado um dos maiores mestres de yoga do mundo — transformou a compreensão global da prática de asana através da precisão, alinhamento e uso inteligente do corpo. Kusum Modak foi uma discípula dedicada no seu instituto de Pune durante mais de 20 anos, absorvendo não apenas técnica, mas filosofia: a respiração como ponte, a quietude como medicina, e o corpo como porta de entrada para o ser.',
        quote: '"A saúde é um estado de completa harmonia entre corpo, mente e espírito."',
        quoteBy: '— B.K.S. Iyengar',
      },
      {
        id: 'limaye',
        name: 'Mestre Limaye',
        tradition: 'Trabalho Corporal Ayurvédico',
        years: 'Linhagem indiana tradicional',
        img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
        detail:
          'No final da década de 1980, Kusum Modak foi apresentada ao Mestre Limaye — um praticante indiano profundamente respeitado de massagem ayurvédica clássica. A sua abordagem estava enraizada na antiga ciência do Ayurveda: o uso de óleos quentes, toques rítmicos e um contacto que se move com o fluxo energético natural do corpo. Sob a sua orientação, Kusum Modak desenvolveu a técnica de mãos e pés que se tornaria a marca distintiva do seu método — uma prática de contacto profundo, presença total e cuidado compassivo.',
        quote: '"A verdadeira cura começa onde a medicina termina — na presença e no toque."',
        quoteBy: '— Tradição Ayurvédica',
      },
    ],
    pillarsLabel: 'O método reúne',
    pillars: [
      { label: 'Ayurveda', desc: 'Ciência indiana da vida' },
      { label: 'Yoga Iyengar', desc: 'Precisão e alinhamento' },
      { label: 'Respiração Consciente', desc: 'Princípios de pranayama' },
      { label: 'Toque Profundo', desc: 'Contínuo e ininterrupto' },
      { label: 'Uso dos Pés', desc: 'Técnica exclusiva' },
      { label: 'Fluxo de Prana', desc: 'Trabalho nos canais de energia' },
    ],
  },
};

export default function Influences() {
  const { lang } = useLanguage();
  const t = content[lang];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-stone-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-10 bg-gold-500/60" />
            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium">{t.label}</span>
            <span className="h-px w-10 bg-gold-500/60" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">{t.heading}</h2>
          <p className="text-stone-400 text-sm leading-relaxed">{t.subheading}</p>
        </motion.div>

        {/* Influence cards — full image + text layout */}
        <div className="space-y-8 mb-16">
          {t.influences.map((inf, i) => (
            <motion.div
              key={inf.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-stone-700/50 hover:border-gold-500/30 transition-colors duration-300 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-last' : ''}`}
            >
              {/* Image */}
              <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-700" />
                <img
                  src={inf.img}
                  alt={inf.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Overlay gradient toward text */}
                <div className={`absolute inset-0 ${i % 2 === 1 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-stone-900/80`} />

                {/* Tradition badge */}
                <div className="absolute bottom-5 left-5">
                  <span className="bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs tracking-widest uppercase font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {inf.tradition}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-stone-800/60 p-8 md:p-10 flex flex-col justify-center">
                <p className="text-stone-500 text-xs tracking-widest uppercase font-medium mb-1">{inf.years}</p>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">{inf.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">{inf.detail}</p>
                <blockquote className="border-l-2 border-gold-500/50 pl-4">
                  <p className="text-gold-300/70 text-sm italic leading-relaxed">{inf.quote}</p>
                  <cite className="text-stone-500 text-xs mt-1 block not-italic">{inf.quoteBy}</cite>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-center text-stone-500 text-xs tracking-[0.25em] uppercase font-medium mb-6">{t.pillarsLabel}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {t.pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="bg-stone-800/40 border border-stone-700/50 rounded-xl p-4 text-center hover:border-gold-500/40 hover:bg-stone-800/70 transition-all duration-200 group"
              >
                <p className="text-gold-400 text-xs font-semibold mb-1 group-hover:text-gold-300 transition-colors">{pillar.label}</p>
                <p className="text-stone-600 text-xs leading-snug">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
