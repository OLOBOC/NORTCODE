export const businessNeeds = [
  {
    id: 'web',
    label: 'Tener una web que no genera consultas',
    solution: 'Revisamos el mensaje, el diseño móvil y el camino hasta el contacto para que tus clientes sepan qué ofreces y cómo dar el paso.',
  },
  {
    id: 'reservas',
    label: 'Apuntar citas o solicitudes a mano',
    solution: 'Podemos añadir formularios o reservas online y conectar avisos para que cada solicitud quede organizada y no se pierda.',
  },
  {
    id: 'procesos',
    label: 'Copiar los mismos datos entre herramientas',
    solution: 'Conectamos las herramientas que ya utilizas para mover la información y avisarte automáticamente cuando llega algo nuevo.',
  },
  {
    id: 'respuestas',
    label: 'Contestar una y otra vez las mismas preguntas',
    solution: 'Preparamos respuestas claras con la información de tu negocio y, si encaja, automatizamos las consultas más repetitivas.',
  },
  {
    id: 'desorden',
    label: 'Tener la información repartida por todas partes',
    solution: 'Ordenamos el proceso y planteamos una forma sencilla de centralizar los datos, con un panel a medida solo si realmente hace falta.',
  },
  {
    id: 'web-lenta',
    label: 'Tener una web lenta o difícil de usar en el móvil',
    solution: 'Analizamos la web y priorizamos mejoras de rendimiento, estructura y experiencia móvil antes de proponerte rehacerla.',
  },
];

export function createBusinessNeedsContactData(selectedNeeds) {
  const selectedNeedsList = businessNeeds
    .filter((need) => selectedNeeds.includes(need.id))
    .map((need) => `- ${need.label}\n  Posible solución: ${need.solution}`)
    .join('\n');

  return {
    projectType: 'Consulta inicial desde la página de inicio',
    message: `Hola Nortcode, estas son algunas tareas o necesidades de mi negocio:\n${selectedNeedsList}\n\nMe gustaría saber qué solución se adapta mejor a mi caso.`,
  };
}
