import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Influences from './components/sections/Influences';
import Gallery from './components/sections/Gallery';
import Availability from './components/sections/Availability';
import Contact from './components/sections/Contact';
import WhatsAppButton from './components/ui/WhatsAppButton';
import WaveDivider from './components/ui/WaveDivider';
import SplashScreen from './components/ui/SplashScreen';


function App() {
  const [entered, setEntered] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('jh-entered') === '1';
    } catch {
      return false;
    }
  });

  const handleEnter = () => {
    try {
      sessionStorage.setItem('jh-entered', '1');
    } catch {
      // ignore if storage unavailable
    }
    setEntered(true);
  };

  return (
    <LanguageProvider>
      <AnimatePresence>
        {!entered && <SplashScreen key="splash" onEnter={handleEnter} />}
      </AnimatePresence>

      <AnimatePresence>
        {entered && (
          <motion.div
            key="site"
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <WaveDivider angle={-0.5} ornament />
              <Services />
              <WaveDivider angle={0.6} />
              <Testimonials />
              <WaveDivider hidden />
              <Influences />
              <Gallery />
              <WaveDivider hidden />
              <Availability />
              <WaveDivider angle={-0.4} ornament />
              <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
