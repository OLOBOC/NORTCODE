'use client';

import { Send, ArrowUp, MapPin } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

export default function Footer({ onOpenLegalModal }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Soluciones Web', href: '/#servicios' },
    { label: 'Ingeniería & Cloud', href: '/servicios#ingenieria' },
    { label: 'Precios', href: '/precios' },
    { label: 'Proyectos Reales', href: '/#proyectos' },
    { label: 'Configurador IA', href: '/#configurador' },
    { label: 'Auditoría Gratis', href: '/#auditoria' },
    { label: 'Sobre Nortcode', href: '/#sobre-nortcode' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-brand-card border-t border-brand-border text-brand-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <NortcodeLogo size="md" showBadge={false} />
            <p className="text-xs text-brand-dim max-w-xs leading-relaxed">
              Estudio digital independiente especializado en desarrollo web a medida, digitalización y rendimiento extremo. Soluciones para cada presupuesto.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span>Disponible · España & Toda la UE</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <div className="font-mono text-brand-text text-[11px] uppercase tracking-widest font-bold">Navegación</div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-brand-cyan transition-colors hover:pl-1 duration-200 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div className="space-y-4">
            <div className="font-mono text-brand-text text-[11px] uppercase tracking-widest font-bold">Legal (España / UE)</div>
            <ul className="space-y-2">
              {[
                { label: 'Aviso Legal (LSSI-CE)', key: 'aviso' },
                { label: 'Política de Privacidad (RGPD)', key: 'privacidad' },
                { label: 'Política de Cookies', key: 'cookies' },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => onOpenLegalModal(item.key)}
                    className="hover:text-brand-cyan text-left transition-colors cursor-pointer hover:pl-1 duration-200 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-cyan text-black text-xs font-bold hover:bg-white transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Cuéntame tu caso
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-brand-dim">
          <div>© {new Date().getFullYear()} NORTCODE · Ingeniería & Diseño Digital · España</div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Volver al inicio"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
