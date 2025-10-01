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
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import logo from '@/assets/estatevision-logo.png';

const Index = () => {
  const isVisible = useScrollVisibility();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-charcoal">
        {/* Logo - Fixed Top Left */}
        <Link 
          to="/" 
          className={cn(
            "fixed top-6 left-6 z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          )}
        >
          <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
        </Link>

        {/* Navigation Bar */}
        <Navigation />
        
        {/* Language Switcher - Fixed Top Right */}
        <div 
          className={cn(
            "fixed top-6 right-6 z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          )}
        >
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
