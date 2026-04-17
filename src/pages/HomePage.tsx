import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Availability from '../components/sections/Availability';
import Contact from '../components/sections/Contact';
import WaveDivider from '../components/ui/WaveDivider';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  return (
    <main>
      <SEOHead
        titleEN="Julle Havva | Kusum Modak Massage — Algarve, Portugal"
        titlePT="Julle Havva | Massagem Kusum Modak — Algarve, Portugal"
        descriptionEN="Certified Kusum Modak massage therapist in the Algarve. Deep Ayurvedic yoga massage rooted in presence, breath and touch."
        descriptionPT="Massoterapeuta certificada no Algarve. Massagem de yoga ayurvédico profunda, enraizada na presença, respiração e toque."
      />
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
