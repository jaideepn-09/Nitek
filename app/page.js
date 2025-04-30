'use client;'
import React from 'react';
import Navigation from '../pages/Navigation';
import HeroSection from '../pages/HeroSection';
import TrustedBy from '../pages/TrustedBy';
import SolutionsSection from '../pages/SolutionSection';
import StatsSection from '../pages/StatsSection';
import TestimonialsSection from '../pages/IndustriesSection';
import DemoSection from '../pages/DemoSection';
import ContactSection from '../pages/ContactSection';
import FeaturesSection from '../pages/FeatureSection';
import Footer from '../pages/Footer';
import AboutPage from '../pages/AboutPage';

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutPage />
      <TrustedBy />
      <SolutionsSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection  />
      <DemoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
