import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCode, FiRepeat } from 'react-icons/fi';
import { PageHeading } from '../PortfolioLayout/PortfolioLayout';

export default function Learning() {
  return (
    <main>
      <PageHeading number="03" label="NOTAS DE APRENDIZAJE" title="Entender para" accent="construir." description="Conceptos, apuntes y pequeñas explicaciones. Un espacio para ordenar lo que aprendo en el camino." aside={<>Aprender, probar.<br />Volver a empezar.</>} />
      <div className="portfolio-section-bar"><span>Conceptos para explorar</span><span>JavaScript / Fundamentos</span></div>
      <div className="portfolio-tile-grid">
        <Link to="/learning/closures" className="portfolio-tile portfolio-dark-tile">
          <div className="portfolio-tile-top"><span className="portfolio-tile-icon"><FiCode /></span><span className="portfolio-tag">JAVASCRIPT</span></div>
          <h2>Cierres (Closures)</h2>
          <p>Funciones que recuerdan su entorno. Una mirada a los closures y cómo usarlos en JavaScript.</p>
          <div className="portfolio-tile-bottom"><span>Explorar el concepto</span><FiArrowUpRight /></div>
        </Link>
        <Link to="/learning/event-loop" className="portfolio-tile">
          <div className="portfolio-tile-top"><span className="portfolio-tile-icon"><FiRepeat /></span><span className="portfolio-tag">JAVASCRIPT</span></div>
          <h2>Bucle de eventos</h2>
          <p>El orden detrás de lo asíncrono. Explorá la pila de ejecución, las tareas y las microtareas en el navegador.</p>
          <div className="portfolio-tile-bottom"><span>Explorar el concepto</span><FiArrowUpRight /></div>
        </Link>
      </div>
    </main>
  );
}
