import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { galleryItems, siteConfig } from '../../data/content';
import { asset } from '../../utils/asset';
import SectionTitle from '../ui/SectionTitle';

export default function Gallery() {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

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

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px] [grid-auto-flow:dense]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {galleryItems.map((item, i) => {
            const label = item[lang];
            return (
              <motion.div
                key={item.id}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${item.span ? 'row-span-2' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {item.placeholder ? (
                  /* Coming-soon slot */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-mauve-700/30 rounded-2xl">
                    <span className="w-10 h-10 rounded-full border border-mauve-600/30 flex items-center justify-center text-mauve-600/40 font-ritual text-xl">✦</span>
                    <span className="text-mauve-600/30 text-xs tracking-widest uppercase">{label.caption}</span>
                  </div>
                ) : (
                  <>
                    {/* Actual image */}
                    {!failedImages.has(item.id) && (
                      <img
                        src={asset(item.src)}
                        alt={label.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={() => setFailedImages((prev) => new Set(prev).add(item.id))}
                      />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-plum-900/0 group-hover:bg-plum-900/50 transition-all duration-300" />

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-ritual italic text-sm font-medium">{label.caption}</p>
                    </div>

                    {/* Mauve border on hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-mauve-400/50 transition-all duration-300" />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Landscape video strip */}
        <motion.div
          className="mt-4 w-full rounded-2xl overflow-hidden border border-plum-700/40"
          style={{ height: 140 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <video
            src="/videos/gallery/20240415_202803.mov"
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

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
