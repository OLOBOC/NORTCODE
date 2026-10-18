'use client';

import { useEffect } from 'react';
import { X, ShieldCheck, Scale, Cookie, AlertTriangle } from 'lucide-react';

export default function LegalModals({ activeModal, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="w-full max-w-3xl max-h-[85vh] bg-brand-surface border border-brand-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-card">
          <div className="flex items-center gap-2.5">
            {activeModal === 'aviso' && <Scale className="w-5 h-5 text-brand-cyan" />}
            {activeModal === 'privacidad' && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
            {activeModal === 'cookies' && <Cookie className="w-5 h-5 text-amber-400" />}

            <h3 id="legal-modal-title" className="text-base sm:text-lg font-bold text-white">
              {activeModal === 'aviso' && 'Aviso Legal (LSSI-CE)'}
              {activeModal === 'privacidad' && 'Política de Privacidad (RGPD / LOPDGDD)'}
              {activeModal === 'cookies' && 'Política de Cookies'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-brand-dim hover:text-white hover:bg-brand-elevated transition-colors"
            aria-label="Cerrar ventana legal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Notice on Placeholders */}
        <div className="px-6 py-2.5 bg-amber-950/30 border-b border-amber-900/40 text-[11px] font-mono text-amber-300 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
          <span>
            Cláusula normativa preparada para España/UE. Campos entre corchetes pendientes de completar antes del lanzamiento final.
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-6 py-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
          {/* ========================================================= */}
          {/* AVISO LEGAL */}
          {/* ========================================================= */}
          {activeModal === 'aviso' && (
            <div className="space-y-4">
              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">1. Datos Identificativos del Responsable</h4>
                <p>
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web:
                </p>
                <div className="p-3.5 rounded-lg bg-brand-card border border-brand-border font-mono text-xs text-brand-text space-y-1">
                  <div><strong>Titular:</strong> [COMPLETAR: Nombre y Apellidos / Razón Social del Titular]</div>
                  <div><strong>Nombre Comercial:</strong> Nortcode (Estudio Digital)</div>
                  <div><strong>NIF / CIF:</strong> [COMPLETAR: NIF o CIF Fiscal]</div>
                  <div><strong>Domicilio Social:</strong> [COMPLETAR: Dirección postal completa, Código Postal, Ciudad, España]</div>
                  <div><strong>Email de Contacto Oficial:</strong> oloboc.digitalbusiness@gmail.com</div>
                  <div><strong>Actividad:</strong> Servicios de programación, desarrollo web, consultoría técnica y digitalización de procesos.</div>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">2. Objeto y Condiciones Generales de Uso</h4>
                <p>
                  El acceso y navegación por el sitio web <strong>nortcode.es</strong> atribuye la condición de Usuario, implicando la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios de conformidad con la ley, la buena fe, el orden público y las buenas costumbres.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">3. Propiedad Intelectual e Industrial</h4>
                <p>
                  Todos los contenidos del sitio web, incluyendo código fuente, diseños gráficos, logotipos, isotipo de Nortcode, textos, iconos, estructura de navegación y software, son titularidad exclusiva de Nortcode o de sus legítimos licenciantes, estando protegidos por la normativa española e internacional de propiedad intelectual e industrial. Queda expresamente prohibida la reproducción, distribución o comunicación pública total o parcial sin autorización previa y por escrito.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">4. Exclusión de Responsabilidad</h4>
                <p>
                  Nortcode no se hace responsable de los posibles daños o perjuicios derivados de interferencias, interrupciones, virus informáticos o desconexiones en el funcionamiento operativo de la red ajenos a su control razonable, ni del uso indebido que terceros puedan hacer de los contenidos mostrados.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">5. Legislación Aplicable y Jurisdicción</h4>
                <p>
                  Para la resolución de cualquier controversia o cuestión litigiosa relativa a este sitio web o a las actividades en él desarrolladas, será de aplicación la legislación española vigente, sometiéndose las partes expresamente a la competencia de los Juzgados y Tribunales de [COMPLETAR: Ciudad de Jurisdicción, ej. Oviedo / Madrid].
                </p>
              </section>
            </div>
          )}

          {/* ========================================================= */}
          {/* POLÍTICA DE PRIVACIDAD */}
          {/* ========================================================= */}
          {activeModal === 'privacidad' && (
            <div className="space-y-4">
              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">1. Información al Usuario sobre Protección de Datos</h4>
                <p>
                  De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD) y la Ley Orgánica 3/2018 de 5 de diciembre (LOPDGDD), se informa al usuario de que los datos personales facilitados a través de los formularios o canales de contacto serán tratados bajo la responsabilidad de:
                </p>
                <div className="p-3.5 rounded-lg bg-brand-card border border-brand-border font-mono text-xs text-brand-text space-y-1">
                  <div><strong>Responsable del Tratamiento:</strong> [COMPLETAR: Nombre / Razón Social]</div>
                  <div><strong>NIF:</strong> [COMPLETAR: NIF o CIF]</div>
                  <div><strong>Correo de Privacidad:</strong> oloboc.digitalbusiness@gmail.com</div>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">2. Finalidad del Tratamiento de Datos</h4>
                <p>
                  Tratamos la información que nos facilita el usuario exclusivamente con las siguientes finalidades:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Atender, tramitar y responder a las solicitudes de información, presupuestos o consultas técnicas recibidas mediante el formulario de contacto o correo electrónico.</li>
                  <li>Gestionar la relación contractual o precontractual en caso de contratación de servicios de desarrollo web, digitalización o automatización.</li>
                  <li><strong>Cero SPAM:</strong> En ningún caso se utilizarán sus datos para envíos publicitarios no solicitados ni se cederán a bases de datos de marketing de terceros.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">3. Base Jurídica y Legitimación</h4>
                <p>
                  La base legal para el tratamiento de sus datos es el <strong>consentimiento expreso e informado</strong> del interesado otorgado mediante la marcación de la casilla correspondiente en el formulario de contacto, así como la aplicación de medidas precontractuales o contractuales a petición del mismo (Art. 6.1.a y 6.1.b del RGPD).
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">4. Conservación de los Datos</h4>
                <p>
                  Los datos se conservarán durante el tiempo estrictamente necesario para dar respuesta a la consulta formulada y, en su caso, mientras persistan obligaciones legales o contractuales derivadas de la relación profesional.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">5. Destinatarios y Proveedores de Servicios</h4>
                <p>
                  No se comunicarán los datos a terceros salvo obligación legal. Para la prestación técnica de servicios de correo electrónico transaccional, se hace uso de proveedores de infraestructura que garantizan niveles adecuados de seguridad y cumplimiento con los estándares europeos de protección de datos (como Resend Technologies Inc. bajo Cláusulas Contractuales Tipo de la UE).
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">6. Derechos del Usuario (Derechos ARCO / RGPD)</h4>
                <p>
                  El usuario tiene derecho a:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Acceder a sus datos personales y solicitar la rectificación de los inexactos.</li>
                  <li>Solicitar su supresión cuando ya no sean necesarios para los fines que fueron recogidos.</li>
                  <li>Solicitar la limitación u oposición a su tratamiento, así como la portabilidad de sus datos.</li>
                  <li>Retirar el consentimiento otorgado en cualquier momento.</li>
                </ul>
                <p className="pt-1">
                  Puede ejercer sus derechos enviando un correo electrónico a <strong>oloboc.digitalbusiness@gmail.com</strong> indicando como asunto "Protección de Datos" y adjuntando copia de su documento de identidad para verificación. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.
                </p>
              </section>
            </div>
          )}

          {/* ========================================================= */}
          {/* POLÍTICA DE COOKIES */}
          {/* ========================================================= */}
          {activeModal === 'cookies' && (
            <div className="space-y-4">
              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">1. ¿Qué son las Cookies?</h4>
                <p>
                  Una cookie es un pequeño archivo que se descarga en su dispositivo al acceder a determinadas páginas web. Las cookies permiten a una página web almacenar y recuperar información técnica sobre los hábitos de navegación del usuario o de su equipo con el fin de garantizar el funcionamiento del sitio.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">2. Compromiso de Mínima Huella Digital en Nortcode</h4>
                <p>
                  En consonancia con nuestra política de ciberseguridad, rendimiento y respeto ético al usuario:
                </p>
                <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs">
                  <strong>Sin rastreadores invasivos:</strong> Este sitio web NO instala cookies publicitarias ni herramientas de perfilado invasivo de terceros (como píxeles de remarketing de Facebook o redes de anuncios).
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">3. Tipos de Cookies Empleadas</h4>
                <ul className="list-disc pl-5 space-y-2 text-xs">
                  <li>
                    <strong>Cookies Técnicas Necesarias:</strong> Imprescindibles para la navegación correcta, la seguridad de la sesión, la prevención de abusos en formularios y el almacenamiento de sus preferencias de cookies. Estas cookies no requieren consentimiento previo según el Art. 22.2 de la LSSI.
                  </li>
                  <li>
                    <strong>Cookies de Preferencias Locales:</strong> Guardan temporalmente en el almacenamiento local del navegador (localStorage) el estado del configurador o el banner de consentimiento para evitar mostrarlo repetidamente.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-white text-sm">4. Cómo Desactivar o Gestionar las Cookies</h4>
                <p>
                  El usuario puede en cualquier momento permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de internet (Chrome, Firefox, Safari, Edge). Para más información, consulte la sección de ayuda de su navegador.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-brand-border bg-brand-card flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-brand-bg bg-brand-cyan hover:bg-white rounded-lg transition-colors"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
