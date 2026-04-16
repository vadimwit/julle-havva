import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { asset } from '../../utils/asset';
import { siteConfig } from '../../data/content';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    if (exiting) return;
    setExiting(true);
    // Short delay so the exit animation plays before parent unmounts
    setTimeout(onEnter, 900);
  };

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={asset('/images/hero/IMG_5054.PNG')}
          >
            <source src={asset('/videos/hero/20240415_201327.mp4')} type="video/mp4" />
          </video>

          {/* Layered overlays: base dark + warm ritual glow */}
          <div className="absolute inset-0 bg-black/45" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(140,70,100,0.22) 0%, transparent 70%)',
            }}
          />

          {/* Vertical decorative lines */}
          <div className="absolute top-1/4 left-8 w-px h-40 bg-gradient-to-b from-transparent via-gold-400/25 to-transparent hidden lg:block" />
          <div className="absolute top-1/4 right-8 w-px h-40 bg-gradient-to-b from-transparent via-gold-400/25 to-transparent hidden lg:block" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-12 text-center px-6 sm:px-4">

            {/* Logo block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center gap-2"
            >
              {/* Crescent ornament */}
              <p className="font-ritual text-gold-400/50 text-3xl mb-1" aria-hidden="true">
                ☽
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-semibold tracking-widest">
                {siteConfig.name}
              </h1>

              <p className="font-ritual italic text-gold-300/70 text-sm sm:text-base tracking-[0.25em] sm:tracking-[0.3em] mt-1">
                massage therapy · algarve
              </p>
            </motion.div>

            {/* Thin horizontal rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
              className="h-px w-32 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent origin-center"
            />

            {/* ENTER button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5, ease: 'easeOut' }}
            >
              <button
                onClick={handleEnter}
                aria-label="Enter the website"
                className="group relative flex flex-col items-center gap-0 cursor-pointer focus:outline-none"
              >
                {/* Breathing glow ring — ritual pulse */}
                <motion.span
                  className="absolute inset-0 rounded-full border border-gold-400/30 pointer-events-none"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                />

                {/* The button itself */}
                <span className="relative px-10 py-3.5 sm:px-14 sm:py-4 border border-white/40 rounded-full font-ritual italic text-white/85 tracking-[0.35em] sm:tracking-[0.45em] text-sm uppercase group-hover:border-gold-400/70 group-hover:text-gold-300 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,170,92,0.15)]">
                  Enter
                </span>
              </button>
            </motion.div>

            {/* Fine print */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="font-ritual italic text-white/25 text-xs tracking-widest"
            >
              {siteConfig.address}
            </motion.p>
          </div>
        </motion.div>
      ) : (
        // Fade-to-dark curtain on exit
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[100] bg-plum-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      )}
    </AnimatePresence>
  );
}
