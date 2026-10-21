'use client';

import { ExternalLink, ArrowUpRight, ArrowRight, Check, MapPin, Clock, Star, Sparkles } from 'lucide-react';

const caseStudies = [
  {
    id: 'audax-motors',
    title: 'Audax Motors',
    subtitle: 'Concesionario de Alta Gama',
    location: 'Gijón, Asturias',
    url: 'https://audax-motors.vercel.app/',
    domain: 'audax-motors.vercel.app',
    image: '/portfolio-audax.jpg',
    tag: 'AUTOMOCIÓN & CATÁLOGO',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    accentColor: '#f59e0b',
    highlight: 'Catálogo dinámico de vehículos con fichas técnicas completas, estética oscura de lujo y velocidad extrema en móviles.',
    deliverables: [
      'Catálogo filtrable de vehículos en tiempo real',
      'Botones de llamada directa a 1 toque',
      'Diseño editorial oscuro de lujo premium',
      'Puntuación perfecta Google PageSpeed',
    ],
    stack: ['Next.js 15', 'Tailwind', 'Vercel Edge', 'Mobile First', 'Dark Luxury UI'],
    status: 'OPERATIVO EN VIVO',
    speed: '< 0.4s',
    score: '100',
  },
  {
    id: 'dfr-detail',
    title: 'DFR Xtra Detail',
    subtitle: 'Atelier de Detailing Premium',
    location: 'Gijón, Asturias',
    url: 'https://dfr-xtra-detail.vercel.app/#inicio',
    domain: 'dfr-xtra-detail.vercel.app',
    image: '/portfolio-dfr.jpg',
    tag: 'LUJO & DETAILING',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accentColor: '#10b981',
    highlight: 'Atmósfera visual oscura con acentos neón. Catálogo de tratamientos cerámicos y embudo de conversión directa a cita previa.',
    deliverables: [
      'Composición visual inmersiva y artesanal',
      'Tratamientos cerámicos 9H bien presentados',
      'Captación de clientes de alto valor',
      'Core Web Vitals 100 / 100 / 100 / 100',
    ],
    stack: ['React 19', 'Tailwind', 'Dark Luxury UI', 'Core Web Vitals 100', 'SEO Local'],
    status: 'OPERATIVO EN VIVO',
    speed: '< 0.3s',
    score: '100',
  },
  {
    id: 'salon-estilismo',
    title: 'Estilo Vivo',
    subtitle: 'Peluquería',
    location: 'Gijón, Asturias',
    url: null,
    domain: 'estilo-vivo-gijon.com',
    image: '/portfolio-estilo-vivo.png',
    tag: 'ESTILISMO & CITAS ONLINE',
    tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    accentColor: '#fb7185',
    highlight: 'Landing para peluquería con estética premium y estructura visual pensada para despertar confianza, personalizar servicios y convertir visitas en citas reales.',
    deliverables: [
      'Visual premium para marca y branding',
      'Estructura de hero con mensajes de conversión',
      'Diseño pensado para móvil y experiencia directa',
      'Preparado para reserva por WhatsApp o agenda',
    ],
    stack: ['Branding Visual', 'Landing Page', 'Tailwind CSS', 'UI Premium', 'Mobile First'],
    status: 'IMAGEN DE REFERENCIA',
  },
  {
    id: '41-trainer',
    title: '41 Trainer',
    subtitle: 'Asesoría online · Fuerza, rendimiento y estética',
    url: null,
    image: '/portfolio-41trainer.png',
    tag: 'ENTRENAMIENTO ONLINE & BIOMECÁNICA',
    tagColor: 'text-lime-400 bg-lime-500/10 border-lime-500/20',
    accentColor: '#d4ff3a',
    highlight: 'Plan personalizado, corrección biomecánica por vídeo y seguimiento real. Calidad por encima de cantidad. Siempre.',
    deliverables: [
      'Plan personalizado según objetivos, nivel, material y lesiones',
      'Corrección de técnica por vídeo',
      'Soporte directo y revisiones periódicas',
      'Ajustes continuos de cargas y nutrición',
    ],
    stack: ['Asesoría online', 'Fuerza', 'Biomecánica', 'Héctor · @41trainer'],
    status: 'MAQUETA EN DESARROLLO',
  },
];

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-24 sm:py-28 bg-brand-surface/30 relative section-diagonal overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-cyan/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-end">
          <div className="space-y-4">
            <div className="status-pill w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              PROYECTOS PUBLICADOS Y EN DESARROLLO
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-brand-text tracking-[-0.03em] leading-[1.05] sm:leading-[0.98] lg:leading-[0.95]">
              Proyectos y propuestas,<br />
              <span className="text-brand-muted font-light italic text-2xl sm:text-4xl">con avances visibles.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-md">
            Webs publicadas, diseños de referencia y proyectos en curso. Cada ficha indica claramente si ya está disponible o sigue en desarrollo.
          </p>
        </div>

        {/* ── Case Studies Grid ── */}
        <div className="space-y-20">
          {caseStudies.map((item, idx) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Screenshot Side */}
              <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="browser-frame group relative" style={{ boxShadow: `0 0 80px ${item.accentColor}08` }}>
                  {/* Top bar */}
                  <div className="browser-topbar">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    <div className="ml-4 flex-1 bg-brand-card rounded-md px-3 py-1 text-[11px] font-mono text-brand-muted truncate">
                      {item.url ? `https://${item.domain}` : 'Vista previa · sin enlace público'}
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ml-2 shrink-0 ${
                      item.url 
                        ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/30'
                        : 'text-amber-400 bg-amber-950/40 border border-amber-800/30'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Screenshot */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={item.image}
                      alt={item.url ? `Captura de la web publicada de ${item.title}` : `Vista previa del diseño de ${item.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                        aria-label={`Ver web de ${item.title} en directo`}
                      >
                        <div className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-black transition-all"
                          style={{ background: item.accentColor }}>
                          <span>Navegar en Directo</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </a>
                    ) : (
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold text-white bg-brand-surface border border-brand-border">
                          <Clock className="w-4 h-4 text-rose-400" />
                          <span>Vista previa · Sin enlace público</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {item.url ? (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { label: 'Carga Inicial', value: item.speed },
                      { label: 'PageSpeed', value: `${item.score}/100` },
                      { label: 'Estado', value: 'En Producción' },
                    ].map((metric) => (
                      <div key={metric.label} className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-center">
                        <div className="text-xs font-bold text-brand-text">{metric.value}</div>
                        <div className="text-[10px] font-mono text-brand-dim">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 p-3 rounded-xl bg-brand-card border border-brand-border text-center text-[11px] font-mono text-brand-dim">
                    {item.status} · SIN ENLACE PÚBLICO
                  </div>
                )}
              </div>

              {/* Info Side */}
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {/* Tag & location */}
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-xl border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1 text-xs font-mono text-brand-dim">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-brand-text tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-dim font-mono mt-1">{item.subtitle}</p>
                </div>

                {/* Highlight */}
                <p className="text-sm text-brand-muted leading-relaxed border-l-2 border-brand-cyan/30 pl-4">
                  {item.highlight}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                    {item.url ? 'Solución implementada:' : 'La propuesta incluye:'}
                  </span>
                  {item.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((s, i) => (
                    <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-brand-card border border-brand-border text-brand-muted">
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA Action */}
                <div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/40 transition-all"
                    >
                      <span>Abrir {item.domain}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-brand-cyan bg-brand-card hover:bg-brand-elevated border border-brand-cyan/30 hover:border-brand-cyan transition-all"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>¿Te interesa un proyecto así? Hablemos</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Work in Progress CTA ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-card border border-brand-border text-center space-y-5 gradient-border">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <Star className="w-3.5 h-3.5" />
            TU PROYECTO PODRÍA SER EL SIGUIENTE
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-brand-text tracking-tight">
            ¿Tu web no genera clientes?<br />
            <span className="text-brand-muted font-light">Cuéntanos tu caso — sin compromiso.</span>
          </h3>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-black bg-brand-cyan hover:bg-white rounded-2xl transition-all shadow-xl shadow-brand-cyan/20"
          >
            <span>Solicitar Presupuesto Gratuito</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
