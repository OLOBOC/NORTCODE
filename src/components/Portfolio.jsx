'use client';

import { ExternalLink, ArrowUpRight, CheckCircle2, Globe, Shield, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 'audax-motors',
      title: 'Audax Motors',
      category: 'SECTOR AUTOMOCIÓN & CONCESIONARIO',
      domain: 'audax-motors.vercel.app',
      tagline: 'Plataforma web con catálogo de vehículos, experiencia de navegación ágil y diseño premium.',
      description: 'Diseño sobrio y de alta gama enfocado en transmitir solvencia y facilitar la consulta inmediata de stock de vehículos desde cualquier smartphone.',
      url: 'https://audax-motors.vercel.app/',
      badges: ['Next.js', 'Tailwind CSS', 'Catálogo Dinámico', 'Mobile-First', 'Vercel'],
      accentColor: '#3b82f6',
      // Visual Mini Mockup Details
      previewType: 'automotive',
      mockupData: {
        headline: 'VEHÍCULOS SELECCIONADOS DE ALTA GAMA',
        sub: 'Stock exclusivo revisado con garantía y entrega inmediata en toda España.',
        tags: ['Híbrido 380 CV', 'Garantía 24 Meses', 'Entrega 48h'],
        price: '48.900 €',
        model: 'Porsche Macan GTS & Audi RS Series',
      }
    },
    {
      id: 'dfr-detail',
      title: 'DFR Xtra Detail',
      category: 'DETAILING & CUIDADO AUTOMOTRIZ',
      domain: 'dfr-xtra-detail.vercel.app',
      tagline: 'Landing page comercial orientada a destacar acabados de alta gama y reserva directa de citas.',
      description: 'Composición estética oscura y limpia que realza la calidad visual del trabajo artesanal, reduciendo al mínimo la fricción para reservar citas.',
      url: 'https://dfr-xtra-detail.vercel.app/#inicio',
      badges: ['React', 'CSS Moderno', 'Conversión', 'Rendimiento', 'Responsive'],
      accentColor: '#00f0ff',
      // Visual Mini Mockup Details
      previewType: 'detail',
      mockupData: {
        headline: 'Protección Cerámica 9H & Detailing de Precisión',
        sub: 'Corrección de pintura y tratamientos hidrofóbicos con acabado espejo.',
        tags: ['Coating Cerámico', 'Corrección Paint 99%', 'Interiores VIP'],
        badge: 'CITA PREVIA EXCLUSIVA',
      }
    },
    {
      id: 'nailswell-saas',
      title: 'NailsWell & SaaS Platform',
      category: 'SAAS & PLATAFORMA DE RESERVAS',
      domain: 'nailswell.com (Demo)',
      tagline: 'Plataforma de reserva de citas a medida con panel inteligente y base de datos individual.',
      description: 'Permite a los negocios independizarse de directorios comunes con comisiones abusivas mediante su propio sistema de reservas web 24/7.',
      url: 'https://oloboc.github.io/',
      badges: ['Next.js', 'Firebase', 'Tailwind', 'SaaS', 'API Realtime'],
      accentColor: '#8b5cf6',
      // Visual Mini Mockup Details
      previewType: 'saas',
      mockupData: {
        badgeSaas: 'CASO DESTACADO',
        headline: 'Toma el control de tus citas con tu propia página de reservas',
        sub: 'Di adiós a comisiones por cliente y automatiza tu agenda con recordatorios por WhatsApp.',
        btnText: 'Registrar mi Local',
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
              <span>PROYECTOS & DEMOS REALES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
              Trabajos visuales y operativos en internet
            </h2>
            <p className="text-sm sm:text-base text-brand-muted">
              Haz clic en cualquier proyecto para navegar por la versión en vivo o inspeccionar su arquitectura.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-dim flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>3 PROYECTOS VERIFICADOS</span>
          </div>
        </div>

        {/* Visual Projects Grid Matching User Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Visual Mini Mockup Header (Browser Frame Window) */}
                <div className="p-4 bg-brand-card/70 border-b border-brand-border">
                  <div className="rounded-2xl overflow-hidden border border-brand-border/80 bg-brand-bg shadow-inner">
                    {/* Browser Address Bar */}
                    <div className="px-3.5 py-2 bg-brand-elevated/80 border-b border-brand-border/60 flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-brand-dim flex items-center gap-1 text-[10px] truncate max-w-[160px]">
                        <Globe className="w-3 h-3 text-brand-muted" />
                        <span>https://{proj.domain}</span>
                      </div>
                      <span className="w-2" />
                    </div>

                    {/* Miniature UI Screen Rendering */}
                    <div className="p-5 sm:p-6 min-h-[170px] flex flex-col justify-between select-none relative overflow-hidden bg-gradient-to-b from-brand-surface to-brand-bg">
                      {proj.previewType === 'automotive' && (
                        <div className="space-y-3">
                          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-blue-500/15 text-blue-400 border border-blue-500/30">
                            AUDAX STOCK 2026
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
                          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
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
                          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-purple-500/15 text-purple-400 border border-purple-500/30">
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
                            <span className="text-brand-dim">Sin comisiones</span>
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
                    <span className="text-brand-dim">{proj.domain}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand-cyan transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech Tags */}
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
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-black dark:bg-brand-card dark:hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/50 rounded-xl transition-all duration-200 group-hover:border-brand-cyan"
                >
                  <span>Visitar Proyecto</span>
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
