'use client';

import { ArrowRight, CheckCircle2, Sparkles, Smartphone, ShieldCheck, Clock, Eye, Gauge, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-muted shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-brand-text font-medium">SOLUCIONES DIGITALES REALES</span>
            <span className="text-brand-dim">•</span>
            <span className="text-brand-cyan hidden sm:inline font-semibold">PRESUPUESTOS A MEDIDA</span>
          </div>

          {/* Business-Driven Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.12]">
            Páginas web profesionales y económicas para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-cyan to-blue-500">
              hacer crecer tu negocio.
            </span>
          </h1>

          {/* Action-Oriented Subtitle */}
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Diseñamos tu presencia online a medida, rápida en smartphones y enfocada en conseguir clientes reales. Sin plantillas lentas, sin costes inflados de agencias y sin cuotas mensuales sorpresa.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all duration-200 shadow-lg shadow-brand-cyan/20 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
            >
              <span>Pedir Presupuesto Sin Compromiso</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-brand-text bg-brand-surface hover:bg-brand-elevated border border-brand-border hover:border-brand-border-light rounded-xl transition-all"
            >
              <Eye className="w-4 h-4 text-brand-cyan" />
              <span>Ver Simulador Visual</span>
            </a>

            <a
              href="#auditoria"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-rose-500 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 rounded-xl transition-all"
            >
              <Gauge className="w-4 h-4" />
              <span>Auditar Mi Web Gratis</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-dim font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Precios cerrados desde 290€</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Carga instantánea en móviles</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Propiedad 100% tuya</span>
            </div>
          </div>
        </div>

        {/* Visual Highlights Showcase (3 Clean Value Cards) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-3xl bg-brand-surface/80 border border-brand-border backdrop-blur-md shadow-xl hover:border-brand-border-light transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text">Páginas Web que Venden</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Diseño limpio y moderno optimizado para que los clientes te llamen o te escriban por WhatsApp en un toque desde el móvil.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-brand-surface/80 border border-brand-border backdrop-blur-md shadow-xl hover:border-brand-border-light transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text">Entrega Rápida en 5-10 Días</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Sin retrasos eternos de meses. Trabajamos con una metodología ágil para que tu web empiece a captar clientes de inmediato.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-brand-surface/80 border border-brand-border backdrop-blur-md shadow-xl hover:border-brand-border-light transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text">Trato Directo con Omar</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Hablas directamente con el desarrollador titulado que programa tu web. Respuestas inmediatas y soporte continuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
