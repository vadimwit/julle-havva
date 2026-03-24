import { Link } from 'react-scroll';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { siteConfig } from '../../data/content';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.about, to: 'about' },
    { label: t.nav.services, to: 'services' },
    { label: t.nav.gallery, to: 'gallery' },
    { label: t.nav.pricing, to: 'pricing' },
    { label: t.nav.contact, to: 'contact' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="hero" smooth duration={600} className="cursor-pointer">
              <span className="font-serif text-2xl font-semibold text-gold-400">{siteConfig.name}</span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mt-0.5">Massage Therapy</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">{t.footer.tagline}</p>
            <div className="flex items-center gap-3 mt-6">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-gold-400 hover:bg-stone-700 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-green-400 hover:bg-stone-700 transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} smooth duration={600} offset={-80}
                    className="text-stone-400 hover:text-gold-400 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t.footer.services}</h3>
            <ul className="space-y-3">
              {t.footer.serviceLinks.map((service) => (
                <li key={service}>
                  <Link to="services" smooth duration={600} offset={-80}
                    className="text-stone-400 hover:text-gold-400 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-3 text-stone-400 hover:text-gold-400 transition-colors text-sm group">
                  <HiPhone className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-400" size={16} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-stone-400 hover:text-gold-400 transition-colors text-sm group">
                  <HiMail className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-400" size={16} />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <HiLocationMarker className="mt-0.5 shrink-0 text-gold-500" size={16} />
                {siteConfig.address}
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-stone-400 hover:text-gold-400 transition-colors text-sm group">
                  <FaInstagram className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-400" size={16} />
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <HiClock className="mt-0.5 shrink-0 text-gold-500" size={16} />
                  <div className="space-y-1">
                    {t.hours.map((h) => (
                      <div key={h.day}>
                        <span className="text-stone-300 text-xs">{h.day}:</span>{' '}
                        <span className="text-stone-400 text-xs">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs text-center sm:text-left">{t.footer.copyright(year, siteConfig.name)}</p>
          <p className="text-stone-600 text-xs">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
