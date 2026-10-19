'use client';

import { ArrowUp, Globe, Shield, MessageCircle, Send } from 'lucide-react';
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
              Estudio digital especializado en páginas web profesionales y económicas para todo tipo de negocios, digitalización y automatización con IA. Sin costes inflados ni cuotas sorpresa.
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
                <a href="#servicios" className="hover:text-brand-cyan transition-colors">Soluciones & Precios</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-brand-cyan transition-colors">Simulador Visual Web</a>
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
              Adaptado rigurosamente a la normativa europea de protección de datos (RGPD, LOPDGDD) y comercio electrónico (LSSI-CE).
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
                <span>Pedir Presupuesto</span>
              </a>

              <a
                href="https://wa.me/34600000000?text=Hola%20Omar,%20quiero%20informaci%C3%B3n%20para%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
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
            <a
              href="https://github.com/oloboc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
