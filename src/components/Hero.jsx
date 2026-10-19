'use client';

import { ArrowRight, CheckCircle2, Sparkles, Smartphone, ShieldCheck, Clock, Eye, Gauge, Zap, MessageCircle, Code2, Globe, Cpu } from 'lucide-react';

export default function Hero() {
  const marqueeItems = [
    'NEXT.JS 15 SSR',
    'REACT 19',
    'GIJÓN · ASTURIAS 43.5322° N, 5.6611° W',
    'SCORE 100 GOOGLE PAGESPEED',
    'CLOUDFLARE EDGE CDN',
    'SOLUCIONES PARA TODOS LOS BOLSILLOS',
    'TAILWIND CSS',
    '0% PLANTILLAS GENÉRICAS',
    'AUTOMATIZACIÓN CON IA & N8N',
    'CÓDIGO 100% TUYO',
  ];

  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-radial-gradient">
      {/* Background High-Tech Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-brand-cyan/15 via-blue-600/10 to-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Studio Tech Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs font-mono text-brand-muted shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-brand-text font-semibold">ESTUDIO DE INGENIERÍA & DISEÑO WEB</span>
            <span className="text-brand-dim">|</span>
            <span className="text-brand-cyan font-semibold">SOLUCIONES A TU MEDIDA</span>
          </div>

          {/* Primary Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-brand-text leading-[1.08]">
            Ingeniería web de <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-cyan to-blue-500">
              alto impacto
            </span>{' '}
            accesible para cualquier negocio.
          </h1>

          {/* Action-Oriented Editorial Subtitle */}
          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed font-normal">
            Creamos desde <strong className="text-brand-text font-semibold">webs económicas para pequeños negocios y autónomos</strong> hasta <strong className="text-brand-text font-semibold">webs corporativas de empresa, portafolios prémium y modernización de webs lentas</strong>. Tecnología avanzada con soluciones adaptadas a cada bolsillo.
          </p>

          {/* Action Buttons: WhatsApp First + Configurator + Free Audit */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <a
              href="https://wa.me/34600000000?text=Hola%20Omar,%20he%20visto%20la%20web%20de%20Nortcode%20y%20quiero%20hacerte%20una%20consulta%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl transition-all duration-200 shadow-xl shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Consultar por WhatsApp</span>
            </a>

            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-brand-text bg-brand-surface hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/50 rounded-2xl transition-all shadow-sm"
            >
              <Eye className="w-4 h-4 text-brand-cyan" />
              <span>Configurador de Proyecto</span>
            </a>

            <a
              href="#auditoria"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-rose-500 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 rounded-2xl transition-all"
            >
              <Gauge className="w-4 h-4" />
              <span>Auditar Web Existente Gratis</span>
            </a>
          </div>

          {/* Guarantees List */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-dim font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Soluciones económicas para todos los bolsillos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Carga en &lt; 0.5s en smartphones</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-brand-text">Código 100% de tu propiedad</span>
            </div>
          </div>
        </div>

        {/* Studio Live Engineering Dials (Score 100, Edge Latency, Bespoke Code, Support) */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-border backdrop-blur-xl space-y-2 shadow-lg hover:border-brand-border-light transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-brand-dim">
              <span>GOOGLE PAGESPEED</span>
              <Gauge className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-text">
              100 <span className="text-xs text-emerald-400 font-normal">/ 100</span>
            </div>
            <div className="text-[11px] text-brand-muted">Core Web Vitals óptimos</div>
          </div>

          <div className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-border backdrop-blur-xl space-y-2 shadow-lg hover:border-brand-border-light transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-brand-dim">
              <span>VELOCIDAD DE CARGA</span>
              <Zap className="w-4 h-4 text-brand-cyan" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-text">
              &lt; 0.4s
            </div>
            <div className="text-[11px] text-brand-muted">Edge CDN global ultrarrápido</div>
          </div>

          <div className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-border backdrop-blur-xl space-y-2 shadow-lg hover:border-brand-border-light transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-brand-dim">
              <span>TECNOLOGÍA</span>
              <Cpu className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-brand-text truncate">
              Next.js 15 & React
            </div>
            <div className="text-[11px] text-brand-muted">Sin plantillas lentas ni dependencias</div>
          </div>

          <div className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-border backdrop-blur-xl space-y-2 shadow-lg hover:border-brand-border-light transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-brand-dim">
              <span>ATENCIÓN DIRECTA</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-brand-text">
              WhatsApp 24/7
            </div>
            <div className="text-[11px] text-brand-muted">Hablas con el programador de tu web</div>
          </div>
        </div>
      </div>

      {/* Infinite Animated Marquee Ribbon */}
      <div className="mt-14 border-y border-brand-border/60 bg-brand-surface/50 py-3 overflow-hidden backdrop-blur-sm select-none">
        <div className="flex w-max animate-marquee space-x-8 text-xs font-mono text-brand-dim">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span className="text-brand-text font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
