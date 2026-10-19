'use client';

import { ExternalLink, ArrowUpRight, CheckCircle2, Globe, Sparkles, Eye, ShieldCheck, Zap } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 'audax-motors',
      title: 'Audax Motors',
      category: 'AUTOMOCIÓN & CONCESIONARIO DE ALTA GAMA',
      domain: 'audax-motors.vercel.app',
      tagline: 'Plataforma web con catálogo dinámico de vehículos de ocasión y entrega inmediata.',
      description: 'Diseño sobrio de lujo y alta gama con fondo oscuro, tipografía editorial, catálogo filtrable por smartphone y llamada/WhatsApp con 1 toque.',
      url: 'https://audax-motors.vercel.app/',
      image: '/portfolio-audax.png',
      badges: ['Next.js 15', 'Catálogo Dinámico', 'Luxury UI', 'Mobile First', 'Stripe Ready'],
      metrics: { speed: '0.4s', seo: '100/100', status: 'PRODUCCIÓN' },
      accent: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    },
    {
      id: 'dfr-detail',
      title: 'DFR Xtra Detail',
      category: 'DETAILING & ESTÉTICA AUTOMOTRIZ VIP',
      domain: 'dfr-xtra-detail.vercel.app',
      tagline: 'Landing page comercial de alto impacto para tratamientos cerámicos 9H y restauración.',
      description: 'Atmósfera visual oscura con acentos verde neón, ticker técnico en vivo, tarjetas de estándares de calidad y embudo de conversión directa a cita previa.',
      url: 'https://dfr-xtra-detail.vercel.app/#inicio',
      image: '/portfolio-dfr.png',
      badges: ['React 19', 'Diseño Dark Prémium', 'Conversión Directa', 'Core Web Vitals 100', 'Gijón'],
      metrics: { speed: '0.3s', seo: '100/100', status: 'PRODUCCIÓN' },
      accent: 'from-emerald-500/20 via-lime-500/10 to-transparent',
    },
    {
      id: 'nailswell-saas',
      title: 'NailsWell & SaaS Platform',
      category: 'PLATAFORMA DE CITAS & RESERVAS A MEDIDA',
      domain: 'nailswell.com (Demo)',
      tagline: 'Portal de citas automatizadas para locales de estética y profesionales independientes.',
      description: 'Permite a los negocios independizarse de directorios comunes con comisiones abusivas mediante su propio sistema de reservas web 24/7 con recordatorios.',
      url: 'https://oloboc.github.io/',
      image: null, // Interactive high-tech render
      badges: ['Next.js', 'Firebase Realtime', 'Sin Comisiones', 'Panel Clientes', 'WhatsApp Sync'],
      metrics: { speed: '0.5s', seo: '98/100', status: 'DEMO VIVA' },
      accent: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-border">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span>CASOS REALES & PORTADAS VERIFICADAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight">
              Proyectos reales que ya generan clientes
            </h2>
            <p className="text-base text-brand-muted">
              Aquí puedes ver las portadas reales y navegar directamente a las plataformas en vivo. Acabados de nivel internacional desarrollados a medida por Nortcode.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-dim flex items-center gap-2 bg-brand-surface px-4 py-2 rounded-xl border border-brand-border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-brand-text font-semibold">PORTADAS EN VIVO · CERO PLANTILLAS</span>
          </div>
        </div>

        {/* Visual Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl hover:-translate-y-1 relative"
            >
              <div>
                {/* Visual Window Mockup Frame */}
                <div className="p-3.5 bg-brand-card/90 border-b border-brand-border">
                  <div className="rounded-2xl overflow-hidden border border-brand-border/80 bg-black shadow-inner">
                    {/* Browser Address Bar */}
                    <div className="px-3.5 py-2 bg-slate-900 border-b border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-slate-400 flex items-center gap-1 text-[10px] truncate max-w-[170px]">
                        <Globe className="w-3 h-3 text-slate-500 shrink-0" />
                        <span className="truncate">https://{proj.domain}</span>
                      </div>
                      <span className="text-[9px] text-emerald-400 font-bold">{proj.metrics.status}</span>
                    </div>

                    {/* Screenshot Preview Image or Interactive High-Tech Fallback */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center group-hover:opacity-95 transition-all">
                      {proj.image ? (
                        <img
                          src={proj.image}
                          alt={`Portada web oficial de ${proj.title}`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="p-6 text-center space-y-3 bg-gradient-to-br from-purple-950/40 via-slate-900 to-black w-full h-full flex flex-col justify-center items-center select-none">
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                            SISTEMA DE CITAS & RESERVAS
                          </span>
                          <h4 className="text-base font-bold text-white tracking-tight">
                            NailsWell Cloud Booking
                          </h4>
                          <p className="text-xs text-slate-400 max-w-xs">
                            Independencia de comisiones y recordatorios instantáneos por WhatsApp.
                          </p>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-md border border-emerald-800/40">
                            Disponibilidad 24/7 sin intermediarios
                          </span>
                        </div>
                      )}

                      {/* Hover Overlay Button */}
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white"
                        aria-label={`Ver web en vivo de ${proj.title}`}
                      >
                        <span className="px-4 py-2 rounded-xl bg-brand-cyan text-black font-semibold shadow-lg flex items-center gap-1.5">
                          <span>Explorar Web en Directo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Editorial Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-brand-cyan font-bold tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>{proj.metrics.speed} carga</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand-cyan transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-card border border-brand-border text-brand-text font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Direct Live Visit Action */}
              <div className="p-6 pt-0 mt-2">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-black dark:bg-brand-card dark:hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/60 rounded-xl transition-all duration-200 group-hover:border-brand-cyan shadow-sm"
                >
                  <span>Abrir Web en Directo ({proj.domain})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
