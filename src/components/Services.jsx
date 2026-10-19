'use client';

import { useState } from 'react';
import { Globe, RefreshCw, Cpu, CheckCircle2, ArrowRight, Smartphone, Monitor, Gauge, Shield, Database, Sparkles, MessageSquare, Zap, Clock } from 'lucide-react';
import BeforeAfterComparator from './BeforeAfterComparator';

export default function Services() {
  const [devicePreview, setDevicePreview] = useState('mobile');

  return (
    <section id="servicios" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>SOLUCIONES DIGITALES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight">
            Lo que Nortcode hace por tu negocio
          </h2>
          <p className="text-base sm:text-lg text-brand-muted mt-3 leading-relaxed">
            Sin rodeos técnicos ni presupuestos inflados. Soluciones prácticas diseñadas para que ganes más clientes y ahorres horas de trabajo manual cada semana.
          </p>
        </div>

        {/* 3 Main Commercial Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Solution 01: Web Design */}
          <div className="rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-brand-border-light transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                  SOLUCIÓN 01
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">Desde 290€</span>
              </div>

              <div className="p-3 rounded-2xl bg-brand-card border border-brand-border w-fit text-brand-cyan">
                <Globe className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-brand-text group-hover:text-brand-cyan transition-colors">
                Páginas Web & Presencia Digital
              </h3>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Creamos tu web corporativa, tienda o catálogo online con un diseño elegante y moderno. Diseñada para que cargue al segundo en el móvil y transmita confianza instantánea.
              </p>

              <div className="space-y-2 pt-2 border-t border-brand-border/60">
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Optimizada al 100% para smartphones</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Botones directos de llamada y WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Preparada para aparecer en Google</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Propiedad 100% tuya, sin cuotas cautivas</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/40 rounded-xl transition-all"
              >
                <span>Pedir Presupuesto Web</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Solution 02: Business Digitization */}
          <div className="rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-brand-border-light transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  SOLUCIÓN 02
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">A Medida</span>
              </div>

              <div className="p-3 rounded-2xl bg-brand-card border border-brand-border w-fit text-emerald-400">
                <Database className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-brand-text group-hover:text-emerald-400 transition-colors">
                Digitalización de Procesos
              </h3>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Olvídate del caos de Excels desordenados, libretas de papel y datos perdidos. Creamos un sistema sencillo y seguro para gestionar tus clientes, citas y pedidos desde cualquier dispositivo.
              </p>

              <div className="space-y-2 pt-2 border-t border-brand-border/60">
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Toda la información de tu negocio centralizada</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Acceso seguro desde móvil, tablet u ordenador</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Búsqueda instantánea de clientes e historial</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Ahorro de 10-15 horas al mes en tareas manuales</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-emerald-500/40 rounded-xl transition-all"
              >
                <span>Digitalizar Mi Negocio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Solution 03: Automation & AI */}
          <div className="rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-brand-border-light transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                  SOLUCIÓN 03
                </span>
                <span className="text-xs font-mono text-purple-400 font-semibold">Automático</span>
              </div>

              <div className="p-3 rounded-2xl bg-brand-card border border-brand-border w-fit text-purple-400">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-brand-text group-hover:text-purple-400 transition-colors">
                Automatización con IA
              </h3>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Pon a la tecnología a trabajar por ti. Atiende a clientes potenciales las 24 horas del día, envía presupuestos automáticos y sincroniza tu correo y WhatsApp sin esfuerzo.
              </p>

              <div className="space-y-2 pt-2 border-t border-brand-border/60">
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Respuesta inmediata al cliente 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Generación automática de presupuestos y facturas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Conexión de herramientas sin copiar y pegar</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Cero clientes perdidos por contestar tarde</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-purple-500/40 rounded-xl transition-all"
              >
                <span>Automatizar Tareas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Visual Real-world Impact Comparator (Antes vs. Después) */}
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
