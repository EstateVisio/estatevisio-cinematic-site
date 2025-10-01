import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceSection from '@/components/ServiceSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import VisionSection from '@/components/VisionSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-charcoal">
        {/* Navigation Bar */}
        <Navigation />
        
        {/* Language Switcher - Fixed Top Right */}
        <div className="fixed top-6 right-6 z-50">
          <LanguageSwitcher />
        </div>

        {/* All Sections */}
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <DifferentiatorsSection />
        <VisionSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
