import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

interface BookCTAProps {
  onBook: () => void;
}

export default function BookCTA({ onBook }: BookCTAProps) {
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  return (
    <section className="section-padding bg-plum-800 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <button onClick={onBook} className="btn-primary text-sm cursor-pointer">
          {t.book}
        </button>
      </motion.div>
    </section>
  );
}
