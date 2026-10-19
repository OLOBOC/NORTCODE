'use client';

import { useState } from 'react';
import { Smartphone, Monitor, CheckCircle2, ArrowRight, Sparkles, Mail, Star, ShieldCheck, Eye } from 'lucide-react';

export default function WebSimulator({ onTransferToContact }) {
  const [sector, setSector] = useState('auto'); // 'auto' | 'detail' | 'local' | 'pro' | 'upgrade'
  const [device, setDevice] = useState('mobile'); // 'mobile' | 'desktop'

  const sectorTemplates = {
    auto: {
      id: 'auto',
      title: 'Concesionarios & Catálogo de Vehículos',
      badge: 'AUTOMOCIÓN',
      tagline: 'Tu catálogo dinámico de stock con navegación ágil y contacto directo.',
      investment: 'Económica y ajustada a tu volumen de stock (sin comisiones)',
      timeframe: '5 - 10 días laborables',
      conversionHook: 'El comprador ve los coches en su teléfono y pulsa "Contactar" en 3 segundos.',
      features: [
        'Filtro dinámico de stock de vehículos con búsqueda rápida',
        'Fichas técnicas con fotografías de alta resolución sin ralentizar la web',
        'Botones de contacto y llamada directa a 1 toque',
        'Ubicación en Google Maps y reseñas de clientes integradas',
      ],
      mockup: {
        brandName: 'AUDAX SELECCIÓN MOTOR',
        heroTitle: 'Vehículos de ocasión garantizados y entrega inmediata',
        heroSubtitle: 'Stock exclusivo revisado con garantía europea. Trato directo y transparencia absoluta.',
        ctaText: 'Explorar Stock Disponible',
        badgeAlert: 'STOCK ACTUALIZADO 2026',
        rating: '5.0 ★ (140 reseñas verificadas)',
        items: [
          { name: 'Mercedes-Benz A200 AMG', detail: 'Automático · Diésel · Garantía 24M', badge: 'DISPONIBLE' },
          { name: 'Audi RS4 Avant Quat.', detail: '450 CV · Historial Oficial · Revisado', badge: 'RESERVADO' },
        ],
      },
    },
    detail: {
      id: 'detail',
      title: 'Detailing, Cuidado del Motor & Estética',
      badge: 'VIP & DETAILING',
      tagline: 'Landing page premium con atmósfera oscura de lujo y cita previa sin intermediarios.',
      investment: 'Solución accesible para negocios que buscan proyectar máxima calidad',
      timeframe: '5 - 8 días laborables',
      conversionHook: 'El acabado visual resalta la artesanía de tu trabajo y llena tu agenda semanal.',
      features: [
        'Galería fotográfica de tratamientos y resultados antes/después',
        'Catálogo claro de servicios (cerámicos 9H, pulido, interiores)',
        'Botón directo para solicitud de cita previa sin intermediarios',
        'Diseño oscuro premium que transmite exclusividad absoluta',
      ],
      mockup: {
        brandName: 'DFR XTRA ATELIER',
        heroTitle: 'Protección Cerámica 9H & Detailing de Alta Gama',
        heroSubtitle: 'Tratamientos hidrofóbicos y corrección de pintura con acabado espejo garantizado.',
        ctaText: 'Solicitar Presupuesto Detailing',
        badgeAlert: 'AGENDA DISPONIBLE ESTA SEMANA',
        rating: '4.9 ★ (88 clientes satisfechos)',
        items: [
          { name: 'Tratamiento Cerámico Multicapa', detail: 'Durabilidad 36 meses · Efecto hidrofóbico', badge: 'POPULAR' },
          { name: 'Corrección Paint 99% + Faros', detail: 'Eliminación total de swirls y microarañazos', badge: 'CITA PREVIA' },
        ],
      },
    },
    local: {
      id: 'local',
      title: 'Restaurantes, Cafeterías & Comercio Local',
      badge: 'COMERCIO & HOSTELERÍA',
      tagline: 'Carta digital instantánea sin descargar PDFs pesados y reserva directa.',
      investment: 'Muy económica, pensada para que cualquier negocio local tenga presencia seria',
      timeframe: '4 - 7 días laborables',
      conversionHook: 'El cliente abre el menú en su móvil sin esperar, ve tus platos y llama para reservar.',
      features: [
        'Carta digital ultrarrápida (se abre en 0.3s sin descargar ningún PDF)',
        'Menú del día y alérgenos actualizables fácilmente',
        'Botón directo de llamada y reserva de mesa a 1 toque',
        'Cómo llegar con navegación guiada de Google Maps',
      ],
      mockup: {
        brandName: 'GASTRONOMÍA & MERCADO',
        heroTitle: 'Cocina tradicional elaborada con producto fresco local',
        heroSubtitle: 'Disfruta de nuestros menús del día, especialidades de temporada y terraza.',
        ctaText: 'Ver Menú & Carta Digital',
        badgeAlert: 'MENÚ SEMANAL DISPONIBLE',
        rating: '4.8 ★ (230 opiniones)',
        items: [
          { name: 'Menú Degustación Completo', detail: 'Entrante + Principal + Postre artesano', badge: 'RECOMENDADO' },
          { name: 'Especialidad Tradicional', detail: 'Receta de autor con producto de la zona', badge: 'PLATO ESTRELLA' },
        ],
      },
    },
    pro: {
      id: 'pro',
      title: 'Empresas, Reformas, Abogados & Pymes',
      badge: 'CORPORATIVO & PYMES',
      tagline: 'Web corporativa sobria y moderna que genera consultas comerciales a diario.',
      investment: 'Presupuesto a medida según los servicios y páginas necesarias',
      timeframe: '6 - 9 días laborables',
      conversionHook: 'Te sitúa como la opción de máxima confianza y solvencia frente a tus competidores.',
      features: [
        'Presentación estructurada de servicios y metodología de trabajo',
        'Formulario de contacto seguro y cualificación de solicitudes',
        'Sellos de garantía y acreditaciones profesionales oficiales',
        'Textos legales acordes a la normativa española y europea (RGPD)',
      ],
      mockup: {
        brandName: 'INGENIERÍA & SERVICIOS PRO',
        heroTitle: 'Soluciones técnicas profesionales con presupuesto cerrado',
        heroSubtitle: 'Más de 10 años resolviendo proyectos con máxima transparencia, rigor y plazos garantizados.',
        ctaText: 'Solicitar Propuesta Técnica',
        badgeAlert: 'ATENCIÓN DIRECTA Y CERCANA',
        rating: '4.9 ★ (95 valoraciones)',
        items: [
          { name: 'Consultoría & Diagnóstico', detail: 'Revisión exhaustiva y plan de acción', badge: 'SIN COSTE' },
          { name: 'Ejecución Integral del Proyecto', detail: 'Garantía por escrito y entrega llave en mano', badge: 'A MEDIDA' },
        ],
      },
    },
    upgrade: {
      id: 'upgrade',
      title: 'Modernización de Web Existente Lenta',
      badge: 'RESCATE WEB',
      tagline: 'Transforma una web lenta que no rinde en una máquina de captar clientes en 0.4s.',
      investment: 'Económica: mantenemos tus contenidos y dominio rehaciendo solo el motor',
      timeframe: '5 - 8 días laborables',
      conversionHook: 'Recupera el 30% de clientes que se van por la lentitud de tu web actual.',
      features: [
        'Reconstrucción completa con Next.js 15 y Tailwind CSS',
        'Puntuación 95-100 en Google PageSpeed garantizada',
        'Mantenimiento de tu dominio y tus correos sin cortar el servicio',
        'Diseño moderno responsive adaptado a los estándares de 2026',
      ],
      mockup: {
        brandName: 'OPTIMIZACIÓN & RENDIMIENTO',
        heroTitle: 'Tu web actual, pero 10 veces más rápida y atractiva',
        heroSubtitle: 'Olvídate de caídas de servidor y constructores pesados. Código limpio y ligero.',
        ctaText: 'Comprobar Velocidad Actual',
        badgeAlert: 'VELOCIDAD EXTREMA < 0.4S',
        rating: '100 / 100 Google PageSpeed',
        items: [
          { name: 'Auditoría y Migración Limpia', detail: 'Cero pérdida de datos ni posicionamiento', badge: '100% SEGURO' },
          { name: 'Despliegue en Edge Cloudflare', detail: 'CDN global de máxima velocidad y protección', badge: 'INCLUIDO' },
        ],
      },
    },
  };

  const current = sectorTemplates[sector];

  const handleSelectTemplate = () => {
    const msg = `[SOLICITUD DESDE CONFIGURADOR]:
- Modelo de proyecto: ${current.title}
- Formato preferido: ${device === 'mobile' ? 'Optimizado para Smartphones' : 'Escritorio & Móvil'}

Hola Omar, he probado este modelo en el configurador y me gustaría que me envíes una propuesta por correo electrónico con detalles y opciones de presupuesto para mi caso.`;

    if (onTransferToContact) {
      onTransferToContact({
        projectType: `Desarrollo Web - ${current.title}`,
        message: msg,
      });
    }

    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="simulador" className="py-28 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan shadow-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>CONFIGURADOR VISUAL EN TIEMPO REAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
            Mira cómo quedará la presencia de tu negocio
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Elige tu sector o si deseas modernizar una web lenta. Comprueba el acabado visual y solicita un presupuesto económico adaptado a tu bolsillo directamente por correo.
          </p>
        </div>

        {/* Sector Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 max-w-5xl mx-auto">
          {Object.values(sectorTemplates).map((s) => (
            <button
              key={s.id}
              onClick={() => setSector(s.id)}
              className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between gap-2 shadow-sm ${
                sector === s.id
                  ? 'bg-brand-surface border-brand-cyan text-brand-text ring-1 ring-brand-cyan/30 shadow-brand-cyan/10'
                  : 'bg-brand-surface/60 border-brand-border hover:border-brand-border-light text-brand-muted hover:text-brand-text'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-semibold ${
                  sector === s.id ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-card text-brand-dim'
                }`}>
                  {s.badge}
                </span>
                {sector === s.id && <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />}
              </div>
              <span className="text-xs font-bold line-clamp-2 leading-tight">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Simulated Device */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Device Switcher */}
            <div className="flex items-center gap-2 mb-4 p-1.5 rounded-2xl bg-brand-surface border border-brand-border shadow-sm">
              <button
                onClick={() => setDevice('mobile')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  device === 'mobile'
                    ? 'bg-brand-card text-brand-cyan border border-brand-cyan/30 shadow-sm'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Vista Móvil (El 90% de tus clientes)</span>
              </button>
              <button
                onClick={() => setDevice('desktop')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  device === 'desktop'
                    ? 'bg-brand-card text-brand-cyan border border-brand-cyan/30 shadow-sm'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Vista Ordenador</span>
              </button>
            </div>

            {/* Device Frame */}
            <div
              className={`transition-all duration-300 w-full overflow-hidden bg-brand-card border border-brand-border shadow-2xl rounded-3xl ${
                device === 'mobile' ? 'max-w-sm border-[6px] border-slate-800' : 'max-w-2xl border-4 border-slate-800'
              }`}
            >
              <div className="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                  <span>🔒 tu-negocio.es</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">0.4s</span>
              </div>

              <div className="p-5 sm:p-6 bg-gradient-to-b from-brand-bg via-brand-surface to-brand-bg space-y-4 select-none">
                <div className="flex items-center justify-between pb-3 border-b border-brand-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    <span className="text-xs font-extrabold tracking-wider text-brand-text">
                      {current.mockup.brandName}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-semibold">
                    ABIERTO HOY
                  </span>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-brand-card border border-brand-border text-[10px] text-brand-cyan font-mono font-medium text-center">
                  {current.mockup.badgeAlert}
                </div>

                <div className="space-y-2 text-center py-2">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-amber-400 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{current.mockup.rating}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-text tracking-tight leading-snug">
                    {current.mockup.heroTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed max-w-sm mx-auto">
                    {current.mockup.heroSubtitle}
                  </p>

                  <div className="pt-2 flex items-center justify-center gap-2">
                    <button className="px-4 py-2 text-xs font-bold text-black bg-brand-cyan rounded-xl shadow-md">
                      {current.mockup.ctaText}
                    </button>
                    <button className="px-3.5 py-2 text-xs font-semibold text-brand-text bg-brand-surface border border-brand-border rounded-xl">
                      <span>Contactar</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-brand-border/60">
                  <div className="text-[10px] font-mono text-brand-dim uppercase tracking-wider">
                    DESTACADOS EN TIEMPO REAL:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.mockup.items.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-brand-surface/90 border border-brand-border space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-brand-text truncate">{item.name}</h4>
                          <span className="text-[10px] font-mono text-emerald-400 font-semibold">{item.badge}</span>
                        </div>
                        <p className="text-[10px] text-brand-muted">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Details & Transfer to Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                PLAN & CARACTERÍSTICAS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight">
                {current.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {current.tagline}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-surface border border-brand-border shadow-xl space-y-4">
              <div className="space-y-3 pb-3 border-b border-brand-border">
                <div>
                  <div className="text-xs font-mono text-brand-dim uppercase">MODALIDAD DE INVERSIÓN</div>
                  <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono mt-0.5">
                    {current.investment}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-dim uppercase">TIEMPO ESTIMADO DE ENTREGA</div>
                  <div className="text-sm font-bold text-brand-text font-mono mt-0.5">
                    {current.timeframe}
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-xs text-brand-text flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-snug">{current.conversionHook}</span>
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-brand-dim uppercase">Qué incluye esta solución:</div>
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-brand-text">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSelectTemplate}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Pedir presupuesto por correo para este modelo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-brand-dim font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Presupuesto cerrado sin sorpresas
              </span>
              <span>•</span>
              <span>Código 100% de tu propiedad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
