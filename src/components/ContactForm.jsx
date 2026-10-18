'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Mail, MessageSquare, ShieldCheck, Clock, Lock } from 'lucide-react';
import { isValidEmail } from '@/lib/sanitize';

export default function ContactForm({ initialData, onOpenLegalModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Desarrollo Web & Presencia Digital',
    message: '',
    privacyAccepted: false,
    _gotcha: '', // Honeypot field for bot mitigation
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Sincronizar datos si vienen pre-rellenados desde el Need Matcher / Calculador
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
      setStatusMessage('Por favor, indica tu nombre.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus('error');
      setStatusMessage('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Por favor, escribe una descripción de tu proyecto o necesidad.');
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
        setStatusMessage(data.message || 'Solicitud recibida. Te responderemos en menos de 24 horas laborables.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Desarrollo Web & Presencia Digital',
          message: '',
          privacyAccepted: false,
          _gotcha: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Ocurrió un error al enviar el formulario. Inténtalo de nuevo.');
      }
    } catch (err) {
      console.error('Contact Form Fetch Error:', err);
      setStatus('error');
      setStatusMessage('No se pudo establecer conexión con el servidor. Por favor, escribe directamente a oloboc.digitalbusiness@gmail.com');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-brand-bg relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context, Email, and Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span>CANAL DIRECTO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hablemos de tu proyecto sin rodeos comerciales
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Cuéntame qué necesitas solucionar o mejorar. Recibirás un diagnóstico honesto, presupuesto ajustado y estimación de tiempos directamente del desarrollador.
              </p>
            </div>

            {/* Direct Official Email Card */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-3">
              <span className="text-[10px] font-mono text-brand-dim uppercase tracking-wider">
                CORREO ELECTRÓNICO OFICIAL:
              </span>
              <a
                href="mailto:oloboc.digitalbusiness@gmail.com"
                className="flex items-center gap-3 text-sm sm:text-base font-mono text-white hover:text-brand-cyan transition-colors group"
              >
                <div className="p-2 rounded-lg bg-brand-card border border-brand-border text-brand-cyan group-hover:border-brand-cyan/40 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="break-all font-semibold">oloboc.digitalbusiness@gmail.com</span>
              </a>
              <div className="text-xs text-brand-dim flex items-center gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tiempo medio de respuesta: &lt; 24 horas</span>
              </div>
            </div>

            {/* Modular WhatsApp / Direct Chat Ready Container */}
            <div className="p-5 rounded-2xl bg-brand-card/60 border border-brand-border space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-brand-dim">CANAL DE MENSAJERÍA DIRECTA</span>
                <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 text-[10px]">
                  ENLACE RÁPIDO
                </span>
              </div>
              <p className="text-xs text-brand-muted">
                ¿Prefieres consultar por WhatsApp o mensajería directa? Puedes solicitar contacto prioritario marcándolo en el formulario o escribiendo directamente.
              </p>
              <div className="pt-1">
                <a
                  href="mailto:oloboc.digitalbusiness@gmail.com?subject=Consulta%20Rápida%20Nortcode"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Iniciar conversación rápida por correo</span>
                </a>
              </div>
            </div>

            {/* Security and Privacy Assurance */}
            <div className="p-4 rounded-xl bg-brand-surface/40 border border-brand-border/60 text-xs text-brand-dim space-y-2">
              <div className="flex items-center gap-2 text-brand-text font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Seguridad de Datos y Privacidad RGPD</span>
              </div>
              <p className="leading-relaxed">
                Tus datos nunca se cederán a terceros ni se usarán para boletines no solicitados. Solo se emplean para responder a tu consulta técnica.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-brand-border flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Formulario de Contacto Técnico</h3>
                  <p className="text-xs text-brand-muted mt-0.5">Rellena los datos para procesar tu solicitud.</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-800/40">
                  <Lock className="w-3 h-3" />
                  <span>CIFRADO SSL</span>
                </div>
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-white">¡Mensaje enviado con éxito!</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-white">No se pudo enviar</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field - invisible to humans */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_gotcha">Leave this empty</label>
                  <input
                    type="text"
                    id="_gotcha"
                    name="_gotcha"
                    tabIndex="-1"
                    value={formData._gotcha}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-medium text-brand-text">
                      Nombre o Empresa <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Carlos Martínez"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-white placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-medium text-brand-text">
                      Correo Electrónico <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="carlos@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-white placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-medium text-brand-text">
                      Teléfono de contacto <span className="text-brand-dim text-[11px]">(Opcional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-white placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="block text-xs font-medium text-brand-text">
                      Línea de Interés / Servicio
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-colors"
                    >
                      <option value="Desarrollo Web & Presencia Digital">Desarrollo Web & Presencia Digital</option>
                      <option value="Digitalización de Procesos">Digitalización de Procesos</option>
                      <option value="Automatización & IA Aplicada">Automatización & IA Aplicada</option>
                      <option value="Consultoría & Auditoría Técnica">Consultoría & Auditoría Técnica</option>
                      <option value="Otro / Consulta General">Otro / Consulta General</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-medium text-brand-text">
                    Detalles del proyecto o necesidad <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tus requerimientos o problemas actuales..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-white placeholder-brand-dim text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan transition-colors leading-relaxed font-mono"
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    required
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded bg-brand-bg border-brand-border text-brand-cyan focus:ring-brand-cyan focus:ring-offset-brand-bg cursor-pointer"
                  />
                  <label htmlFor="privacyAccepted" className="text-xs text-brand-muted leading-relaxed">
                    He leído y acepto la{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegalModal?.('privacidad')}
                      className="text-brand-cyan hover:underline focus:outline-none"
                    >
                      Política de Privacidad
                    </button>
                    . Autorizo el tratamiento de mis datos personales exclusivamente con el fin de resolver mi consulta conforme al RGPD y la LOPDGDD.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-xl transition-all duration-200 shadow-lg shadow-brand-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
                  >
                    {status === 'loading' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Enviando mensaje seguro...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Solicitud al Desarrollador</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Footer Micro-note */}
                <div className="text-center pt-2 text-[11px] font-mono text-brand-dim">
                  Destino directo: oloboc.digitalbusiness@gmail.com • Cero Spam Garantizado
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
