import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MissionSection from './sections/MissionSection';
import StatsSection from './sections/StatsSection';
import JourneySection from './sections/JourneySection';
import ProfileSection from './sections/ProfileSection';
import QuoteCarousel from './sections/QuoteCarousel';
import ImageGallery from './sections/ImageGallery';
import CallToAction from './sections/CallToAction';
import ScrollToTop from './components/ScrollToTop';
import './styles/custom.css';

const StoryOfMSI: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="relative overflow-hidden">
      {/* Grain texture overlay */}
      <div className="fixed inset-0 noise-bg opacity-[0.03] pointer-events-none z-[1]" />
      
      {/* Parallax background element */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 z-[-2]"
        style={{ y: backgroundY }}
      />
      
      <div className="min-h-[4000px]">
  <HeroSection />
  <MissionSection />
  <StatsSection />
  <JourneySection />
  <ProfileSection />
  <QuoteCarousel />
  <ImageGallery />
  <CallToAction />
</div>
    </div>
  );
};

export default StoryOfMSI;