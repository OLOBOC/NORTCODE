'use client';

import { useState } from 'react';
import { Globe, RefreshCw, Cpu, CheckCircle2, ArrowRight, Smartphone, Monitor, Gauge, Shield, Database, Sparkles, MessageSquare, Zap, Clock, Briefcase, Rocket, Layers } from 'lucide-react';
import BeforeAfterComparator from './BeforeAfterComparator';

export default function Services() {
  const solutions = [
    {
      id: 'economicas',
      num: '01',
      title: 'Webs Económicas para Negocios & Autónomos',
      tag: 'ACCESIBLE & EFICAZ',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: 'Presencia digital seria, rápida y sin cuotas mensuales obligatorias para que los clientes de tu zona te encuentren y te contacten de inmediato.',
      highlight: 'Pensada para talleres, hostelería, clínicas, reformas y profesionales locales.',
      points: [
        'Carga instantánea en smartphones (donde busca el 90% de tus clientes).',
        'Botones directos de llamada telefónica y chat de WhatsApp a 1 toque.',
        'Configuración de Google My Business y ubicación en Google Maps.',
        'Código y web 100% de tu propiedad, sin permanencia.',
      ],
      techBadge: 'Next.js 15 + Mobile First',
    },
    {
      id: 'corporativas',
      num: '02',
      title: 'Webs Corporativas & Catálogos de Alto Nivel',
      tag: 'IMPACTO VISUAL & LUJO',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Plataformas de alta categoría con acabados editoriales y catálogos interactivos que transmiten máxima solvencia y liderazgo comercial.',
      highlight: 'El estándar de proyectos como Audax Motors o DFR Xtra Detail.',
      points: [
        'Catálogo dinámico de vehículos, productos o servicios con filtros ágiles.',
        'Estética oscura sobria con acentos tecnológicos y fotografía cuidada.',
        'Arquitectura para captación de clientes de alto valor (High-Ticket).',
        'Preparada para pasarela de pago o reserva si se requiere.',
      ],
      techBadge: 'SSR Edge + Dynamic Catalog',
    },
    {
      id: 'portafolios',
      num: '03',
      title: 'Portafolios Personales & Marcas Profesionales',
      tag: 'DISEÑO DE AUTOR',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Webs minimalistas y ultra elegantes para profesionales independientes, abogados, arquitectos o consultores que buscan diferenciarse.',
      highlight: 'Haz que tu trayectoria y tus trabajos hablen con autoridad indiscutible.',
      points: [
        'Composición visual editorial de revista de diseño contemporáneo.',
        'Sección de casos de éxito, publicaciones y acreditaciones oficiales.',
        'Formularios de cualificación de clientes para filtrar contactos serios.',
        'Velocidad de carga en milisegundos en cualquier país del mundo.',
      ],
      techBadge: 'Editorial Typography + Clean UI',
    },
    {
      id: 'modernizacion',
      num: '04',
      title: 'Modernización & Aceleración de Webs Lentas',
      tag: 'RESCATE DE RENDIMIENTO',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Si tienes una web antigua o hecha en constructores lentos que tarda en cargar y pierde clientes, la reconstruimos desde los cimientos.',
      highlight: 'Eliminamos el 100% de las caídas, errores y lentitud de tu web actual.',
      points: [
        'Migración completa a código moderno sin depender de plugins frágiles.',
        'Salto directo a puntuación 95-100 en Google PageSpeed Insights.',
        'Mejora instantánea en el posicionamiento en buscadores (SEO).',
        'Mantenimiento de tu dominio y tus cuentas de correo sin interrupciones.',
      ],
      techBadge: 'PageSpeed 100 Optimizer',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>INGENIERÍA & SOLUCIONES ADAPTADAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
            Desarrollo web a medida para cada tipo de negocio
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Sin paquetes cerrados inflexibles. Analizamos tu sector, tus necesidades reales y tus posibilidades para crear la mejor solución posible, siempre con presupuesto económico adaptado.
          </p>
        </div>

        {/* 4 Main Web Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-brand-border-light transition-all group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono px-3 py-1 rounded-xl border font-bold ${sol.badgeColor}`}>
                    {sol.tag}
                  </span>
                  <span className="text-[11px] font-mono text-brand-dim">
                    SOLUCIÓN #{sol.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-brand-text group-hover:text-brand-cyan transition-colors">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {sol.description}
                </p>

                <div className="p-3 rounded-xl bg-brand-card/80 border border-brand-border/80 text-xs text-brand-text font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{sol.highlight}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-brand-border/60">
                  {sol.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-brand-border/60 flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-brand-dim bg-brand-card px-2.5 py-1 rounded-md border border-brand-border">
                  {sol.techBadge}
                </span>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan hover:text-white transition-colors group/link"
                >
                  <span>Pedir propuesta sin compromiso</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Digitalization & Automation Extra Pillars (2 Horizontal High-Tech Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-surface border border-brand-border space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-brand-card border border-brand-border text-emerald-400">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">GESTIÓN & CONTROL</span>
                <h4 className="text-lg sm:text-xl font-bold text-brand-text">Digitalización de Procesos Internos</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Eliminamos el desorden de Excels compartidos y libretas de papel. Creamos bases de datos y paneles sencillos donde consultar clientes, pedidos y citas desde tu móvil en un segundo.
            </p>
            <div className="text-xs text-brand-dim font-mono">
              ✓ Búsqueda ultrarrápida · ✓ Respaldo seguro en la nube · ✓ Cumplimiento RGPD
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-brand-surface border border-brand-border space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-brand-card border border-brand-border text-purple-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase font-semibold">PILOTO AUTOMÁTICO</span>
                <h4 className="text-lg sm:text-xl font-bold text-brand-text">Automatización con Inteligencia Artificial</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Atención inmediata a leads por WhatsApp y correo las 24 horas del día. Respuestas automáticas con IA y sincronización de herramientas sin que tengas que copiar datos a mano nunca más.
            </p>
            <div className="text-xs text-brand-dim font-mono">
              ✓ Integración con n8n · ✓ Webhooks HTTP · ✓ Cero clientes perdidos por retraso
            </div>
          </div>
        </div>

        {/* Visual Real-world Impact Comparator */}
        <div className="space-y-6 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
              EL IMPACTO REAL EN TU DÍA A DÍA
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight">
              Compara el método tradicional con el resultado Nortcode
            </h3>
          </div>

          <BeforeAfterComparator />
        </div>
      </div>
    </section>
  );
}
