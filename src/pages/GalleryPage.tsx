import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/sections/Gallery';
import BookCTA from '../components/ui/BookCTA';
import SEOHead from '../components/SEOHead';

export default function GalleryPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <SEOHead
        titleEN="Gallery | Julle Havva — Massage Therapy"
        titlePT="Galeria | Julle Havva — Massoterapia"
        descriptionEN="View the gallery of Julle Havva's massage therapy practice in the Algarve, Portugal."
        descriptionPT="Veja a galeria da prática de massoterapia de Julle Havva no Algarve, Portugal."
      />
      <Gallery />
      <BookCTA onBook={() => navigate('/')} />
    </main>
  );
}
