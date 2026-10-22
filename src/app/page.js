'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ProjectPlanner from '@/components/ProjectPlanner';
import WebAuditTool from '@/components/WebAuditTool';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import CookieBanner from '@/components/CookieBanner';
import MobileHome from '@/components/MobileHome';

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
      <MobileHome />

      <div className="hidden md:flex md:flex-col">
        {/* Navigation Bar with Theme Toggle */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Hero onTransferToContact={handleTransferToContact} />
          <Services />
          <Portfolio />
          <ProjectPlanner onTransferToContact={handleTransferToContact} />
          <WebAuditTool onTransferToContact={handleTransferToContact} />
          <About />
          <ContactForm
            initialData={contactInitialData}
            onOpenLegalModal={openLegalModal}
          />
          <FAQ />
        </main>

        {/* Footer Corporativo sin Enlace de GitHub */}
        <Footer onOpenLegalModal={openLegalModal} />
      </div>

      {/* Modales de Cumplimiento Legal (LSSI-CE, RGPD, Cookies) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={closeLegalModal}
      />

      {/* Banner de Cookies RGPD */}
      <CookieBanner
        onOpenCookiesPolicy={() => openLegalModal('cookies')}
      />
    </div>
  );
}
