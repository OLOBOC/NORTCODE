'use client';

import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 'audax-motors',
      title: 'Audax Motors',
      category: 'Sector Automoción / Concesionario',
      tagline: 'Plataforma web con catálogo de vehículos, experiencia de navegación ágil y diseño premium.',
      url: 'https://audax-motors.vercel.app/',
      badges: ['Next.js', 'Tailwind CSS', 'Catálogo Dinámico', 'Mobile-First', 'Vercel'],
      scope: [
        'Arquitectura pensada para carga ultrarrápida en dispositivos móviles de clientes.',
        'Diseño visual sobrio y coherente con el sector del motor de alta gama.',
        'Estructura clara de especificaciones técnicas por vehículo para agilizar el contacto.',
      ],
      metricHonest: 'Cero tiempo de espera en el renderizado del stock vehicular.',
      themeGradient: 'from-blue-600/20 to-cyan-500/10',
      accentColor: 'border-blue-500/40 text-blue-400',
    },
    {
      id: 'dfr-detail',
      title: 'DFR Xtra Detail',
      category: 'Detailing & Cuidado Automotriz de Precisión',
      tagline: 'Landing page comercial orientada a destacar acabados de alta gama y captación de clientes.',
      url: 'https://dfr-xtra-detail.vercel.app/#inicio',
      badges: ['React', 'CSS Moderno', 'Landing de Conversión', 'Rendimiento', 'Responsive'],
      scope: [
        'Desglose estructurado de paquetes de pulido, cerámicos y reacondicionamiento.',
        'Composición estética oscura y limpia que realza la calidad visual del trabajo artesanal.',
        'Canal directo de contacto optimizado para reducir la fricción en la reserva de citas.',
      ],
      metricHonest: 'Estructura enfocada en claridad de servicios sin saturación visual.',
      themeGradient: 'from-brand-cyan/20 to-emerald-500/10',
      accentColor: 'border-brand-cyan/40 text-brand-cyan',
    },
    {
      id: 'oloboc-portfolio',
      title: 'Espacio de Desarrollo & Demos',
      category: 'Laboratorio de Código & Experimentación',
      tagline: 'Muestra de proyectos, patrones de arquitectura de software y capacidades técnicas frontend.',
      url: 'https://oloboc.github.io/',
      badges: ['Frontend Engineering', 'JavaScript Moderno', 'GitHub Pages', 'Algoritmia'],
      scope: [
        'Pruebas de concepto de interfaces reactivas y componentes interactivos modulares.',
        'Código estructurado y limpio siguiendo buenas prácticas de la industria.',
        'Exploración de micro-interacciones y rendimiento puro en el navegador.',
      ],
      metricHonest: 'Demostración práctica de conocimientos y resolución técnica.',
      themeGradient: 'from-purple-600/20 to-brand-cyan/10',
      accentColor: 'border-purple-500/40 text-purple-400',
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-border">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span>PROYECTOS & DEMOS REALES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trabajos publicados sin métricas inventadas
            </h2>
            <p className="text-sm sm:text-base text-brand-muted">
              Aquí puedes navegar por proyectos reales y demostraciones técnicas operativas en internet. Cero pantallas falsas ni testimonios de relleno.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-dim flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>3 ENLACES EN VIVO DISPONIBLES</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              {/* Card Header & Badges */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-brand-bg border border-brand-border text-brand-muted group-hover:text-brand-cyan group-hover:border-brand-cyan/40 transition-all"
                    title={`Abrir ${proj.title} en nueva pestaña`}
                    aria-label={`Ver demo en vivo de ${proj.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.badges.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-text"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Scope Highlights */}
                <div className="pt-3 border-t border-brand-border/60 space-y-2">
                  <span className="text-[10px] font-mono text-brand-dim uppercase">Alcance del trabajo:</span>
                  <ul className="space-y-1.5">
                    {proj.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-brand-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Honest Commitment & Action Button */}
              <div className="p-6 pt-0 mt-4 space-y-4">
                <div className="p-2.5 rounded-lg bg-brand-bg/80 border border-brand-border text-[11px] font-mono text-brand-dim flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate">{proj.metricHonest}</span>
                </div>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/50 rounded-xl transition-all duration-200 group-hover:text-white"
                >
                  <span>Ver Demo en Vivo</span>
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
