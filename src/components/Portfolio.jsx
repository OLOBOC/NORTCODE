'use client';

import { ExternalLink, ArrowRight, Globe, Zap, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const caseStudies = [
    {
      id: 'audax-motors',
      title: 'Audax Motors',
      subtitle: 'Concesionario de Vehículos Seleccionados & Alta Gama',
      location: 'Gijón, Asturias',
      url: 'https://audax-motors.vercel.app/',
      domain: 'audax-motors.vercel.app',
      image: '/portfolio-audax.png',
      tag: 'AUTOMOCIÓN & CATÁLOGO',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Diseño sobrio de lujo y alta gama con fondo oscuro, tipografía editorial, catálogo dinámico filtrable por smartphone y llamada/contacto con 1 toque.',
      deliverables: [
        'Catálogo de vehículos en stock con fichas técnicas completas',
        'Carga instantánea en smartphones y adaptación fluida',
        'Botones de llamada y contacto directo sin fricción comercial',
        'Infraestructura desplegada en Edge CDN de máxima velocidad',
      ],
      stack: ['Next.js 15', 'Tailwind CSS', 'Vercel Edge', 'Catálogo Dinámico', 'Mobile First'],
      metrics: {
        speed: '< 0.4s',
        score: '100 / 100',
        status: 'OPERATIVO EN VIVO',
      },
    },
    {
      id: 'dfr-detail',
      title: 'DFR Xtra Detail',
      subtitle: 'Atelier de Detailing & Estética Automotriz de Precisión',
      location: 'Gijón, Asturias',
      url: 'https://dfr-xtra-detail.vercel.app/#inicio',
      domain: 'dfr-xtra-detail.vercel.app',
      image: '/portfolio-dfr.png',
      tag: 'LUJO & DETAILING',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Atmósfera visual oscura con acentos verde neón, ticker técnico en vivo con coordenadas de ubicación, catálogo de tratamientos cerámicos y embudo de conversión directa a cita previa.',
      deliverables: [
        'Composición visual inmersiva para destacar el trabajo artesanal',
        'Presentación de estándares de calidad (tratamientos cerámicos 9H, pulido)',
        'Estructura optimizada para captación de clientes de alto valor',
        'Puntuación perfecta en Google PageSpeed y estabilidad visual',
      ],
      stack: ['React 19', 'Tailwind CSS', 'Dark Luxury UI', 'Core Web Vitals 100', 'SEO Local'],
      metrics: {
        speed: '< 0.3s',
        score: '100 / 100',
        status: 'OPERATIVO EN VIVO',
      },
    },
    {
      id: 'nailswell-saas',
      title: 'NailsWell & SaaS Platform',
      subtitle: 'Plataforma Cloud de Gestión y Citas sin Comisiones',
      location: 'España / Remoto',
      url: 'https://oloboc.github.io/',
      domain: 'oloboc.github.io',
      image: null,
      tag: 'SAAS & RESERVAS',
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      description: 'Plataforma a medida para locales y profesionales que permite gestionar agenda y reservas online 24/7 sin pagar comisiones por cliente a directorios intermediarios.',
      deliverables: [
        'Sistema de agenda online 24 horas y base de datos de clientes',
        'Independencia total de aplicaciones con cuotas y comisiones abusivas',
        'Panel administrativo seguro y accesible desde cualquier smartphone',
        'Arquitectura modular escalable con integración de pagos',
      ],
      stack: ['Next.js', 'Firebase Realtime', 'Panel Admin', 'Sin Comisiones', 'API Sync'],
      metrics: {
        speed: '< 0.5s',
        score: '98 / 100',
        status: 'DEMO DISPONIBLE',
      },
    },
  ];

  return (
    <section id="proyectos" className="py-28 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-border">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span>CASOS DE ESTUDIO REALES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
              Trabajos reales con portadas en vivo
            </h2>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Sin maquetas ficticias. Aquí puedes ver las portadas reales de proyectos desarrollados por Nortcode y acceder a las webs en producción.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-dim flex items-center gap-2 bg-brand-surface px-4 py-2.5 rounded-2xl border border-brand-border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-brand-text font-semibold">100% OPERATIVAS EN PRODUCCIÓN</span>
          </div>
        </div>

        {/* Monumental Case Studies Layout */}
        <div className="space-y-20">
          {caseStudies.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-10 rounded-3xl bg-brand-surface/90 border border-brand-border shadow-2xl hover:border-brand-border-light transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Side: Real Screenshot in High-End Browser Frame */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl overflow-hidden border border-brand-border/80 bg-black shadow-2xl">
                    {/* Browser Address Bar */}
                    <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-3 text-slate-400 text-[11px] hidden sm:inline">
                          https://{item.domain}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                        {item.metrics.status}
                      </span>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={`Portada web oficial de ${item.title}`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="p-8 text-center space-y-4 bg-gradient-to-br from-purple-950/40 via-slate-900 to-black w-full h-full flex flex-col justify-center items-center select-none">
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                            SISTEMA CLOUD DE CITAS
                          </span>
                          <h4 className="text-xl font-bold text-white tracking-tight">
                            NailsWell & SaaS Platform
                          </h4>
                          <p className="text-xs text-slate-400 max-w-sm">
                            Arquitectura modular para reservas 24/7 sin comisiones ni ataduras.
                          </p>
                          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-md border border-emerald-800/40">
                            Disponibilidad 100% en la nube
                          </span>
                        </div>
                      )}

                      {/* Hover Overlay with Direct Live Link */}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity flex items-center justify-center gap-2"
                        aria-label={`Ver web en vivo de ${item.title}`}
                      >
                        <span className="px-5 py-2.5 rounded-xl bg-brand-cyan text-black text-xs font-bold shadow-xl flex items-center gap-2">
                          <span>Navegar por la Web en Directo</span>
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Side: Case Study Metadata & Business Impact */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono px-3 py-1 rounded-xl border font-bold ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-brand-dim">{item.location}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-dim font-mono mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-brand-border/60">
                    <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                      Solución implementada:
                    </div>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-brand-text">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.stack.map((st, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-brand-card border border-brand-border text-brand-muted font-medium"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  {/* Direct Action Button */}
                  <div className="pt-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-black dark:bg-brand-card dark:hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/60 rounded-xl transition-all shadow-sm"
                    >
                      <span>Abrir {item.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
