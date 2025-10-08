import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VideoSection from '@/components/VideoSection';
import ServiceSection from '@/components/ServiceSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import VisionSection from '@/components/VisionSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import logo from '@/assets/estatevision-logo.png';
import MobileNav from '@/components/MobileNav';

const Index = () => {
  const isVisible = useScrollVisibility();
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Logo - Fixed Top Left (Desktop) or Center (Mobile) */}
      <Link 
        to="/" 
        className={cn(
          "fixed top-6 left-20 lg:left-6 z-50 transition-all duration-300",
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
          "fixed top-6 right-6 z-50 transition-all duration-300 hidden lg:block",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
          <LanguageSwitcher />
        </div>

        {/* All Sections */}
        <HeroSection aboutRef={aboutSectionRef} />
        <AboutSection ref={aboutSectionRef} />
        <VideoSection />
        <ServiceSection />
        <DifferentiatorsSection />
        <VisionSection />
        <CTASection />
        <Footer />
      </div>
  );
};

export default Index;
