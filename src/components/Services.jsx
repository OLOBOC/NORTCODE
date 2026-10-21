'use client';

import { Globe, Building2, User, RotateCcw, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import BeforeAfterComparator from './BeforeAfterComparator';

const solutions = [
  {
    id: 'economicas',
    num: '01',
    icon: Globe,
    title: 'Webs para Negocios Locales y Autónomos',
    tag: 'ECONÓMICA & EFICAZ',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accentColor: 'from-emerald-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/30',
    description: 'Presencia digital seria y profesional a precio accesible. Pensada para talleres, hostelería, clínicas, fontaneros, electricistas y cualquier negocio local.',
    points: [
      'Carga instantánea en smartphones — donde el 90% busca',
      'Botón de llamada y WhatsApp directo en 1 toque',
      'Google Maps y ficha local de negocio integrados',
      'Sin costes ocultos, mantenimiento flexible y sin permanencia',
    ],
  },
  {
    id: 'corporativas',
    num: '02',
    icon: Building2,
    title: 'Webs Corporativas & Catálogos Premium',
    tag: 'ALTO IMPACTO VISUAL',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    accentColor: 'from-blue-500/10 to-transparent',
    borderHover: 'hover:border-blue-500/30',
    description: 'Plataformas de categoría superior con catálogos interactivos, estética editorial oscura y arquitectura para captar clientes de alto valor.',
    points: [
      'Catálogos de vehículos, productos o servicios con filtros',
      'Fotografía y diseño editorial de lujo contemporáneo',
      'Reserva online o pasarela de pago si se necesita',
      'Casos de referencia: Audax Motors y DFR Xtra Detail',
    ],
  },
  {
    id: 'portafolios',
    num: '03',
    icon: User,
    title: 'Portafolios Personales & Marcas Pro',
    tag: 'DISEÑO DE AUTOR',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    accentColor: 'from-purple-500/10 to-transparent',
    borderHover: 'hover:border-purple-500/30',
    description: 'Webs minimalistas y ultra elegantes para creativos, abogados, arquitectos, consultores y cualquier profesional que quiere distinguirse.',
    points: [
      'Composición visual de revista de diseño contemporáneo',
      'Casos de éxito, proyectos y publicaciones cuidados',
      'Formularios de cualificación para filtrar clientes',
      'Carga en milisegundos en cualquier país',
    ],
  },
  {
    id: 'rescate',
    num: '04',
    icon: RotateCcw,
    title: 'Rescate & Aceleración de Webs Lentas',
    tag: 'RENDIMIENTO EXTREMO',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    accentColor: 'from-amber-500/10 to-transparent',
    borderHover: 'hover:border-amber-500/30',
    description: 'Si tu web tarda más de 3 segundos, pierdes el 50% de los visitantes antes de que te conozcan. La reconstruimos sobre bases sólidas.',
    points: [
      'Salto directo a 95–100 en Google PageSpeed',
      'Migración completa sin perder dominio ni correos',
      'Adiós a plugins frágiles y constructores pesados',
      'Mejora instantánea en Google y captación orgánica',
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-28 bg-brand-bg relative section-diagonal overflow-hidden">
      {/* Ambient Gradients */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-brand-cyan/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div className="space-y-4">
            <div className="status-pill w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              SOLUCIONES WEB COMERCIALES
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-brand-text tracking-[-0.03em] leading-[1.05] sm:leading-[0.98] lg:leading-[0.95]">
              La solución precisa<br />
              <span className="text-brand-muted font-light italic text-2xl sm:text-4xl">para tu presupuesto y negocio.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-brand-muted leading-relaxed max-w-md">
            Sin paquetes cerrados ni costes inflados. Diseñamos y programamos exactamente lo que tu negocio necesita para captar clientes reales con solvencia.
          </p>
        </div>

        {/* ── 4 Main Web Solutions ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className={`relative rounded-3xl bg-brand-surface border border-brand-border ${sol.borderHover} transition-all card-lift overflow-hidden group flex flex-col justify-between`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${sol.accentColor}`} />
                <div className={`absolute top-0 left-0 w-full h-28 bg-gradient-to-b ${sol.accentColor} opacity-40 pointer-events-none`} />

                <div className="relative p-6 sm:p-8 flex flex-col h-full space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-brand-card border border-brand-border">
                        <Icon className={`w-5 h-5 ${sol.tagColor.split(' ')[0]}`} />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border ${sol.tagColor}`}>
                        {sol.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-brand-dim opacity-40 font-bold">#{sol.num}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-text tracking-tight group-hover:text-brand-cyan transition-colors">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Feature Points */}
                  <div className="space-y-2 flex-1 pt-1">
                    {sol.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-brand-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-2 border-t border-brand-border/40">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan hover:text-white transition-colors group/link"
                    >
                      <span>Pedir propuesta para este servicio</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Visual Comparator: Before & After ── */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-3">
            <div className="status-pill mx-auto w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              EL ANTES Y EL DESPUÉS
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-brand-text tracking-tight">
              El impacto que notas desde el primer día
            </h3>
            <p className="text-brand-muted text-xs sm:text-sm max-w-xl mx-auto">
              Comprueba la diferencia radical entre una web convencional lenta y un proyecto construido con arquitectura moderna en Nortcode.
            </p>
          </div>
          <BeforeAfterComparator />
        </div>
      </div>
    </section>
  );
}
