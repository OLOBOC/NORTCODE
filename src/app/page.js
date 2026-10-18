'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import NeedMatcher from '@/components/NeedMatcher';
import Portfolio from '@/components/Portfolio';
import Methodology from '@/components/Methodology';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'aviso' | 'privacidad' | 'cookies' | null
  const [contactInitialData, setContactInitialData] = useState(null);

  const handleTransferToContact = (data) => {
    setContactInitialData(data);
  };

  const openLegalModal = (modalType) => {
    setActiveLegalModal(modalType);
  };

  const closeLegalModal = () => {
    setActiveLegalModal(null);
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text flex flex-col selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services & Three Pillars */}
        <Services />

        {/* Dynamic Project Need Matcher & Interactive Wizard */}
        <NeedMatcher onTransferToContact={handleTransferToContact} />

        {/* Real Portfolio & Live Projects */}
        <Portfolio />

        {/* Methodology (Cómo Trabajo) */}
        <Methodology />

        {/* About Nortcode (Profile, DAW, DAM, STI) */}
        <About />

        {/* Contact Section & Direct Resend Email Integration */}
        <ContactForm
          initialData={contactInitialData}
          onOpenLegalModal={openLegalModal}
        />
      </main>

      {/* Footer */}
      <Footer onOpenLegalModal={openLegalModal} />

      {/* Modals for Legal Compliance (LSSI, RGPD, Cookies) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={closeLegalModal}
      />

      {/* Cookie Banner */}
      <CookieBanner
        onOpenCookiesPolicy={() => openLegalModal('cookies')}
      />
    </div>
  );
}
