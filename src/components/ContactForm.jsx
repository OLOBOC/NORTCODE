'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, MessageSquare, MessageCircle, ShieldCheck, Clock, Lock, Sparkles, Check } from 'lucide-react';
import { isValidEmail } from '@/lib/sanitize';

export default function ContactForm({ initialData, onOpenLegalModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Página Web para mi Negocio',
    message: '',
    privacyAccepted: false,
    _gotcha: '', // Honeypot field for bot mitigation
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Sincronizar datos si vienen pre-rellenados desde el Simulador / Auditoría
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

    // 1. Client-side validations
    if (!formData.name.trim()) {
      setStatus('error');
      setStatusMessage('Por favor, indica tu nombre o el nombre de tu empresa.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus('error');
      setStatusMessage('Por favor, introduce un correo electrónico válido para poder responderte.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Por favor, cuéntanos brevemente qué necesitas o en qué consiste tu negocio.');
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
        setStatusMessage(data.message || '¡Solicitud recibida con éxito! Te responderemos directamente en menos de 24 horas con una propuesta clara y presupuesto.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Página Web para mi Negocio',
          message: '',
          privacyAccepted: false,
          _gotcha: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Ocurrió un error al enviar el formulario. Puedes contactar directamente por WhatsApp pulsando el botón lateral.');
      }
    } catch (err) {
      console.error('Contact Form Fetch Error:', err);
      setStatus('error');
      setStatusMessage('No se pudo establecer conexión con el servidor. Si lo prefieres, pulsa el botón de WhatsApp para escribirnos directamente.');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context, WhatsApp Option & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span>CONTACTO DIRECTO & PRESUPUESTO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight">
                Pide presupuesto sin ningún compromiso
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                Cuéntame qué necesitas para tu negocio. Recibirás un diagnóstico sincero, opciones adaptadas a tu presupuesto y estimación de tiempos directamente de Omar, sin comerciales ni intermediarios.
              </p>
            </div>

            {/* Direct WhatsApp Quick Card */}
            <div className="p-6 rounded-3xl bg-brand-surface border border-brand-border space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  RESPUESTA MÁS RÁPIDA
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVO AHORA
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-brand-text">¿Prefieres consultarlo por chat?</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Escríbeme por WhatsApp y cuéntame tu caso en un minuto. Te respondo hoy mismo.
                </p>
              </div>

              <a
                href="https://wa.me/34600000000?text=Hola%20Omar,%20he%20visto%20la%20web%20de%20Nortcode%20y%20quiero%20pedir%20presupuesto%20para%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-900/30 group"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Abrir Chat de WhatsApp</span>
              </a>
            </div>

            {/* Trust and Privacy Commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-brand-muted">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Respuesta en menos de 24 horas:</strong> Revisamos cada solicitud con detenimiento para darte una respuesta técnica y comercial rigurosa.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-brand-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Confidencialidad absoluta:</strong> Tus datos se tratan conforme al RGPD exclusivamente para responder a tu consulta. Cero spam.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-brand-muted">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Presupuesto cerrado:</strong> Lo que presupuestamos es lo que pagas, sin costes ocultos al finalizar.</span>
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
                  <h3 className="text-xl font-bold text-brand-text">Formulario de Presupuesto</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Rellena estos campos básicos y te enviamos una propuesta detallada.
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
                      Correo Electrónico <span className="text-rose-500">*</span>
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
                      Teléfono / WhatsApp <span className="text-brand-dim font-normal">(Opcional)</span>
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
                      <option value="Web Económica para Negocio / Autónomo">Web Económica para Negocio / Autónomo</option>
                      <option value="Web Corporativa de Empresa / Catálogo">Web Corporativa de Empresa / Catálogo Dinámico</option>
                      <option value="Portafolio Personal de Autor">Portafolio Personal / Profesional de Autor</option>
                      <option value="Modernización de Web Lenta">Modernización de Web Existente Lenta</option>
                      <option value="Digitalización de Procesos">Digitalización de Procesos & Datos</option>
                      <option value="Automatización con IA">Automatización con Inteligencia Artificial</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-brand-text">
                    ¿Qué necesitas o cuál es tu objetivo? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Cuéntanos brevemente sobre tu negocio, si tienes ya una web o si partes de cero..."
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
                        <span>Enviando solicitud...</span>
                      </>
                    ) : (
                      <>
                        <span>Solicitar Presupuesto Gratuito</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-brand-dim mt-2">
                    Sin permanencia · Sin llamadas comerciales molestas
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
