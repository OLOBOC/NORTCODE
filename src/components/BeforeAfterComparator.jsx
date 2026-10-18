'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight, Clock, FileSpreadsheet, Database, MessageSquare, Zap, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function BeforeAfterComparator() {
  const [view, setView] = useState('after'); // 'before' | 'after'

  return (
    <div className="rounded-2xl bg-brand-surface border border-brand-border p-5 sm:p-6 shadow-xl space-y-6">
      {/* Switcher Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-brand-border">
        <div>
          <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
            Transformación Operativa
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            Caos Manual vs. Sistema Digital Estructurado
          </h4>
        </div>

        <div className="inline-flex p-1 rounded-xl bg-brand-bg border border-brand-border text-xs font-medium">
          <button
            onClick={() => setView('before')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              view === 'before'
                ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            Antes: Fricción & Desorden
          </button>
          <button
            onClick={() => setView('after')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              view === 'after'
                ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            Después: Nortcode Digital
          </button>
        </div>
      </div>

      {/* Comparison Body */}
      {view === 'before' ? (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/30 flex items-center gap-2.5 text-xs text-rose-300 font-mono">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>ESTADO ACTUAL CONVENCIONAL: Pérdida media de 12 horas semanales por persona</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-brand-bg/60 border border-brand-border space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-medium">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Hojas de Excel Desincronizadas</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Archivos con nombres "definitivo_v3_final.xlsx", fórmulas rotas y datos pisados entre compañeros.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-bg/60 border border-brand-border space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-medium">
                <MessageSquare className="w-4 h-4" />
                <span>Gestión Reactiva por WhatsApp</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Mensajes de clientes traspapelados, peticiones olvidadas y falta de historial trazable.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-bg/60 border border-brand-border space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-medium">
                <Clock className="w-4 h-4" />
                <span>Copia y Pega Manual de Datos</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Copiar información del formulario al correo, del correo a la factura y a la hoja de contabilidad.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-bg/60 border border-brand-border space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-medium">
                <ShieldAlert className="w-4 h-4" />
                <span>Vulnerabilidad & Fugas de Datos</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Información confidencial de clientes dispersa en carpetas locales sin control de accesos ni RGPD.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 flex items-center gap-2.5 text-xs text-emerald-300 font-mono">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>RESULTADO DIGITAL NORTCODE: Automatización de flujos y reducción de errores al 0%</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-cyan/30 transition-colors space-y-2">
              <div className="flex items-center gap-2 text-brand-cyan text-xs font-medium">
                <Database className="w-4 h-4" />
                <span>Base de Datos Centralizada & Segura</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Toda la información de tu negocio en una fuente única de verdad, respaldada en la nube y accesible según permisos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-cyan/30 transition-colors space-y-2">
              <div className="flex items-center gap-2 text-brand-cyan text-xs font-medium">
                <Zap className="w-4 h-4" />
                <span>Paneles Operativos en Tiempo Real</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Visibilidad instantánea del estado de pedidos, leads y tareas sin tener que perseguir a nadie.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-cyan/30 transition-colors space-y-2">
              <div className="flex items-center gap-2 text-brand-cyan text-xs font-medium">
                <Clock className="w-4 h-4" />
                <span>Automatización de Tareas Repetitivas</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Cada dato se propaga automáticamente entre la web, el CRM y las alertas del equipo sin intervención humana.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-cyan/30 transition-colors space-y-2">
              <div className="flex items-center gap-2 text-brand-cyan text-xs font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Blindaje Normativo y Control Total</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Trazabilidad completa, cifrado en tránsito y cumplimiento íntegro del RGPD para tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
