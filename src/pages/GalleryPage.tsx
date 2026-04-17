import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/sections/Gallery';
import BookCTA from '../components/ui/BookCTA';

export default function GalleryPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <Gallery />
      <BookCTA onBook={() => navigate('/')} />
    </main>
  );
}
