import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { testimonials } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

const transition = { duration: 0.3, ease: 'easeInOut' };

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const goTo = useCallback((index: number, dir: 1 | -1) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const goNext = useCallback(() => {
    goTo((current + 1) % total, 1);
  }, [current, total, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + total) % total, -1);
  }, [current, total, goTo]);

  // Autoplay — pauses on hover or tap-hold
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext, paused]);

  const testimonial = testimonials[current];
  const item = testimonial[lang];
  const paragraphs = item.text.split('\n\n');

  return (
    <section
      id="testimonials"
      className="section-padding bg-plum-800 ritual-petal-bg relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6B6B3A 1.5px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="max-w-3xl mx-auto">

          {/* Fixed-height card area — prevents layout jump */}
          <div
            className="relative overflow-hidden"
            style={{ minHeight: 320 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onPointerDown={() => {
              holdTimer.current = setTimeout(() => setPaused(true), 150);
            }}
            onPointerUp={() => {
              if (holdTimer.current) clearTimeout(holdTimer.current);
              setPaused(false);
            }}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={`${testimonial.id}-${lang}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="bg-plum-800/30 backdrop-blur-sm rounded-3xl border border-plum-700/40 p-8 md:p-12 text-center"
              >
                <span
                  className="block font-ritual text-8xl text-mauve-400/40 leading-none select-none -mb-4 mt-[-20px]"
                  aria-hidden="true"
                >
                  "
                </span>

                <div className="space-y-3 mb-6">
                  {paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="font-ritual italic text-stone-700 text-lg md:text-xl leading-relaxed font-light"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <HiStar key={i} className="text-gold-500" size={16} />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-mauve-400 to-mauve-600 flex items-center justify-center text-white font-semibold text-xs">
                    {testimonial.initial}
                  </div>
                  <div className="text-left">
                    <p className="text-stone-800 font-semibold text-sm">{item.name}</p>
                    <p className="text-stone-500 text-xs font-ritual italic">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              onClick={goPrev}
              aria-label={t.prev}
              className="w-9 h-9 rounded-full border border-mauve-400/40 flex items-center justify-center text-stone-600 hover:border-mauve-500 hover:text-mauve-600 transition-all duration-200"
            >
              <HiChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={t.dot(i + 1)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-5 h-2 bg-mauve-500'
                      : 'w-2 h-2 bg-mauve-300/60 hover:bg-mauve-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label={t.next}
              className="w-9 h-9 rounded-full border border-mauve-400/40 flex items-center justify-center text-stone-600 hover:border-mauve-500 hover:text-mauve-600 transition-all duration-200"
            >
              <HiChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
