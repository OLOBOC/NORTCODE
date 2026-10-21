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
      {/* Navigation Bar with Theme Toggle */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section: Estudio de Ingeniería & Diseño Web de Alto Nivel */}
        <Hero onTransferToContact={handleTransferToContact} />

        {/* 2. Soluciones web y comparador */}
        <Services />

        {/* 3. Casos reales y propuestas visuales */}
        <Portfolio />

        {/* 4. Planificador y configurador de proyecto */}
        <ProjectPlanner onTransferToContact={handleTransferToContact} />

        {/* 5. Diagnóstico de rendimiento */}
        <WebAuditTool onTransferToContact={handleTransferToContact} />

        {/* 6. Sobre Nortcode */}
        <About />

        {/* 7. Contacto */}
        <ContactForm
          initialData={contactInitialData}
          onOpenLegalModal={openLegalModal}
        />
      </main>

      {/* Footer Corporativo sin Enlace de GitHub */}
      <Footer onOpenLegalModal={openLegalModal} />

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
