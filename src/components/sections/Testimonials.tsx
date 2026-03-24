import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { testimonials } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = testimonials.length;

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  };

  const testimonial = testimonials[current];
  const item = testimonial[lang];

  return (
    <section id="testimonials" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A15B 0, #C9A15B 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container-max relative z-10">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${testimonial.id}-${lang}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center"
              >
                <span className="block font-serif text-8xl text-gold-300 leading-none select-none -mb-4 mt-[-24px]" aria-hidden="true">"</span>

                <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light italic">
                  {item.text}
                </p>

                <div className="flex items-center justify-center gap-1 mt-6 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <HiStar key={i} className="text-gold-400" size={20} />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.initial}
                  </div>
                  <div className="text-left">
                    <p className="text-stone-800 font-semibold text-sm">{item.name}</p>
                    <p className="text-stone-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={goPrev} aria-label={t.prev}
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-gold-400 hover:text-gold-500 transition-all duration-200">
              <HiChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={t.dot(i + 1)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2.5 bg-gold-500' : 'w-2.5 h-2.5 bg-stone-200 hover:bg-gold-300'}`}
                />
              ))}
            </div>

            <button onClick={goNext} aria-label={t.next}
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-gold-400 hover:text-gold-500 transition-all duration-200">
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
