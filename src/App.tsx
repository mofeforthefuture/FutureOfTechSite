import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ThemesSection } from './components/ThemesSection';
import { SpeakersSection } from './components/SpeakersSection';
import { AgendaSection } from './components/AgendaSection';
import { PartnersSection } from './components/PartnersSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <SpeakersSection />
      <AgendaSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
