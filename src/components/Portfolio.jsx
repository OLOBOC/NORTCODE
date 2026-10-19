'use client';

import { ExternalLink, ArrowUpRight, CheckCircle2, Globe, Shield, Sparkles, Eye, Star } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 'audax-motors',
      title: 'Audax Motors',
      category: 'CONCESIONARIO & AUTOMOCIÓN',
      domain: 'audax-motors.vercel.app',
      tagline: 'Catálogo dinámico de vehículos de ocasión y alta gama con carga ultrarrápida.',
      description: 'Diseño sobrio y elegante pensado para que los compradores filtren el stock en segundos y contacten directamente para solicitar prueba o reserva.',
      url: 'https://audax-motors.vercel.app/',
      badges: ['Catálogo de Vehículos', 'Móvil First', 'Llamada & WhatsApp', 'Filtro Dinámico'],
      accentColor: '#3b82f6',
      results: 'Carga en 0.6s · 100% adaptable',
      // Visual Mini Mockup Details
      previewType: 'automotive',
      mockupData: {
        headline: 'VEHÍCULOS SELECCIONADOS DE ALTA GAMA',
        sub: 'Stock exclusivo revisado con garantía de 12 a 24 meses y entrega inmediata.',
        tags: ['Garantía Europea', 'Entrega 48h', 'Financiación 100%'],
        price: '48.900 €',
        model: 'Porsche Macan GTS & Audi RS',
      }
    },
    {
      id: 'dfr-detail',
      title: 'DFR Xtra Detail',
      category: 'CUIDADO AUTOMOTRIZ & DETAILING',
      domain: 'dfr-xtra-detail.vercel.app',
      tagline: 'Landing page premium para servicios de estética y protección cerámica.',
      description: 'Estética oscura de alto impacto visual que resalta los acabados efecto espejo de los tratamientos, facilitando la reserva directa de cita previa.',
      url: 'https://dfr-xtra-detail.vercel.app/#inicio',
      badges: ['Tratamientos 9H', 'Reserva de Citas', 'Diseño Oscuro Premium', 'Alta Conversión'],
      accentColor: '#00f0ff',
      results: 'Acabado visual prémium · 0 fricción',
      // Visual Mini Mockup Details
      previewType: 'detail',
      mockupData: {
        headline: 'Protección Cerámica 9H & Detailing de Precisión',
        sub: 'Tratamientos hidrofóbicos y corrección de pintura con acabado espejo garantizado.',
        tags: ['Coating Cerámico', 'Corrección 99%', 'Interiores VIP'],
        badge: 'CITA PREVIA EXCLUSIVA',
      }
    },
    {
      id: 'nailswell-saas',
      title: 'NailsWell & SaaS Platform',
      category: 'PLATAFORMA DE CITAS & RESERVAS',
      domain: 'nailswell.com (Demo)',
      tagline: 'Web de reservas directas para independizarse de comisiones abusivas.',
      description: 'Permite a los negocios tener su propio portal de reservas 24/7 sin intermediarios que se queden con comisiones por cada cliente.',
      url: 'https://oloboc.github.io/',
      badges: ['Reservas 24/7', 'Recordatorios WhatsApp', 'Base de Datos Clientes', 'Sin Comisiones'],
      accentColor: '#8b5cf6',
      results: 'Ahorro mensual en comisiones',
      // Visual Mini Mockup Details
      previewType: 'saas',
      mockupData: {
        badgeSaas: 'CASO DESTACADO',
        headline: 'Toma el control de tus citas con tu propia web de reservas',
        sub: 'Di adiós a comisiones por cliente y automatiza tu agenda con confirmaciones automáticas.',
        btnText: 'Pedir Cita Online',
      }
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
              <span>CASOS REALES & DEMOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight">
              Trabajos visuales y operativos en internet
            </h2>
            <p className="text-base text-brand-muted">
              Páginas web reales construidas por Nortcode. Pulsa en cualquiera para navegar por la web en directo y comprobar la calidad visual y velocidad de carga.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-dim flex items-center gap-2 bg-brand-surface px-4 py-2 rounded-xl border border-brand-border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-brand-text font-semibold">100% OPERATIVOS EN VIVO</span>
          </div>
        </div>

        {/* Visual Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Visual Browser Frame Window */}
                <div className="p-4 bg-brand-card/70 border-b border-brand-border">
                  <div className="rounded-2xl overflow-hidden border border-brand-border/80 bg-brand-bg shadow-inner">
                    {/* Browser Address Bar */}
                    <div className="px-3.5 py-2 bg-brand-elevated/80 border-b border-brand-border/60 flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-brand-dim flex items-center gap-1 text-[10px] truncate max-w-[170px]">
                        <Globe className="w-3 h-3 text-brand-muted shrink-0" />
                        <span className="truncate">https://{proj.domain}</span>
                      </div>
                      <span className="text-[9px] text-emerald-400 font-bold">ONLINE</span>
                    </div>

                    {/* Miniature UI Screen Rendering */}
                    <div className="p-5 sm:p-6 min-h-[175px] flex flex-col justify-between select-none relative overflow-hidden bg-gradient-to-b from-brand-surface to-brand-bg">
                      {proj.previewType === 'automotive' && (
                        <div className="space-y-3">
                          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-blue-500/15 text-blue-400 border border-blue-500/30 font-semibold">
                            AUDAX MOTORS 2026
                          </div>
                          <h4 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                            {proj.mockupData.headline}
                          </h4>
                          <p className="text-[11px] text-brand-muted line-clamp-2">
                            {proj.mockupData.sub}
                          </p>
                          <div className="flex items-center justify-between pt-1 border-t border-brand-border/40 text-[10px]">
                            <span className="font-mono text-brand-cyan font-bold">{proj.mockupData.price}</span>
                            <span className="text-brand-dim truncate">{proj.mockupData.model}</span>
                          </div>
                        </div>
                      )}

                      {proj.previewType === 'detail' && (
                        <div className="space-y-3">
                          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 font-semibold">
                            {proj.mockupData.badge}
                          </div>
                          <h4 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                            {proj.mockupData.headline}
                          </h4>
                          <p className="text-[11px] text-brand-muted line-clamp-2">
                            {proj.mockupData.sub}
                          </p>
                          <div className="flex items-center gap-1.5 pt-1 text-[10px] text-brand-dim">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                            <span>Tratamiento cerámico multicapa con garantía</span>
                          </div>
                        </div>
                      )}

                      {proj.previewType === 'saas' && (
                        <div className="space-y-3">
                          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-purple-500/15 text-purple-400 border border-purple-500/30 font-semibold">
                            {proj.mockupData.badgeSaas}
                          </div>
                          <h4 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                            {proj.mockupData.headline}
                          </h4>
                          <p className="text-[11px] text-brand-muted line-clamp-2">
                            {proj.mockupData.sub}
                          </p>
                          <div className="flex items-center justify-between pt-1 border-t border-brand-border/40 text-[10px]">
                            <span className="px-2 py-1 rounded bg-purple-600 text-white font-semibold text-[9px]">
                              {proj.mockupData.btnText}
                            </span>
                            <span className="text-brand-dim font-mono">Sin comisiones</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Editorial Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-brand-cyan font-bold tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-emerald-400 font-semibold">{proj.results}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand-cyan transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Benefit Tags */}
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

              {/* Card Footer with Live Visit Action */}
              <div className="p-6 pt-0 mt-2">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-black dark:bg-brand-card dark:hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/60 rounded-xl transition-all duration-200 group-hover:border-brand-cyan shadow-sm"
                >
                  <span>Abrir Web en Directo</span>
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
