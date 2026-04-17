import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../components/sections/About';
import BookCTA from '../components/ui/BookCTA';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <About />
      <BookCTA onBook={() => navigate('/')} />
    </main>
  );
}
