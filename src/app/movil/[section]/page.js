import MobileSectionPage from '@/components/MobileSectionPage';

const sections = ['soluciones', 'ingenieria', 'precios', 'proyectos', 'configurador', 'auditoria', 'nortcode', 'contacto'];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  const title = section.charAt(0).toUpperCase() + section.slice(1);

  return {
    title: `${title} | NORTCODE`,
  };
}

export default async function MobileSectionRoute({ params }) {
  const { section } = await params;
  return <MobileSectionPage section={section} />;
}
