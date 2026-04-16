import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCheckCircle } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { siteConfig, services } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const tHours = translations[lang].hours;

  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-plum-600/60 bg-plum-900/80 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600/50 transition-all duration-200 text-sm';

  const closedLabel = lang === 'en' ? 'Closed' : 'Encerrado';

  return (
    <section id="contact" className="section-padding bg-cream-50 ritual-glow">
      <div className="container-max">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-plum-800/60 rounded-3xl border border-plum-700/40">
                <HiCheckCircle className="text-gold-400 mb-4" size={56} />
                <h3 className="font-serif text-2xl text-stone-800 font-semibold mb-3">{t.success.heading}</h3>
                <p className="font-ritual italic text-stone-500 max-w-sm leading-relaxed mb-6 text-lg">{t.success.body}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="btn-outline text-sm"
                >
                  {t.success.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-plum-800/60 rounded-3xl border border-plum-700/40 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5 uppercase tracking-wide">{t.form.nameLabel}</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder={t.form.namePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5 uppercase tracking-wide">{t.form.emailLabel}</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder={t.form.emailPlaceholder} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5 uppercase tracking-wide">{t.form.phoneLabel}</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder={t.form.phonePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1.5 uppercase tracking-wide">{t.form.serviceLabel}</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                      <option value="">{t.form.servicePlaceholder}</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{s[lang].name}</option>
                      ))}
                      <option value="other">{t.form.serviceOther}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1.5 uppercase tracking-wide">{t.form.messageLabel}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder={t.form.messagePlaceholder} className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={loading}
                  className="btn-primary w-full text-center text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? t.form.submitting : t.form.submit}
                </button>

                <p className="text-stone-400 text-xs text-center">
                  {t.form.orContact}{' '}
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="text-green-600 hover:underline font-medium">WhatsApp</a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-plum-800/60 rounded-3xl border border-plum-700/40 p-8 space-y-5">
              <h3 className="font-serif text-xl font-semibold text-stone-800 mb-6">{t.info.heading}</h3>

              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-plum-700/50 flex items-center justify-center text-gold-400 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                  <HiPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.phone}</p>
                  <p className="text-stone-700 font-medium text-sm">{siteConfig.phone}</p>
                </div>
              </a>

              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-green-900/40 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.whatsapp}</p>
                  <p className="text-stone-700 font-medium text-sm">{t.info.whatsappChat}</p>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-plum-700/50 flex items-center justify-center text-gold-400 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                  <HiMail size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.email}</p>
                  <p className="text-stone-700 font-medium text-sm">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-plum-700/50 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                  <HiLocationMarker size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone-400 uppercase tracking-wide mb-2">{t.info.location}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {siteConfig.locations.map((loc) => (
                      <span
                        key={loc}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blush-100 text-stone-700 text-xs font-medium rounded-full border border-blush-200"
                      >
                        🇵🇹 {loc}
                      </span>
                    ))}
                  </div>
                  <p className="text-stone-400 text-xs leading-relaxed italic">
                    {lang === 'en'
                      ? 'Also available at your location upon request ⁓forest bathing, outdoor spaces, retreats & private settings welcome.'
                      : 'Disponível também na sua localização a pedido ⁓banhos de floresta, espaços ao ar livre, retiros e ambientes privados são bem-vindos.'}
                  </p>
                </div>
              </div>

              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-plum-700/50 flex items-center justify-center text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <FaInstagram size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.instagram}</p>
                  <p className="text-stone-700 font-medium text-sm">{siteConfig.instagramHandle}</p>
                </div>
              </a>
            </div>

            {/* Opening hours */}
            <div className="bg-plum-800/60 rounded-3xl border border-plum-700/40 p-8">
              <div className="flex items-center gap-3 mb-5">
                <HiClock className="text-mauve-500" size={20} />
                <h3 className="font-serif text-xl font-semibold text-stone-800">{t.info.hoursHeading}</h3>
              </div>
              <ul className="space-y-3">
                {tHours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center py-2 border-b border-rose-50 last:border-0">
                    <span className="text-stone-600 text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.hours === closedLabel ? 'text-stone-300' : 'text-mauve-500'}`}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
