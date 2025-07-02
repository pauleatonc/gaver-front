import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/Layout/AppAppBar';
import Hero from '../components/Landing/Hero';
import LogoCollection from '../components/Landing/LogoCollection';
import Highlights from '../components/Landing/Highlights';
import Pricing from '../components/Landing/Pricing';
import Features from '../components/Landing/Features';
import Testimonials from '../components/Landing/Testimonials';
import FAQ from '../components/Landing/FAQ';
import Footer from '../components/Layout/Footer';

export default function MarketingPage() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
