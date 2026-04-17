import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Influences from '../components/sections/Influences';
import BookCTA from '../components/ui/BookCTA';

export default function InfluencesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <Influences />
      <BookCTA onBook={() => navigate('/')} />
    </main>
  );
}
