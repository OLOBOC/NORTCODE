'use client';

import { ArrowUp, Mail, Send } from 'lucide-react';
import NortcodeLogo from './NortcodeLogo';

export default function Footer({ onOpenLegalModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-surface border-t border-brand-border text-brand-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <NortcodeLogo size="md" showBadge={false} />

            <p className="text-xs text-brand-dim max-w-sm leading-relaxed">
              Estudio digital independiente especializado en desarrollo web a medida, digitalización y rendimiento extremo. Soluciones económicas y profesionales para cada bolsillo.
            </p>

            <div className="pt-1 flex items-center gap-3 font-mono text-[11px] text-brand-dim">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SERVICIOS ONLINE EN TODA ESPAÑA
              </span>
              <span>•</span>
              <span>UE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-brand-text text-xs uppercase tracking-wider font-bold">
              Navegación
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-brand-cyan transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-cyan transition-colors">Soluciones Web</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-brand-cyan transition-colors">Configurador de Proyecto</a>
              </li>
              <li>
                <a href="#auditoria" className="hover:text-brand-cyan transition-colors">Auditoría Gratuita</a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-brand-cyan transition-colors">Casos Reales & Demos</a>
              </li>
              <li>
                <a href="#sobre-nortcode" className="hover:text-brand-cyan transition-colors">Sobre Nortcode (Omar)</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-cyan transition-colors">Solicitar Presupuesto</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-brand-text text-xs uppercase tracking-wider font-bold">
              Cumplimiento Legal (España / UE)
            </div>
            <p className="text-[11px] text-brand-dim leading-relaxed">
              Adaptado rigurosamente a la normativa de protección de datos (RGPD, LOPDGDD) y comercio electrónico (LSSI-CE).
            </p>
            <ul className="space-y-2 pt-1">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('aviso')}
                  className="hover:text-brand-cyan text-left transition-colors cursor-pointer"
                >
                  Aviso Legal (LSSI-CE)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('privacidad')}
                  className="hover:text-brand-cyan text-left transition-colors cursor-pointer"
                >
                  Política de Privacidad (RGPD)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('cookies')}
                  className="hover:text-brand-cyan text-left transition-colors cursor-pointer"
                >
                  Política de Cookies
                </button>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-cyan text-black hover:bg-white text-xs font-semibold transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Solicitar Presupuesto</span>
              </a>

              <a
                href="mailto:oloboc.digitalbusiness@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Correo Oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-brand-dim">
          <div>
            &copy; {new Date().getFullYear()} NORTCODE. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-brand-dim">Ingeniería & Diseño Digital · España</span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
