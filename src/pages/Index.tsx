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
import { Link } from 'react-router-dom';
import logo from '@/assets/estatevision-logo.png';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-charcoal">
        {/* Logo - Fixed Top Left */}
        <Link to="/" className="fixed top-6 left-6 z-50">
          <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
        </Link>

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
