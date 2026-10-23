'use client';

import { useState } from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import CookieBanner from './CookieBanner';
import Footer from './Footer';
import LegalModals from './LegalModals';
import PricingOverview from './PricingOverview';

export default function PricingLanding() {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  return (
    <div className="relative flex min-h-screen flex-col bg-brand-bg text-brand-text selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Header />

      <main className="flex-grow">
        <PricingOverview />
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
