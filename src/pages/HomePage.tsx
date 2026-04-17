import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Availability from '../components/sections/Availability';
import Contact from '../components/sections/Contact';
import WaveDivider from '../components/ui/WaveDivider';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WaveDivider angle={-0.5} ornament />
      <Services />
      <WaveDivider angle={0.6} />
      <Testimonials />
      <WaveDivider hidden />
      <Availability />
      <WaveDivider angle={-0.4} ornament />
      <Contact />
    </main>
  );
}
