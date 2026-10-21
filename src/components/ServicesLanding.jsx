'use client';

import { useState } from 'react';
import Header from './Header';
import EngineeringServices from './EngineeringServices';
import TechStackShowcase from './TechStackShowcase';
import ContactForm from './ContactForm';
import Footer from './Footer';
import LegalModals from './LegalModals';
import CookieBanner from './CookieBanner';

export default function ServicesLanding() {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text flex flex-col selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Header />

      <main className="flex-grow">
        <EngineeringServices />
        <TechStackShowcase />
        <ContactForm
          initialData={null}
          onOpenLegalModal={setActiveLegalModal}
        />
      </main>

      <Footer onOpenLegalModal={setActiveLegalModal} />

      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      <CookieBanner
        onOpenCookiesPolicy={() => setActiveLegalModal('cookies')}
      />
    </div>
  );
}
