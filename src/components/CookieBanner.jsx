'use client';

import { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check, X } from 'lucide-react';

export default function CookieBanner({ onOpenCookiesPolicy }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nortcode_cookie_consent');
    if (!consent) {
      // Small delay for smooth entry
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nortcode_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleOnlyEssential = () => {
    localStorage.setItem('nortcode_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="p-4 sm:p-5 rounded-2xl bg-brand-surface/98 border border-brand-border shadow-2xl backdrop-blur-xl space-y-3.5">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-brand-card border border-brand-border text-brand-cyan shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <span>Privacidad & Cookies</span>
              <span className="text-[10px] font-mono text-emerald-400 font-normal">RGPD</span>
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Utilizamos cookies técnicas necesarias para garantizar la navegación y la seguridad de este sitio. No usamos rastreadores publicitarios invasivos de terceros.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-brand-border/60">
          <button
            onClick={onOpenCookiesPolicy}
            className="text-[11px] font-mono text-brand-dim hover:text-brand-cyan underline focus:outline-none"
          >
            Leer Política
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOnlyEssential}
              className="px-3 py-1.5 text-xs font-medium text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border rounded-lg transition-colors"
            >
              Solo Técnicas
            </button>
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 text-xs font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-lg transition-colors"
            >
              Aceptar Todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
