/**
 * Utilidades de sanitización y validación estricta para prevención de XSS y entradas maliciosas
 */

export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/[<>]/g, '') // Elimina etiquetas angulares
    .replace(/javascript:/gi, '') // Elimina pseudo-protocolos javascript
    .replace(/on\w+=/gi, '') // Elimina manejadores de eventos inline tipo onclick
    .slice(0, 3000); // Límite seguro de caracteres
}

export function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim()) && email.length <= 120;
}
