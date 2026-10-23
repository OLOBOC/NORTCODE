'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import About from './About';
import CookieBanner from './CookieBanner';
import ContactForm from './ContactForm';
import EngineeringServices from './EngineeringServices';
import FAQ from './FAQ';
import LegalModals from './LegalModals';
import MobileHeader from './MobileHeader';
import Portfolio from './Portfolio';
import PricingOverview from './PricingOverview';
import ProjectPlanner from './ProjectPlanner';
import Services from './Services';
import TechStackShowcase from './TechStackShowcase';
import WebAuditTool from './WebAuditTool';

const pageInfo = {
  soluciones: {
    title: 'Soluciones web',
    intro: 'Una web pensada para tu negocio, tus clientes y tus objetivos.',
  },
  ingenieria: {
    title: 'Ingeniería & Cloud',
    intro: 'Software a medida, automatización e infraestructura preparada para crecer.',
  },
  precios: {
    title: 'Precios claros y a medida',
    intro: 'Paquetes, trabajo por horas y proyectos por fases, según lo que necesite tu negocio.',
  },
  proyectos: {
    title: 'Proyectos reales',
    intro: 'Una muestra de cómo convertimos necesidades concretas en soluciones digitales.',
  },
  configurador: {
    title: 'Diseña tu proyecto',
    intro: 'Define lo que necesitas y prepara una primera orientación para tu idea.',
  },
  auditoria: {
    title: 'Rendimiento web',
    intro: 'Explora oportunidades para mejorar la velocidad y experiencia de tu web.',
  },
  nortcode: {
    title: 'Sobre Nortcode',
    intro: 'Trato directo, decisiones técnicas claras y soluciones ajustadas a cada proyecto.',
  },
  contacto: {
    title: 'Contacto',
    intro: 'Cuéntanos qué necesitas. Te responderemos para valorar juntos los siguientes pasos.',
  },
};

export default function MobileSectionPage({ section }) {
  const router = useRouter();
  const [activeLegalModal, setActiveLegalModal] = useState(null);
  const [contactInitialData, setContactInitialData] = useState(null);
  const page = pageInfo[section];

  useEffect(() => {
    if (section !== 'contacto') return;

    const storedData = window.sessionStorage.getItem('nortcode-mobile-contact');
    if (storedData) {
      setContactInitialData(JSON.parse(storedData));
      window.sessionStorage.removeItem('nortcode-mobile-contact');
    }
  }, [section]);

  const transferToContact = (data) => {
    window.sessionStorage.setItem('nortcode-mobile-contact', JSON.stringify(data));
    router.push('/movil/contacto');
  };

  const handleContentClick = (event) => {
    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest('a[href="#contacto"]');
    if (anchor) {
      event.preventDefault();
      router.push('/movil/contacto');
    }
  };

  if (!page) {
    return (
      <main className="min-h-screen bg-brand-bg px-5 py-24 text-center text-brand-text">
        <h1 className="text-2xl font-bold">No encontramos este apartado</h1>
        <a className="mt-4 inline-block text-brand-cyan underline" href="/">
          Volver al inicio
        </a>
      </main>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-brand-bg text-brand-text md:hidden">
        <MobileHeader backHref="/" backLabel="Volver al inicio" showContact={section !== 'contacto'} />
        <main className="mx-auto max-w-3xl px-4 pb-12 pt-20">
          <header className="mb-5 rounded-2xl border border-brand-border bg-brand-surface p-5">
            <p className="text-[10px] font-mono font-semibold tracking-widest text-brand-cyan">
              NORTCODE · {section.toUpperCase()}
            </p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight">{page.title}</h1>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">{page.intro}</p>
          </header>

          <div onClick={handleContentClick}>
            {section === 'soluciones' && <Services />}
            {section === 'ingenieria' && (
              <>
                <EngineeringServices />
                <TechStackShowcase />
              </>
            )}
            {section === 'precios' && <PricingOverview showIntro={false} />}
            {section === 'proyectos' && <Portfolio />}
            {section === 'configurador' && (
              <ProjectPlanner onTransferToContact={transferToContact} />
            )}
            {section === 'auditoria' && (
              <WebAuditTool onTransferToContact={transferToContact} />
            )}
            {section === 'nortcode' && <About />}
            {section === 'contacto' && (
              <>
                <ContactForm
                  initialData={contactInitialData}
                  onOpenLegalModal={setActiveLegalModal}
                />
                <FAQ />
              </>
            )}
          </div>

          {section !== 'contacto' && (
            <div className="mt-6 rounded-2xl border border-brand-border bg-brand-surface p-4 text-center">
              <p className="text-sm font-semibold">¿Quieres hablar de este apartado?</p>
              <button
                type="button"
                onClick={() => router.push('/movil/contacto')}
                className="mt-3 rounded-xl bg-brand-cyan px-4 py-2.5 text-xs font-bold text-black"
              >
                Contactar con Nortcode
              </button>
            </div>
          )}
        </main>
        <LegalModals
          activeModal={activeLegalModal}
          onClose={() => setActiveLegalModal(null)}
        />
        <CookieBanner
          onOpenCookiesPolicy={() => setActiveLegalModal('cookies')}
        />
      </div>
      <main className="hidden min-h-screen items-center justify-center bg-brand-bg px-6 text-center text-brand-text md:flex">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">Este apartado está optimizado para móvil</h1>
          <p className="mt-3 text-sm text-brand-muted">
            En ordenador puedes seguir usando la web principal.
          </p>
          <a
            href="/"
            className="mt-5 inline-flex rounded-xl bg-brand-cyan px-4 py-3 text-sm font-bold text-black"
          >
            Ir a Nortcode
          </a>
        </div>
      </main>
    </>
  );
}
