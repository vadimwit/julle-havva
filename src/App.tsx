import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InfluencesPage from './pages/InfluencesPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <LanguageProvider>
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/influences" element={<InfluencesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </LanguageProvider>
  );
}

export default App;
