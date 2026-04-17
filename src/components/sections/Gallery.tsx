import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { galleryItems, siteConfig } from '../../data/content';
import { asset } from '../../utils/asset';
import SectionTitle from '../ui/SectionTitle';

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.97 }),
};

const transition = { duration: 0.4, ease: 'easeInOut' };

export default function Gallery() {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const total = galleryItems.length;

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

  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext, paused]);

  const item = galleryItems[current];
  const label = item[lang];

  return (
    <section id="gallery" className="section-padding bg-plum-900 relative overflow-hidden">

      {/* Ambient petal glow within the dark section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 30% at 50% 100%, rgba(100,40,20,0.15) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10" ref={ref}>
        <SectionTitle title={t.title} subtitle={t.subtitle} light />

        <div className="max-w-3xl mx-auto">
          {/* Big photo carousel */}
          <div
            className="relative overflow-hidden rounded-2xl border border-plum-700/40"
            style={{ minHeight: 420 }}
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
                key={item.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="relative w-full"
                style={{ minHeight: 420 }}
              >
                {/* Gradient fallback */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {/* Image */}
                {!item.placeholder && (
                  <img
                    src={asset(item.src)}
                    alt={label.alt}
                    className="relative w-full h-full object-cover"
                    style={{ minHeight: 420, maxHeight: 520 }}
                  />
                )}

                {/* Bottom caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-plum-900/80 via-plum-900/40 to-transparent p-6 pt-16">
                  <p className="text-white font-ritual italic text-lg md:text-xl font-medium">
                    {label.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              onClick={goPrev}
              aria-label={t.prev}
              className="w-9 h-9 rounded-full border border-mauve-400/40 flex items-center justify-center text-stone-400 hover:border-mauve-500 hover:text-mauve-400 transition-all duration-200"
            >
              <HiChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {galleryItems.map((_, i) => (
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
              className="w-9 h-9 rounded-full border border-mauve-400/40 flex items-center justify-center text-stone-400 hover:border-mauve-500 hover:text-mauve-400 transition-all duration-200"
            >
              <HiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-stone-500 font-ritual italic text-base mb-4">{t.followText}</p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-mauve-500/50 text-mauve-300 hover:bg-mauve-500 hover:text-white hover:border-mauve-500 rounded-full text-sm font-medium transition-all duration-300"
          >
            {siteConfig.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
