'use client';

import { useState } from 'react';
import { Smartphone, Monitor, CheckCircle2, ArrowRight, Sparkles, MessageCircle, Phone, Star, ShieldCheck, Zap, Eye } from 'lucide-react';

export default function WebSimulator({ onTransferToContact }) {
  const [sector, setSector] = useState('auto'); // 'auto' | 'services' | 'local' | 'pro'
  const [device, setDevice] = useState('mobile'); // 'mobile' | 'desktop'

  const sectorTemplates = {
    auto: {
      id: 'auto',
      title: 'Automoción, Concesionarios & Talleres',
      badge: 'SECTOR MOTOR',
      tagline: 'Tu catálogo de vehículos y servicios con carga instantánea y llamada directa.',
      priceRange: 'Desde 390 €',
      timeframe: '7 - 10 días',
      conversionHook: 'El cliente ve el stock en su móvil y pulsa "Contactar por WhatsApp" en 3 segundos.',
      features: [
        'Filtro dinámico de stock o servicios',
        'Botón de llamada y WhatsApp flotante',
        'Ficha técnica limpia y fotos HD ligeras',
        'Mapa interactivo de ubicación Google',
      ],
      mockup: {
        brandName: 'MOTOR PRESTIGE',
        heroTitle: 'Vehículos de ocasión garantizados y taller mecánico',
        heroSubtitle: 'Más de 40 vehículos revisados con entrega inmediata y garantía europea de 1 año.',
        ctaText: 'Ver Vehículos en Stock',
        badgeAlert: '🔥 NUEVO STOCK 2026',
        rating: '4.9 ★ (128 reseñas Google)',
        items: [
          { name: 'Mercedes Clase A AMG Line', detail: '2023 · 32.000 km · Diésel', price: '26.900 €' },
          { name: 'Volkswagen Golf 8 TSI', detail: '2022 · 45.000 km · Gasolina', price: '21.500 €' },
        ],
      },
    },
    services: {
      id: 'services',
      title: 'Estética, Peluquerías, Detailing & Cuidado',
      badge: 'SERVICIOS & CITAS',
      tagline: 'Galería visual de trabajos y sistema de cita previa sin intermediarios.',
      priceRange: 'Desde 320 €',
      timeframe: '5 - 8 días',
      conversionHook: 'Muestra fotos antes/después y llena tu agenda semanal automáticamente.',
      features: [
        'Galería de fotos antes y después',
        'Lista de tarifas transparente',
        'Reserva de cita directa a tu WhatsApp',
        'Reseñas de clientes 100% verificadas',
      ],
      mockup: {
        brandName: 'STUDIO GLOW & DETAIL',
        heroTitle: 'Tratamientos exclusivos con resultados inmediatos',
        heroSubtitle: 'Cuidado personalizado con productos de primera gama. Cita previa sin esperas.',
        ctaText: 'Reservar Cita por WhatsApp',
        badgeAlert: '✨ AGENDA ABIERTA ESTA SEMANA',
        rating: '5.0 ★ (94 reseñas Google)',
        items: [
          { name: 'Tratamiento Completo Premium', detail: 'Duración: 90 min · Acabado espejo', price: '65 €' },
          { name: 'Sesión Mantenimiento VIP', detail: 'Duración: 45 min · Garantía total', price: '35 €' },
        ],
      },
    },
    local: {
      id: 'local',
      title: 'Restaurantes, Cafeterías & Comercio Local',
      badge: 'COMERCIO & HOSTELERÍA',
      tagline: 'Carta digital interactiva, reservas rápidas y horario siempre actualizado.',
      priceRange: 'Desde 290 €',
      timeframe: '5 - 7 días',
      conversionHook: 'Cero PDFs pesados. El cliente abre el menú en su móvil sin esperar ni descargar nada.',
      features: [
        'Carta digital rápida sin descargar PDF',
        'Botón de llamada para reserva de mesa',
        'Alérgenos y fotos de platos estrella',
        'Enlace a Google Maps con cómo llegar',
      ],
      mockup: {
        brandName: 'BISTRO & GASTRONOMÍA',
        heroTitle: 'Cocina de mercado con ingredientes frescos del día',
        heroSubtitle: 'Disfruta de nuestros menús degustación y terraza en el centro.',
        ctaText: 'Ver Carta & Menú del Día',
        badgeAlert: '🍴 MENÚ SEMANAL ACTUALIZADO',
        rating: '4.8 ★ (210 reseñas Google)',
        items: [
          { name: 'Menú Degustación de Temporada', detail: 'Entrante + Principal + Postre casero', price: '24,50 €' },
          { name: 'Especialidad de la Casa', detail: 'Receta tradicional con producto local', price: '16,00 €' },
        ],
      },
    },
    pro: {
      id: 'pro',
      title: 'Profesionales, Abogados, Reformas & Pymes',
      badge: 'EMPRESAS & AUTÓNOMOS',
      tagline: 'Web corporativa sobria que transmite máxima solvencia y genera contactos diarios.',
      priceRange: 'Desde 350 €',
      timeframe: '6 - 9 días',
      conversionHook: 'Diferénciate de la competencia con una web rápida que te sitúa como la opción de confianza.',
      features: [
        'Presentación clara de servicios y tarifas',
        'Formulario de solicitud de presupuesto',
        'Garantía y sellos de confianza',
        'Aviso legal, privacidad y cookies UE',
      ],
      mockup: {
        brandName: 'SOLUCIONES TÉCNICAS PRO',
        heroTitle: 'Servicios profesionales con presupuesto cerrado en 24h',
        heroSubtitle: 'Más de 10 años de experiencia solucionando proyectos con máxima transparencia.',
        ctaText: 'Pedir Presupuesto Gratuito',
        badgeAlert: '💼 PRESUPUESTOS SIN COMPROMISO',
        rating: '4.9 ★ (76 valoraciones)',
        items: [
          { name: 'Servicio Integral Llave en Mano', detail: 'Garantía por escrito y ejecución rápida', price: 'A medida' },
          { name: 'Consultoría & Diagnóstico', detail: 'Revisión completa y plan de acción', price: 'Consultar' },
        ],
      },
    },
  };

  const current = sectorTemplates[sector];

  const handleSelectTemplate = () => {
    const msg = `[SOLICITUD DESDE EL SIMULADOR WEB]:
- Sector seleccionado: ${current.title}
- Formato preferido: ${device === 'mobile' ? 'Móvil First' : 'Escritorio & Móvil'}
- Rango de referencia: ${current.priceRange}

Hola Omar, me ha gustado esta perspectiva de web para mi negocio y me gustaría un presupuesto formal y hablar de los detalles.`;

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
    <section id="simulador" className="py-24 bg-brand-bg relative border-t border-brand-border/60 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan shadow-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>PERSPECTIVA VISUAL & SIMULADOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight">
            Mira exactamente cómo quedará la web de tu negocio
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Sin tecnicismos ni maquetas complicadas. Selecciona tu sector y comprueba cómo transformamos visitas en llamadas y ventas con una web limpia, rápida y económica.
          </p>
        </div>

        {/* Sector Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {Object.values(sectorTemplates).map((s) => (
            <button
              key={s.id}
              onClick={() => setSector(s.id)}
              className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border flex flex-col justify-between gap-2 shadow-sm ${
                sector === s.id
                  ? 'bg-brand-surface border-brand-cyan text-brand-text ring-1 ring-brand-cyan/30 shadow-brand-cyan/10'
                  : 'bg-brand-surface/60 border-brand-border hover:border-brand-border-light text-brand-muted hover:text-brand-text'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                  sector === s.id ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-card text-brand-dim'
                }`}>
                  {s.badge}
                </span>
                {sector === s.id && <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />}
              </div>
              <span className="text-xs sm:text-sm font-bold line-clamp-2">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Stage: Simulator Frame + Commercial Pricing Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Device Mockup (Phone / Desktop Frame) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Device Switcher Controls */}
            <div className="flex items-center gap-2 mb-4 p-1.5 rounded-2xl bg-brand-surface border border-brand-border shadow-sm">
              <button
                onClick={() => setDevice('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  device === 'mobile'
                    ? 'bg-brand-card text-brand-cyan border border-brand-cyan/30 shadow-sm'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Vista Móvil (90% de tus visitas)</span>
              </button>
              <button
                onClick={() => setDevice('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  device === 'desktop'
                    ? 'bg-brand-card text-brand-cyan border border-brand-cyan/30 shadow-sm'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Vista Ordenador</span>
              </button>
            </div>

            {/* Simulated Device Frame */}
            <div
              className={`transition-all duration-300 w-full overflow-hidden bg-brand-card border border-brand-border shadow-2xl rounded-3xl ${
                device === 'mobile' ? 'max-w-sm border-[6px] border-slate-800' : 'max-w-2xl border-4 border-slate-800'
              }`}
            >
              {/* Device Header Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                  <span>🔒 tu-negocio.es</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">0.5s</span>
              </div>

              {/* Simulated Web Page Content */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-brand-bg via-brand-surface to-brand-bg space-y-4 select-none">
                {/* Navbar Mock */}
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

                {/* Micro Alert Banner */}
                <div className="px-3 py-1.5 rounded-lg bg-brand-card border border-brand-border text-[10px] text-brand-cyan font-mono font-medium text-center">
                  {current.mockup.badgeAlert}
                </div>

                {/* Hero Section */}
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

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <button className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-black bg-brand-cyan rounded-xl shadow-md">
                      {current.mockup.ctaText}
                    </button>
                    <button className="w-full sm:w-auto px-3.5 py-2 text-xs font-semibold text-brand-text bg-brand-surface border border-brand-border rounded-xl flex items-center justify-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Llamar Directo</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Content Cards */}
                <div className="space-y-2 pt-2 border-t border-brand-border/60">
                  <div className="text-[10px] font-mono text-brand-dim uppercase tracking-wider">
                    DESTACADOS DE TU NEGOCIO:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.mockup.items.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-brand-surface/90 border border-brand-border space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-brand-text truncate">{item.name}</h4>
                          <span className="text-[11px] font-mono text-brand-cyan font-bold">{item.price}</span>
                        </div>
                        <p className="text-[10px] text-brand-muted">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating WhatsApp Quick Action Simulation */}
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] text-emerald-400 font-semibold">Respuesta inmediata por WhatsApp</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 font-mono">1 toque</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Offer & What's Included */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                PLAN & PRESUPUESTO RECOMENDADO
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight">
                {current.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {current.tagline}
              </p>
            </div>

            {/* Price & Delivery Card */}
            <div className="p-6 rounded-3xl bg-brand-surface border border-brand-border shadow-xl space-y-4">
              <div className="flex items-baseline justify-between pb-3 border-b border-brand-border">
                <div>
                  <div className="text-xs font-mono text-brand-dim">PRECIO ORIENTATIVO</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-text font-mono">
                    {current.priceRange}
                  </div>
                  <div className="text-[10px] text-brand-dim">Pago único · Sin comisiones ni ataduras</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-brand-dim">TIEMPO DE ENTREGA</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    {current.timeframe}
                  </div>
                  <div className="text-[10px] text-brand-dim">Puesta en marcha lista</div>
                </div>
              </div>

              {/* Conversion hook benefit */}
              <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-xs text-brand-text flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-snug">{current.conversionHook}</span>
              </div>

              {/* Features list */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-brand-dim uppercase">Qué incluye tu web:</div>
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-brand-text">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <button
                  onClick={handleSelectTemplate}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 group"
                >
                  <span>Pedir presupuesto para esta solución</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-brand-dim font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Código 100% de tu propiedad
              </span>
              <span>•</span>
              <span>Garantía técnica directa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
