import Posts from './Posts/Posts';
import { PageHeading } from '../PortfolioLayout/PortfolioLayout';

export default function Blog() {
  return (
    <main>
      <PageHeading number="02" label="EL CUADERNO" title="Pensamientos en" accent="abierto." description="Algunas ideas sobre la vida, el aprendizaje y todo lo que aparece entre una línea de código y la siguiente." aside={<>Sin apuro.<br />Una lectura a la vez.</>} />
      <div className="portfolio-section-bar"><span>Notas y reflexiones</span><span>Un espacio para pensar</span></div>
      <Posts />
    </main>
  );
}
