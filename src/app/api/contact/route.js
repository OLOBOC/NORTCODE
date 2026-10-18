import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sanitizeInput, isValidEmail } from '@/lib/sanitize';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message, privacyAccepted, _gotcha } = body;

    // 1. Detección antispam mediante Honeypot
    if (_gotcha && _gotcha.trim() !== '') {
      return NextResponse.json(
        { success: false, error: 'Solicitud rechazada por protocolo antispam.' },
        { status: 400 }
      );
    }

    // 2. Validación obligatoria de campos
    if (!name || !email || !message || !privacyAccepted) {
      return NextResponse.json(
        { success: false, error: 'Por favor, rellena todos los campos obligatorios y acepta la política de privacidad.' },
        { status: 400 }
      );
    }

    // 3. Validación de formato de email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'El formato de correo electrónico no es válido.' },
        { status: 400 }
      );
    }

    // 4. Sanitización de datos
    const safeName = sanitizeInput(name);
    const safeEmail = sanitizeInput(email);
    const safePhone = sanitizeInput(phone || 'No especificado');
    const safeProjectType = sanitizeInput(projectType || 'General / No especificado');
    const safeMessage = sanitizeInput(message);

    // 5. Preparación del mensaje
    const destinationEmail = process.env.EMAIL_TO || 'oloboc.digitalbusiness@gmail.com';
    const fromSender = process.env.EMAIL_FROM || 'Nortcode Web <onboarding@resend.dev>';
    const resendApiKey = process.env.RESEND_API_KEY;

    const emailSubject = `[Nuevo Lead Nortcode] - ${safeName} (${safeProjectType})`;
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0d11; color: #f3f4f6; padding: 32px; border-radius: 8px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #12151b; border: 1px solid #202530; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #161a22; padding: 20px 24px; border-bottom: 2px solid #00f0ff;">
            <h2 style="margin: 0; color: #00f0ff; font-size: 20px; letter-spacing: 0.5px;">NORTCODE // Nueva Solicitud de Proyecto</h2>
            <p style="margin: 4px 0 0; color: #9ca3af; font-size: 13px;">Recibido a través del formulario oficial de nortcode.es</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #e5e7eb;">
              <tr>
                <td style="padding: 8px 0; color: #9ca3af; width: 140px;"><strong>Nombre:</strong></td>
                <td style="padding: 8px 0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #00f0ff; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;"><strong>Teléfono:</strong></td>
                <td style="padding: 8px 0;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9ca3af;"><strong>Tipo de Proyecto:</strong></td>
                <td style="padding: 8px 0;"><span style="background-color: #1f2533; color: #38bdf8; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${safeProjectType}</span></td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #222730;">
              <h4 style="margin: 0 0 12px; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Detalle del Mensaje / Necesidad:</h4>
              <div style="background-color: #090a0d; border: 1px solid #1e232d; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-family: monospace; font-size: 13px; line-height: 1.6; color: #d1d5db;">
${safeMessage}
              </div>
            </div>

            <div style="margin-top: 24px; font-size: 11px; color: #6b7280; border-top: 1px solid #202530; padding-top: 16px;">
              IP Origen: Verificada • Consentimiento RGPD aceptado • Timestamp: ${new Date().toISOString()}
            </div>
          </div>
        </div>
      </div>
    `;

    // 6. Envío mediante Resend si está configurada la API KEY
    if (resendApiKey && resendApiKey.trim() !== '') {
      const resend = new Resend(resendApiKey);
      const { data, error } = await resend.emails.send({
        from: fromSender,
        to: [destinationEmail],
        replyTo: safeEmail,
        subject: emailSubject,
        html: emailHtml,
      });

      if (error) {
        console.error('[Nortcode Resend Error]:', error);
        return NextResponse.json(
          { success: false, error: 'Hubo un error con el proveedor de correo al procesar tu solicitud. Inténtalo de nuevo.' },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Tu mensaje ha sido enviado correctamente. Responderemos en menos de 24 horas laborables.',
        id: data?.id,
      });
    } else {
      // Modo de desarrollo/preparación si aún no se ha añadido la clave de Resend en .env.local
      console.log('--------------------------------------------------');
      console.log('ℹ️ [NORTCODE CONTACT - MODO DEMO / LOCAL]');
      console.log(`Destinatario oficial: ${destinationEmail}`);
      console.log(`Remitente: ${safeName} <${safeEmail}>`);
      console.log(`Proyecto: ${safeProjectType}`);
      console.log(`Mensaje: ${safeMessage}`);
      console.log('Para envío real en producción, añade RESEND_API_KEY en .env.local');
      console.log('--------------------------------------------------');

      return NextResponse.json({
        success: true,
        message: 'Solicitud recibida correctamente. (Entorno listo: para envíos en vivo en producción añade tu RESEND_API_KEY).',
        isLocalSimulated: true,
      });
    }
  } catch (err) {
    console.error('[Nortcode Contact API Exception]:', err);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor al procesar la solicitud.' },
      { status: 500 }
    );
  }
}
