'use client';

import { Globe, RefreshCw, Cpu, CheckCircle2, ArrowRight, Database, Zap, Sparkles, Building2, User, Briefcase, RotateCcw } from 'lucide-react';
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
      'Carga instantánea en móviles — donde el 90% busca',
      'Botón de llamada y WhatsApp en 1 toque',
      'Google Maps y ficha de negocio integrados',
      'Sin cuotas mensuales obligatorias, código tuyo',
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
      'Fotografía y diseño editorial de lujo',
      'Reserva online o pasarela de pago si se necesita',
      'Referencia: Audax Motors y DFR Xtra Detail',
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

const extras = [
  {
    icon: Database,
    color: 'text-emerald-400 bg-emerald-500/10',
    tag: 'DIGITALIZACIÓN INTERNA',
    title: 'Paneles de Gestión a Medida',
    desc: 'Elimina los Excels y libretas. Creamos paneles sencillos y seguros en la nube para consultar clientes, pedidos y citas desde el móvil en segundos.',
    points: ['Búsqueda ultrarrápida', 'Respaldo seguro RGPD', 'Acceso desde cualquier dispositivo'],
  },
  {
    icon: Zap,
    color: 'text-purple-400 bg-purple-500/10',
    tag: 'INTELIGENCIA ARTIFICIAL',
    title: 'Automatización 24/7 con IA',
    desc: 'Respuestas automáticas a leads por WhatsApp y correo. Flujos sin intervención humana que sincronizan tu negocio mientras duermes.',
    points: ['n8n + Webhooks + APIs propias', 'Cero clientes perdidos por retraso', 'Integración con tus herramientas actuales'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 bg-brand-bg relative section-diagonal overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-5">
            <div className="status-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              SOLUCIONES A MEDIDA
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-text tracking-[-0.03em] leading-[0.95]">
              Web perfecta<br />
              <span className="text-brand-muted font-light italic text-3xl sm:text-4xl">para tu negocio.</span>
            </h2>
          </div>
          <p className="text-base lg:text-lg text-brand-muted leading-relaxed max-w-md">
            Sin paquetes cerrados. Analizamos tu sector y tus metas para crear la solución más eficaz,{' '}
            <strong className="text-brand-text">siempre con presupuesto adaptado a tu realidad.</strong>
          </p>
        </div>

        {/* ── 4 Main Solutions — Asymmetric Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className={`relative rounded-3xl bg-brand-surface border border-brand-border ${sol.borderHover} transition-all card-lift overflow-hidden group`}
              >
                {/* Accent gradient */}
                <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${sol.accentColor}`} />
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${sol.accentColor} opacity-50 pointer-events-none`} />

                <div className="relative p-6 sm:p-8 flex flex-col h-full space-y-5">
                  {/* Header */}
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
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Points */}
                  <div className="space-y-2 flex-1">
                    {sol.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-brand-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan hover:text-white transition-colors group/link pt-2"
                  >
                    <span>Pedir propuesta sin compromiso</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Extras: Automation + Panels ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-brand-border" />
            <span className="text-[11px] font-mono text-brand-dim uppercase tracking-widest">Servicios Adicionales</span>
            <div className="h-px flex-1 bg-brand-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {extras.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <div key={i} className="p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border hover:border-brand-border-light transition-all card-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-2xl ${ex.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono font-semibold uppercase ${ex.color.split(' ')[0]}`}>{ex.tag}</span>
                      <h4 className="text-base font-bold text-brand-text">{ex.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed mb-4">{ex.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ex.points.map((pt, pi) => (
                      <span key={pi} className="text-[11px] font-mono text-brand-dim bg-brand-surface border border-brand-border px-2.5 py-1 rounded-lg">
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Visual Comparator ── */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <div className="status-pill mx-auto w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              EL ANTES Y EL DESPUÉS
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-text tracking-tight">
              El impacto que notas desde el primer día
            </h3>
            <p className="text-brand-muted text-sm max-w-xl mx-auto">
              Desliza para comparar una web estándar frente a un proyecto Nortcode real.
            </p>
          </div>
          <BeforeAfterComparator />
        </div>
      </div>
    </section>
  );
}
