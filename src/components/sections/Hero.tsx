import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiChevronDown } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { siteConfig } from '../../data/content';
import { asset } from '../../utils/asset';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Fallback: actual photo so there's no dark flash while video loads */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset('/images/hero/IMG_5054.PNG')})` }}
      />

      {/* Background video — sits on top of photo once ready */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        poster={asset('/images/hero/IMG_5054.PNG')}
        onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = 'none'; }}
      >
        <source src={asset('/videos/hero/20240415_201327.mp4')} type="video/mp4" />
      </video>

      {/* Minimal overlay — just enough contrast for text, barely touches the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/35 z-20" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-gold-400/40 to-transparent hidden lg:block z-30" />
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-gold-400/40 to-transparent hidden lg:block z-30" />

      {/* Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold-400/70" />
            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium">
              {lang === 'en' ? 'Certified Massage Therapist' : 'Massoterapeuta Certificada'}
            </span>
            <span className="h-px w-10 bg-gold-400/70" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-tight"
          >
            {t.hero.heading1}
            <br />
            <em className="text-gold-400 not-italic font-semibold">{t.hero.heading2}</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-stone-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="contact"
              smooth
              duration={700}
              offset={-80}
              className="btn-primary text-base cursor-pointer w-full sm:w-auto text-center"
            >
              {t.hero.bookBtn}
            </Link>
            <Link
              to="services"
              smooth
              duration={700}
              offset={-80}
              className="px-8 py-3 border-2 border-white/60 text-white hover:border-gold-400 hover:text-gold-400 font-medium rounded-full transition-all duration-300 cursor-pointer w-full sm:w-auto text-center text-base"
            >
              {t.hero.exploreBtn}
            </Link>
          </motion.div>

          {/* Name branding */}
          <motion.p
            variants={itemVariants}
            className="mt-10 font-serif text-gold-300/70 text-sm tracking-widest italic"
          >
            — {siteConfig.name}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <Link to="about" smooth duration={600} offset={-80}>
          <span className="text-white/50 text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="flex justify-center mt-2"
          >
            <HiChevronDown className="text-gold-400" size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
