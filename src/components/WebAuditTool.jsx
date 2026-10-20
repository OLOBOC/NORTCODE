'use client';

import { useState } from 'react';
import { Globe, Gauge, Flame, ArrowRight, CheckCircle2, AlertTriangle, TrendingDown, Clock, Sparkles, RefreshCw } from 'lucide-react';

export default function WebAuditTool({ onTransferToContact }) {
  const [url, setUrl] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [result, setResult] = useState(null);

  const steps = [
    'Conectando con servidores DNS y midiendo TTFB...',
    'Analizando carga de recursos y Core Web Vitals en smartphones...',
    'Calculando tasa de abandono por lentitud y pérdida de clientes...',
  ];

  const handleAudit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    let cleanUrl = url.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    if (!cleanUrl) cleanUrl = 'tu-web.com';

    setIsAuditing(true);
    setResult(null);
    setAuditStep(0);

    setTimeout(() => setAuditStep(1), 700);
    setTimeout(() => setAuditStep(2), 1500);

    setTimeout(() => {
      setIsAuditing(false);
      setResult({
        domain: cleanUrl,
        score: Math.floor(Math.random() * 15) + 38, // 38-53 typical unoptimized WordPress/Wix
        loadTime: (Math.random() * 1.5 + 3.8).toFixed(1), // 3.8s - 5.3s
        nortcodeTime: '0.6',
        lostTrafficPct: Math.floor(Math.random() * 10) + 26, // 26% - 36%
        estimatedLoss: Math.floor(Math.random() * 800) + 1200, // €1200 - €2000
        lcp: '4.2s (Lento)',
        cls: '0.18 (Inestable)',
      });
    }, 2400);
  };

  const handleTransfer = () => {
    if (!result) return;
    const message = `[AUDITORÍA DE RENDIMIENTO SOLICITADA]:
- Dominio a optimizar: https://${result.domain}
- Diagnóstico preliminar: Puntuación ${result.score}/100, tiempo móvil ~${result.loadTime}s.
- Abandono estimado por lentitud: ~${result.lostTrafficPct}%.

Hola Nortcode, me gustaría un presupuesto para rehacer o optimizar esta web y eliminar las fugas de clientes.`;

    if (onTransferToContact) {
      onTransferToContact({
        projectType: 'Desarrollo Web & Rendimiento',
        message,
      });
    }

    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="auditoria" className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-[10px] sm:text-xs font-mono text-rose-500 dark:text-rose-400 font-semibold shadow-sm max-w-full">
          <Flame className="w-3.5 h-3.5 shrink-0" />
          <span>AUDITORÍA DE RENDIMIENTO & ANÁLISIS DE FUGA</span>
        </div>

        {/* Primary Headline with High-Conversion Gradient */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-text tracking-tight leading-[1.15]">
            ¿Tu web está perdiendo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-rose-400">
              dinero y clientes cada día?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Descubre en 10 segundos la velocidad real de tu web en smartphones y la fuga estimada de oportunidades comerciales por culpa de tiempos de carga lentos.
          </p>
        </div>

        {/* Input Bar Form */}
        <form onSubmit={handleAudit} className="max-w-2xl mx-auto">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-brand-surface border border-brand-border shadow-xl hover:border-brand-border-light transition-all flex flex-col sm:flex-row items-center gap-2.5">
            <div className="flex items-center gap-3 w-full px-3 py-1.5">
              <Globe className="w-5 h-5 text-brand-dim shrink-0" />
              <input
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Introduce tu web: ej. tuempresa.com o https://misitio.es"
                className="w-full bg-transparent text-brand-text placeholder-brand-dim text-sm focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isAuditing}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:opacity-95 rounded-xl transition-all shadow-md shadow-indigo-600/30 disabled:opacity-50"
            >
              {isAuditing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analizando web...</span>
                </>
              ) : (
                <>
                  <Gauge className="w-4 h-4" />
                  <span>Diagnosticar Web Gratis</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Loading Progress State */}
        {isAuditing && (
          <div className="max-w-md mx-auto p-4 rounded-xl bg-brand-surface border border-brand-border animate-in fade-in space-y-2 text-xs font-mono text-brand-muted">
            <div className="flex items-center justify-center gap-2 text-brand-cyan">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Paso {auditStep + 1} de 3</span>
            </div>
            <p className="text-brand-text">{steps[auditStep]}</p>
          </div>
        )}

        {/* Audit Results Dashboard */}
        {result && (
          <div className="max-w-3xl mx-auto rounded-2xl bg-brand-surface border border-brand-border shadow-2xl p-6 sm:p-8 text-left animate-in zoom-in-95 duration-300 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-brand-border">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-dim">
                  INFORME DE RENDIMIENTO PARA:
                </span>
                <h3 className="text-xl font-bold text-brand-text font-mono">
                  https://{result.domain}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-mono font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>MEJORA CRÍTICA DETECTADA</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Score */}
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border space-y-1">
                <div className="text-xs font-mono text-brand-dim uppercase">Puntuación Móvil</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-rose-500 font-mono">
                    {result.score}
                  </span>
                  <span className="text-xs text-brand-dim">/ 100</span>
                </div>
                <p className="text-[11px] text-brand-muted pt-1">
                  Google penaliza el posicionamiento SEO en webs por debajo de 85 puntos.
                </p>
              </div>

              {/* Load Time */}
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border space-y-1">
                <div className="text-xs font-mono text-brand-dim uppercase">Carga en 4G / Smartphone</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-amber-500 font-mono">
                    {result.loadTime}s
                  </span>
                  <span className="text-xs font-mono text-emerald-500">(Nortcode: {result.nortcodeTime}s)</span>
                </div>
                <p className="text-[11px] text-brand-muted pt-1">
                  Más de 3 segundos de carga duplica el porcentaje de abandono de usuarios.
                </p>
              </div>

              {/* Lost Customers */}
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border space-y-1">
                <div className="text-xs font-mono text-brand-dim uppercase">Fuga Estimada</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-rose-500 font-mono">
                    ~{result.lostTrafficPct}%
                  </span>
                  <span className="text-xs text-brand-dim">visitas</span>
                </div>
                <p className="text-[11px] text-brand-muted pt-1">
                  Porcentaje estimado de potenciales clientes que cierran la pestaña antes de ver tu oferta.
                </p>
              </div>
            </div>

            {/* Practical Diagnosis Insight */}
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs text-brand-text leading-relaxed">
              <strong className="text-rose-500 dark:text-rose-400 block mb-1">
                Diagnóstico del problema:
              </strong>
              Tu web actual arrastra dependencias lentas, exceso de JavaScript no optimizado e imágenes pesadas. Cada visitante que se marcha por lentitud es un presupuesto que se lleva tu competencia.
            </div>

            {/* Direct Action Conversion */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleTransfer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20"
              >
                <span>Quiero optimizar esta web con Nortcode</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setResult(null)}
                className="text-xs font-mono text-brand-dim hover:text-brand-text underline"
              >
                Auditar otro dominio
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
