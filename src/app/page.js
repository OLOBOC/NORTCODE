'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WebSimulator from '@/components/WebSimulator';
import WebAuditTool from '@/components/WebAuditTool';
import Portfolio from '@/components/Portfolio';
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
        {/* 1. Hero Section (Comercial, claro, sin tecnicismos excesivos) */}
        <Hero />

        {/* 2. Soluciones & Precios (Web, Digitalización, Automatización + Comparador Antes/Después) */}
        <Services />

        {/* 3. Perspectiva Visual & Simulador Interactivo de Web */}
        <WebSimulator onTransferToContact={handleTransferToContact} />

        {/* 4. Lead Magnet: Auditoría Rápida & Pérdida de Clientes por Lentitud */}
        <WebAuditTool onTransferToContact={handleTransferToContact} />

        {/* 5. Portfolio Visual con Enlaces en Vivo (Audax Motors, DFR Xtra Detail, NailsWell) */}
        <Portfolio />

        {/* 6. Sobre Nortcode con la Fotografía del Fundador (Omar) & Titulaciones Oficiales */}
        <About />

        {/* 7. Formulario de Presupuesto Seguro & Acceso Directo a WhatsApp */}
        <ContactForm
          initialData={contactInitialData}
          onOpenLegalModal={openLegalModal}
        />
      </main>

      {/* Footer con Accesos Legales */}
      <Footer onOpenLegalModal={openLegalModal} />

      {/* Modals for Legal Compliance (LSSI-CE, RGPD, Cookies) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={closeLegalModal}
      />

      {/* Cookie Banner RGPD */}
      <CookieBanner
        onOpenCookiesPolicy={() => openLegalModal('cookies')}
      />
    </div>
  );
}
