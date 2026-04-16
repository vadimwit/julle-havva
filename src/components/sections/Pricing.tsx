import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { pricingTiers } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function Pricing() {
  const { lang } = useLanguage();
  const t = translations[lang].pricing;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="section-padding bg-rose-50">
      <div className="container-max" ref={ref}>
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier, i) => {
            const p = tier[lang];
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  tier.popular
                    ? 'bg-plum-900 border-2 border-gold-500 shadow-xl md:-mt-4 md:mb-4'
                    : 'bg-white/90 border border-rose-100 shadow-sm'
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gold-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase shadow">
                      {t.popular}
                    </span>
                  </div>
                )}

                <div className={`p-8 ${tier.popular ? 'pt-12' : ''}`}>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                    tier.popular ? 'text-gold-400' : 'text-mauve-500'
                  }`}>
                    {p.name}
                  </p>
                  <h3 className={`font-serif text-2xl font-semibold mb-1 ${
                    tier.popular ? 'text-white' : 'text-stone-800'
                  }`}>
                    {p.subtitle}
                  </h3>
                  <p className={`font-ritual italic text-sm mb-6 leading-relaxed font-light ${
                    tier.popular ? 'text-stone-400' : 'text-stone-500'
                  }`}>
                    {p.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className={`font-serif text-4xl font-bold ${
                      tier.popular ? 'text-gold-400' : 'text-stone-800'
                    }`}>
                      {tier.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {p.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`shrink-0 mt-1 text-xs ${
                          tier.popular ? 'text-mauve-300' : 'text-mauve-400'
                        }`}>
                          ✦
                        </span>
                        <span className={`text-sm ${
                          tier.popular ? 'text-stone-300' : 'text-stone-500'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="contact"
                    smooth
                    duration={600}
                    offset={-80}
                    className={`block w-full text-center py-3.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                      tier.popular
                        ? 'bg-gold-500 hover:bg-gold-400 text-white shadow-lg hover:-translate-y-0.5'
                        : 'border-2 border-mauve-400 text-mauve-500 hover:bg-mauve-500 hover:text-white'
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center font-ritual italic text-stone-400 text-base mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {t.note}
        </motion.p>
      </div>
    </section>
  );
}
