import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { siteConfig } from '../../data/content';

interface NavItem {
  label: string;
  type: 'route' | 'scroll';
  to: string;
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: NavItem[] = [
    { label: t.about, type: 'route', to: '/about' },
    { label: lang === 'en' ? 'Our Influences' : 'As Nossas Influências', type: 'route', to: '/influences' },
    { label: t.gallery, type: 'route', to: '/gallery' },
    { label: t.contact, type: 'scroll', to: 'contact' },
  ];

  const navBg = 'bg-plum-900/95 backdrop-blur-md shadow-md';
  const textColor = 'text-white/80';
  const hoverColor = 'hover:text-gold-300';

  const handleContactClick = () => {
    if (isHome) return; // scroll link handles it
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <RouterLink to="/" className="cursor-pointer select-none">
              <span className="font-serif text-2xl font-semibold tracking-wide text-gold-300 transition-colors duration-300">
                {siteConfig.name}
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase font-medium text-stone-400 transition-colors duration-300">
                Massage Therapy
              </span>
            </RouterLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) =>
                link.type === 'route' ? (
                  <RouterLink
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-medium cursor-pointer transition-colors duration-300 ${textColor} ${hoverColor} ${location.pathname === link.to ? '!text-mauve-400' : ''}`}
                  >
                    {link.label}
                  </RouterLink>
                ) : isHome ? (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    spy
                    activeClass="!text-mauve-400"
                    className={`text-sm font-medium cursor-pointer transition-colors duration-300 ${textColor} ${hoverColor}`}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <button
                    key={link.to}
                    onClick={handleContactClick}
                    className={`text-sm font-medium cursor-pointer transition-colors duration-300 ${textColor} ${hoverColor}`}
                  >
                    {link.label}
                  </button>
                )
              )}

              {/* Language toggle */}
              <div className="flex items-center gap-1 text-xs font-semibold border border-white/20 rounded-full px-2.5 py-1 transition-colors duration-300">
                <button
                  onClick={() => setLang('en')}
                  className={`transition-colors duration-200 ${lang === 'en' ? 'text-mauve-400' : 'text-white/50 hover:text-white'}`}
                >
                  EN
                </button>
                <span className="text-white/30">|</span>
                <button
                  onClick={() => setLang('pt')}
                  className={`transition-colors duration-200 ${lang === 'pt' ? 'text-mauve-400' : 'text-white/50 hover:text-white'}`}
                >
                  PT
                </button>
              </div>

              {isHome ? (
                <ScrollLink
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  className="btn-primary text-sm cursor-pointer"
                >
                  {t.book}
                </ScrollLink>
              ) : (
                <button onClick={handleContactClick} className="btn-primary text-sm cursor-pointer">
                  {t.book}
                </button>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-white bg-plum-900/40 backdrop-blur-sm border border-white/10 transition-all duration-300"
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
            className="fixed inset-0 z-50 bg-plum-900 flex flex-col items-center justify-center gap-7 md:hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(160,80,120,0.12) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white p-2 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label={t.closeMenu}
            >
              <HiX size={28} />
            </button>

            <span className="font-serif text-3xl text-gold-400 mb-2 relative z-10">{siteConfig.name}</span>
            <p className="font-ritual italic text-mauve-400/60 text-sm tracking-widest relative z-10">
              ☽ massage therapy ☾
            </p>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="relative z-10"
              >
                {link.type === 'route' ? (
                  <RouterLink
                    to={link.to}
                    className="text-white/80 text-2xl font-serif font-medium hover:text-gold-400 transition-colors cursor-pointer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </RouterLink>
                ) : isHome ? (
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    className="text-white/80 text-2xl font-serif font-medium hover:text-gold-400 transition-colors cursor-pointer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <button
                    className="text-white/80 text-2xl font-serif font-medium hover:text-gold-400 transition-colors cursor-pointer"
                    onClick={() => {
                      setMobileOpen(false);
                      handleContactClick();
                    }}
                  >
                    {link.label}
                  </button>
                )}
              </motion.div>
            ))}

            {/* Mobile language toggle */}
            <div className="flex items-center gap-3 text-sm font-semibold mt-2 relative z-10">
              <button
                onClick={() => setLang('en')}
                className={lang === 'en' ? 'text-mauve-300' : 'text-white/40'}
              >
                EN
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLang('pt')}
                className={lang === 'pt' ? 'text-mauve-300' : 'text-white/40'}
              >
                PT
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="relative z-10"
            >
              {isHome ? (
                <ScrollLink
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  className="btn-primary mt-2 inline-block cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.book}
                </ScrollLink>
              ) : (
                <button
                  className="btn-primary mt-2 inline-block cursor-pointer"
                  onClick={() => {
                    setMobileOpen(false);
                    handleContactClick();
                  }}
                >
                  {t.book}
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
