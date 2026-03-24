import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { siteConfig } from '../../data/content';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.about, to: 'about' },
    { label: t.services, to: 'services' },
    { label: t.gallery, to: 'gallery' },
    { label: t.pricing, to: 'pricing' },
    { label: t.contact, to: 'contact' },
  ];

  const navBg = scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent';
  const textColor = scrolled ? 'text-stone-700' : 'text-white';
  const hoverColor = scrolled ? 'hover:text-gold-500' : 'hover:text-gold-300';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="hero" smooth duration={600} className="cursor-pointer select-none">
              <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-gold-500' : 'text-gold-300'}`}>
                {siteConfig.name}
              </span>
              <span className={`block text-[10px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 ${scrolled ? 'text-stone-400' : 'text-stone-300'}`}>
                Massage Therapy
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="!text-gold-500"
                  className={`text-sm font-medium cursor-pointer transition-colors duration-300 ${textColor} ${hoverColor}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Language toggle */}
              <div className={`flex items-center gap-1 text-xs font-semibold border rounded-full px-2.5 py-1 transition-colors duration-300 ${scrolled ? 'border-stone-200' : 'border-white/30'}`}>
                <button
                  onClick={() => setLang('en')}
                  className={`transition-colors duration-200 ${lang === 'en' ? 'text-gold-500' : scrolled ? 'text-stone-400 hover:text-stone-600' : 'text-white/50 hover:text-white'}`}
                >
                  EN
                </button>
                <span className={scrolled ? 'text-stone-200' : 'text-white/30'}>|</span>
                <button
                  onClick={() => setLang('pt')}
                  className={`transition-colors duration-200 ${lang === 'pt' ? 'text-gold-500' : scrolled ? 'text-stone-400 hover:text-stone-600' : 'text-white/50 hover:text-white'}`}
                >
                  PT
                </button>
              </div>

              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="btn-primary text-sm cursor-pointer"
              >
                {t.book}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t.openMenu}
            >
              {mobileOpen ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-stone-900/98 flex flex-col items-center justify-center gap-7 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label={t.closeMenu}
            >
              <HiX size={28} />
            </button>

            <span className="font-serif text-3xl text-gold-400 mb-2">{siteConfig.name}</span>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-white text-2xl font-serif font-medium hover:text-gold-400 transition-colors cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile language toggle */}
            <div className="flex items-center gap-3 text-sm font-semibold mt-2">
              <button
                onClick={() => setLang('en')}
                className={lang === 'en' ? 'text-gold-400' : 'text-white/50'}
              >
                EN
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLang('pt')}
                className={lang === 'pt' ? 'text-gold-400' : 'text-white/50'}
              >
                PT
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
            >
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="btn-primary mt-2 inline-block cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {t.book}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
