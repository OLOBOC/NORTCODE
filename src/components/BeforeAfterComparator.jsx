'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight, Clock, FileSpreadsheet, Database, MessageSquare, Zap, ShieldAlert, ShieldCheck, Gauge, Smartphone, Bot, DollarSign, Sparkles } from 'lucide-react';

export default function BeforeAfterComparator() {
  const [activeTab, setActiveTab] = useState('speed'); // 'speed' | 'operations' | 'automation'
  const [view, setView] = useState('after'); // 'before' | 'after'

  const scenarios = {
    speed: {
      category: 'RENDIMIENTO WEB & CONVERSIÓN DE CLIENTES',
      title: 'Web Tradicional Lenta vs. Arquitectura Nortcode de Alta Velocidad',
      before: {
        banner: 'CONVENCIONAL: Carga lenta en smartphones y pérdida del 35% de visitas',
        items: [
          {
            title: '4.8 segundos de carga en móviles',
            desc: 'Construida con constructores visuales pesados o plantillas sobrecargadas con decenas de plugins innecesarios.',
            icon: Clock,
          },
          {
            title: 'Puntuación deficiente en Google (35/100)',
            desc: 'Google penaliza directamente el posicionamiento de tu negocio y te cobra más caro en campañas de publicidad.',
            icon: Gauge,
          },
          {
            title: 'Clientes que abandonan sin llamar',
            desc: 'Más del 30% de usuarios cierran la pestaña antes de ver tus servicios porque la web tarda demasiado.',
            icon: AlertCircle,
          },
          {
            title: 'Mantenimiento frágil y actualizaciones rotas',
            desc: 'Cada vez que se actualiza un plugin de terceros algo deja de funcionar o se desconfigura en móvil.',
            icon: ShieldAlert,
          },
        ],
      },
      after: {
        banner: 'RESULTADO NORTCODE: Carga instantánea en 0.6s y retención máxima de visitas',
        items: [
          {
            title: '0.6 segundos de renderizado en Edge CDN',
            desc: 'Programada con Next.js y React 19. El usuario toca la pantalla y la web ya está lista al milisegundo.',
            icon: Zap,
          },
          {
            title: 'Puntuación 95-100 en Google PageSpeed',
            desc: 'Estructura semántica que enamora al algoritmo de Google y mejora orgánicamente el posicionamiento local.',
            icon: Gauge,
          },
          {
            title: 'Mayor conversión comercial',
            desc: 'Al no haber tiempos de espera, los clientes navegan por tu catálogo y pulsan el botón de llamada o contacto.',
            icon: CheckCircle,
          },
          {
            title: 'Cero cuotas cautivas ni plugins frágiles',
            desc: 'Código limpio, robusto y escalable sin dependencias propietarias ni costes ocultos cada mes.',
            icon: ShieldCheck,
          },
        ],
      },
    },
    operations: {
      category: 'DIGITALIZACIÓN DE NEGOCIOS & OPERATIVA',
      title: 'Caos en Hojas de Cálculo vs. Sistema Digital Centralizado',
      before: {
        banner: 'CONVENCIONAL: Más de 12 horas semanales perdidas en tareas mecánicas',
        items: [
          {
            title: 'Hojas de Excel desincronizadas',
            desc: 'Ficheros con nombres "final_v2_modificado.xlsx", fórmulas que se rompen y datos pisados entre compañeros.',
            icon: FileSpreadsheet,
          },
          {
            title: 'Gestión reactiva por WhatsApp',
            desc: 'Peticiones de clientes que se traspapelan en chats personales, presupuestos olvidados y descontrol.',
            icon: MessageSquare,
          },
          {
            title: 'Copia y pega manual continuo',
            desc: 'Copiar a mano datos del correo al albarán, del albarán al programa de facturación y a la contabilidad.',
            icon: Clock,
          },
          {
            title: 'Riesgo constante de fugas de datos',
            desc: 'Información confidencial de clientes dispersa en discos locales sin control de accesos ni cumplimiento RGPD.',
            icon: ShieldAlert,
          },
        ],
      },
      after: {
        banner: 'RESULTADO NORTCODE: Centralización segura en la nube y ahorro de 10-15h al mes',
        items: [
          {
            title: 'Base de datos unificada y segura',
            desc: 'Toda la información de clientes, presupuestos y pedidos centralizada en una base de datos segura.',
            icon: Database,
          },
          {
            title: 'Búsquedas y filtros en milisegundos',
            desc: 'Encuentra cualquier registro o historial comercial en un segundo desde tu teléfono o el ordenador.',
            icon: CheckCircle,
          },
          {
            title: 'Cero duplicidades ni datos perdidos',
            desc: 'Reglas de validación automáticas que garantizan que ningún dato se guarde incompleto o erróneo.',
            icon: ShieldCheck,
          },
          {
            title: 'Acceso seguro con roles de usuario',
            desc: 'Cada empleado o colaborador accede únicamente a lo que necesita ver, cumpliendo con la legislación vigente.',
            icon: ShieldCheck,
          },
        ],
      },
    },
    automation: {
      category: 'AUTOMATIZACIÓN CON IA & FLUJOS INTELIGENTES',
      title: 'Atención Comercial Manual vs. Flujos Inteligentes 24/7',
      before: {
        banner: 'CONVENCIONAL: Pérdida de ventas por responder tarde a los clientes',
        items: [
          {
            title: 'Responder presupuestos con 2 días de retraso',
            desc: 'Cuando respondes al cliente, este ya ha pedido presupuesto a tres competidores y ha contratado a otro.',
            icon: Clock,
          },
          {
            title: 'Redacción manual de contratos y emails',
            desc: 'Escribir una y otra vez el mismo correo estándar y rellenar manualmente las mismas plantillas en PDF.',
            icon: AlertCircle,
          },
          {
            title: 'Sistemas desconectados entre sí',
            desc: 'Tu web no se habla con tu correo, tu correo no se habla con tu calendario y todo requiere tu intervención.',
            icon: ShieldAlert,
          },
          {
            title: 'Coste oculto en horas de personal',
            desc: 'Pagar nóminas o gastar tu propio tiempo en hacer de puente humano entre dos programas informáticos.',
            icon: DollarSign,
          },
        ],
      },
      after: {
        banner: 'RESULTADO NORTCODE: Respuesta en 30 segundos y flujos sincronizados sin esfuerzo',
        items: [
          {
            title: 'Respuesta inmediata al lead con IA',
            desc: 'El cliente pide información un domingo y recibe un presupuesto preliminar o confirmación en segundos.',
            icon: Bot,
          },
          {
            title: 'Generación automática de contratos y facturas',
            desc: 'Al confirmar el servicio, el sistema genera el documento, lo envía al cliente y lo archiva en tu nube.',
            icon: CheckCircle,
          },
          {
            title: 'Conexión total con n8n y webhooks',
            desc: 'Tu web, WhatsApp, correo y calendario trabajan en sincronía constante sin que tengas que pulsar un botón.',
            icon: Zap,
          },
          {
            title: 'Tu negocio funcionando en piloto automático',
            desc: 'Dedicas tu tiempo a mejorar el producto y atender a clientes reales, no a tareas mecánicas de oficina.',
            icon: Sparkles,
          },
        ],
      },
    },
  };

  const currentScenario = scenarios[activeTab];

  return (
    <div className="rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Scenario Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-brand-border">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('speed')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'speed'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-sm'
                : 'bg-brand-card text-brand-muted hover:text-brand-text border border-brand-border'
            }`}
          >
            01. Velocidad & Ventas
          </button>
          <button
            onClick={() => setActiveTab('operations')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'operations'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-sm'
                : 'bg-brand-card text-brand-muted hover:text-brand-text border border-brand-border'
            }`}
          >
            02. Procesos & Datos
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'automation'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-sm'
                : 'bg-brand-card text-brand-muted hover:text-brand-text border border-brand-border'
            }`}
          >
            03. Automatización & IA
          </button>
        </div>

        {/* Before / After Toggle Buttons */}
        <div className="inline-flex p-1 rounded-xl bg-brand-card border border-brand-border text-xs font-semibold">
          <button
            onClick={() => setView('before')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              view === 'before'
                ? 'bg-rose-500/20 text-rose-500 border border-rose-500/40'
                : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Antes: El Caos
          </button>
          <button
            onClick={() => setView('after')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              view === 'after'
                ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/40'
                : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Después: Nortcode
          </button>
        </div>
      </div>

      {/* Scenario Title Header */}
      <div>
        <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-bold">
          {currentScenario.category}
        </span>
        <h4 className="text-lg sm:text-xl font-bold text-brand-text mt-1">
          {currentScenario.title}
        </h4>
      </div>

      {/* Comparison Content */}
      {view === 'before' ? (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center gap-2.5 text-xs text-rose-500 dark:text-rose-400 font-mono font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{currentScenario.before.banner}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentScenario.before.items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-brand-card/70 border border-brand-border space-y-2">
                  <div className="flex items-center gap-2 text-rose-500 text-xs font-bold">
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2.5 text-xs text-emerald-500 dark:text-emerald-400 font-mono font-semibold">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{currentScenario.after.banner}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentScenario.after.items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-brand-card/70 border border-brand-border space-y-2">
                  <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold">
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
