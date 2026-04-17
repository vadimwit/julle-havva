import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  titleEN: string;
  titlePT: string;
  descriptionEN: string;
  descriptionPT: string;
}

export default function SEOHead({ titleEN, titlePT, descriptionEN, descriptionPT }: SEOHeadProps) {
  const { lang } = useLanguage();
  const title = lang === 'pt' ? titlePT : titleEN;
  const description = lang === 'pt' ? descriptionPT : descriptionEN;

  return (
    <Helmet>
      <html lang={lang === 'pt' ? 'pt-PT' : 'en'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
