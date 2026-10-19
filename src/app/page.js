'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import TechStackShowcase from '@/components/TechStackShowcase';
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
        <Hero />

        {/* 2. Soluciones Web a Medida para Cada Bolsillo + Comparador Antes/Después */}
        <Services />

        {/* 3. Casos Reales con Portadas en Vivo (Audax Motors, DFR Xtra Detail, NailsWell) */}
        <Portfolio />

        {/* 4. Capacidad de Ingeniería Completa (Next.js, React, Node, Python, Laravel, PostgreSQL, Cloudflare, n8n) */}
        <TechStackShowcase />

        {/* 5. Planificador & Configurador de Proyecto Corporativo */}
        <ProjectPlanner onTransferToContact={handleTransferToContact} />

        {/* 6. Diagnóstico de Rendimiento Gratuito */}
        <WebAuditTool onTransferToContact={handleTransferToContact} />

        {/* 7. Sobre Nortcode con Retrato Editorial de Omar & Titulaciones Oficiales */}
        <About />

        {/* 8. Formulario de Presupuesto con Entrega al Correo Oficial */}
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
