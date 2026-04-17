import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  const { lang } = useLanguage();

  return (
    <main className="pt-20 min-h-screen flex items-center justify-center bg-plum-900">
      <SEOHead
        titleEN="Page Not Found | Julle Havva"
        titlePT="Página Não Encontrada | Julle Havva"
        descriptionEN="This page could not be found."
        descriptionPT="Esta página não foi encontrada."
      />
      <div className="text-center px-6">
        <h1 className="font-serif text-6xl text-gold-400 mb-4">404</h1>
        <p className="text-white/70 text-lg mb-8">
          {lang === 'pt' ? 'Página não encontrada.' : 'Page not found.'}
        </p>
        <Link
          to="/"
          className="btn-primary inline-block"
        >
          {lang === 'pt' ? 'Voltar ao Início' : 'Return Home'}
        </Link>
      </div>
    </main>
  );
}
