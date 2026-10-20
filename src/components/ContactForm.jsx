'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Mail, ShieldCheck, Clock, Lock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { isValidEmail } from '@/lib/sanitize';

export default function ContactForm({ initialData, onOpenLegalModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Económica para Negocio / Autónomo',
    message: '',
    privacyAccepted: false,
    _gotcha: '', // Honeypot field for bot mitigation
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Sincronizar datos si vienen pre-rellenados desde el Configurador / Auditoría
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialData.projectType || prev.projectType,
        message: initialData.message ? initialData.message : prev.message,
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validaciones client-side
    if (!formData.name.trim()) {
      setStatus('error');
      setStatusMessage('Por favor, indica tu nombre o el de tu negocio.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus('error');
      setStatusMessage('Por favor, introduce un correo electrónico válido para poder responderte.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Por favor, cuéntanos brevemente qué necesitas o en qué consiste tu proyecto.');
      return;
    }

    if (!formData.privacyAccepted) {
      setStatus('error');
      setStatusMessage('Debes aceptar la política de privacidad para enviar tu solicitud.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || '¡Solicitud recibida con éxito! Te responderemos directamente por correo en menos de 24 horas laborables.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Web Económica para Negocio / Autónomo',
          message: '',
          privacyAccepted: false,
          _gotcha: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Ocurrió un error al enviar el formulario. Puedes escribirnos directamente a oloboc.digitalbusiness@gmail.com');
      }
    } catch (err) {
      console.error('Contact Form Fetch Error:', err);
      setStatus('error');
      setStatusMessage('No se pudo establecer conexión. Por favor, escribe directamente a nuestro correo: oloboc.digitalbusiness@gmail.com');
    }
  };

  return (
    <section id="contacto" className="py-28 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Email Card & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span>CANAL DIRECTO POR CORREO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
                Hablemos de tu proyecto
              </h2>
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                Cuéntame qué necesitas solucionar o mejorar. Recibirás una respuesta personalizada, opciones económicas adaptadas a tu presupuesto y estimación de tiempos directamente de Omar.
              </p>
            </div>

            {/* Direct Email Address Action Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-surface border border-brand-border space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  BUZÓN OFICIAL DEL ESTUDIO
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  RESPUESTA &lt; 24H
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-brand-text">¿Prefieres escribir directamente desde tu correo?</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Haz clic a continuación para abrir tu cliente de correo habitual con nuestro email oficial preconfigurado.
                </p>
              </div>

              <a
                href="mailto:oloboc.digitalbusiness@gmail.com?subject=Consulta%20Proyecto%20Web%20-%20Nortcode"
                className="w-full inline-flex items-center justify-between gap-3 p-4 rounded-2xl bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-brand-cyan/40 transition-all group"
              >
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-cyan group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate text-left">
                    <span className="block text-xs font-mono font-bold text-brand-text truncate">
                      oloboc.digitalbusiness@gmail.com
                    </span>
                    <span className="block text-[11px] text-brand-dim">
                      Enviar correo directo ↗
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-dim group-hover:text-brand-cyan group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            </div>

            {/* Trust and Privacy Commitments */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 text-xs text-brand-muted">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Respuesta en menos de 24 horas:</strong> Análisis honesto de tu proyecto con opciones de presupuesto detalladas.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-brand-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Privacidad estricta:</strong> Tus datos se tratan conforme al RGPD exclusivamente para responder a tu consulta. Cero spam.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-brand-muted">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Presupuesto cerrado:</strong> Lo acordado es lo que pagas, sin sorpresas ni costes ocultos.</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-brand-surface border border-brand-border shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot field for bot mitigation (hidden) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Form Header */}
                <div className="border-b border-brand-border/60 pb-4">
                  <h3 className="text-xl font-bold text-brand-text">Solicitud de Presupuesto</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Recibirás una respuesta personalizada directamente en tu buzón de correo.
                  </p>
                </div>

                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold text-brand-text">
                      Nombre o Negocio <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ej. Carlos Martínez (Taller Norte)"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-text placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold text-brand-text">
                      Tu Correo Electrónico <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-text placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>
                </div>

                {/* Row: Phone and Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-semibold text-brand-text">
                      Teléfono de Contacto <span className="text-brand-dim font-normal">(Opcional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="600 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-text placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="block text-xs font-semibold text-brand-text">
                      Tipo de Solución
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-text text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    >
                      <option value="Web para Negocio Local / Autónomo">Web para Negocio Local / Autónomo</option>
                      <option value="Web Corporativa de Empresa & Catálogo">Web Corporativa de Empresa & Catálogo</option>
                      <option value="Software a Medida & Panel de Control SaaS">Software a Medida & Panel de Control SaaS</option>
                      <option value="Automatización 24/7 & Agentes de IA">Automatización 24/7 & Agentes de IA</option>
                      <option value="Portafolio Personal / Profesional de Autor">Portafolio Personal / Profesional de Autor</option>
                      <option value="Modernización & Rescate de Web Lenta">Modernización & Rescate de Web Lenta</option>
                      <option value="Auditoría Técnica, OWASP & RGPD">Auditoría Técnica, OWASP & RGPD</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-brand-text">
                    ¿Qué necesitas o cuál es tu idea? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Cuéntanos brevemente sobre tu negocio, tus objetivos o si tienes una web que deseas rehacer..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-text placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-y"
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <input
                      id="privacyAccepted"
                      name="privacyAccepted"
                      type="checkbox"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-brand-border bg-brand-card text-brand-cyan focus:ring-brand-cyan focus:ring-offset-0 transition-colors"
                    />
                    <label htmlFor="privacyAccepted" className="text-xs text-brand-muted leading-relaxed">
                      He leído y acepto la{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegalModal('privacidad')}
                        className="text-brand-cyan hover:underline inline"
                      >
                        política de privacidad
                      </button>{' '}
                      y autorizo el tratamiento de mis datos exclusivamente para recibir presupuesto y contacto comercial sobre mi consulta.
                    </label>
                  </div>
                </div>

                {/* Status Feedback Alerts */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 dark:text-rose-400 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 text-xs flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all shadow-lg shadow-brand-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                  >
                    {status === 'loading' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Enviando al correo del estudio...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Solicitud por Correo</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-brand-dim mt-2">
                    Respuesta directa garantizada en menos de 24h
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
