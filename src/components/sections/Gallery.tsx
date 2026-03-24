import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { galleryItems, siteConfig } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function Gallery() {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  return (
    <section id="gallery" className="section-padding bg-stone-900">
      <div className="container-max" ref={ref}>
        <SectionTitle title={t.title} subtitle={t.subtitle} light />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {galleryItems.map((item, i) => {
            const label = item[lang];
            return (
              <motion.div
                key={item.id}
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.span ? 'row-span-2' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {/* Actual image */}
                {!failedImages.has(item.id) && (
                  <img
                    src={item.src}
                    alt={label.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setFailedImages((prev) => new Set(prev).add(item.id))}
                  />
                )}

                {/* Placeholder when no image */}
                {failedImages.has(item.id) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 gap-2">
                    <span className="text-4xl">🖼</span>
                    <span className="text-xs font-medium tracking-widest uppercase text-center px-4">{item.id}.jpg</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-serif text-sm font-medium">{label.caption}</p>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold-400/60 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-stone-400 text-sm mb-4">{t.followText}</p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-white rounded-full text-sm font-medium transition-all duration-300"
          >
            {siteConfig.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
