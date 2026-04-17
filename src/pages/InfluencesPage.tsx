import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Influences from '../components/sections/Influences';
import BookCTA from '../components/ui/BookCTA';
import SEOHead from '../components/SEOHead';

export default function InfluencesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <SEOHead
        titleEN="Our Influences | Kusum Modak Method — Julle Havva"
        titlePT="As Nossas Influências | Método Kusum Modak — Julle Havva"
        descriptionEN="Discover the lineage behind the Kusum Modak Method: Kusum Modak, B.K.S. Iyengar, and Master Limaye. Ayurvedic yoga massage rooted in tradition."
        descriptionPT="Descubra a linhagem por trás do Método Kusum Modak: Kusum Modak, B.K.S. Iyengar e Mestre Limaye. Massagem de yoga ayurvédico enraizada na tradição."
      />
      <Influences />
      <BookCTA onBook={() => navigate('/')} />
    </main>
  );
}
