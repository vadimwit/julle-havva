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
    'w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-700 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200 text-sm';

  const closedLabel = lang === 'en' ? 'Closed' : 'Encerrado';

  return (
    <section id="contact" className="section-padding bg-cream-50">
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
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-white rounded-3xl shadow-sm">
                <HiCheckCircle className="text-green-500 mb-4" size={56} />
                <h3 className="font-serif text-2xl text-stone-800 font-semibold mb-3">{t.success.heading}</h3>
                <p className="text-stone-500 max-w-sm leading-relaxed mb-6">{t.success.body}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="btn-outline text-sm"
                >
                  {t.success.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">{t.form.nameLabel}</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder={t.form.namePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">{t.form.emailLabel}</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder={t.form.emailPlaceholder} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">{t.form.phoneLabel}</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder={t.form.phonePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">{t.form.serviceLabel}</label>
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
                  <label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">{t.form.messageLabel}</label>
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
            <div className="bg-white rounded-3xl shadow-sm p-8 space-y-5">
              <h3 className="font-serif text-xl font-semibold text-stone-800 mb-6">{t.info.heading}</h3>

              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  <HiPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.phone}</p>
                  <p className="text-stone-700 font-medium text-sm">{siteConfig.phone}</p>
                </div>
              </a>

              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.whatsapp}</p>
                  <p className="text-stone-700 font-medium text-sm">{t.info.whatsappChat}</p>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  <HiMail size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.email}</p>
                  <p className="text-stone-700 font-medium text-sm">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                  <HiLocationMarker size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.location}</p>
                  <p className="text-stone-700 font-medium text-sm">{siteConfig.address}</p>
                </div>
              </div>

              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <FaInstagram size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{t.info.instagram}</p>
                  <p className="text-stone-700 font-medium text-sm">{siteConfig.instagramHandle}</p>
                </div>
              </a>
            </div>

            {/* Opening hours */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-5">
                <HiClock className="text-gold-500" size={20} />
                <h3 className="font-serif text-xl font-semibold text-stone-800">{t.info.hoursHeading}</h3>
              </div>
              <ul className="space-y-3">
                {tHours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0">
                    <span className="text-stone-600 text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.hours === closedLabel ? 'text-stone-300' : 'text-gold-500'}`}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="bg-stone-100 rounded-3xl overflow-hidden h-48 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-stone-200">
              <HiLocationMarker className="text-stone-300 mb-2" size={32} />
              <p className="text-stone-400 text-sm font-medium">{t.info.mapTitle}</p>
              <p className="text-stone-300 text-xs mt-1 max-w-xs">
                {t.info.mapBody}{' '}
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  className="text-gold-400 hover:underline">
                  {t.info.mapLink}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
