import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { TaxCalculatorSection } from './components/TaxCalculatorSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import{AppSection} from './components/AppSection';
import { IntroSection } from './components/IntroSection';
import { ContactAndFaqSection } from './components/ContactAndFaqSection';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

function App() {
  const isContactPage = window.location.pathname.replace(/\/+$/, '') === '/iletisim';

  if (isContactPage) {
    return (
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <ContactPage />
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#070d18', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AdvantagesSection />
      <TaxCalculatorSection />
      <HowItWorksSection />
      <AppSection />
      <IntroSection />
      <ContactAndFaqSection />
      <Footer />
    </div>
  );
}

export default App;