import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../components/sections/About';
import BookCTA from '../components/ui/BookCTA';
import SEOHead from '../components/SEOHead';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <SEOHead
        titleEN="About Julle Havva | Massage Therapist — Algarve, Portugal"
        titlePT="Sobre Julle Havva | Massoterapeuta — Algarve, Portugal"
        descriptionEN="Meet Julle Havva, a certified Kusum Modak massage therapist based in the Western Algarve. 3+ years experience, 800+ clients."
        descriptionPT="Conheça Julle Havva, massoterapeuta certificada no Método Kusum Modak no Algarve Ocidental. 3+ anos de experiência, 800+ clientes."
      />
      <About />
      <BookCTA onBook={() => navigate('/')} />
    </main>
  );
}
