import { FiBarChart2, FiGrid, FiFileText, FiSettings, FiClock } from 'react-icons/fi';
import { PageHeading } from '../PortfolioLayout/PortfolioLayout';
import './Dashboard.css';

const cards = [
  { icon: FiBarChart2, title: 'Estadísticas generales', description: 'Un lugar para reunir las métricas y la actividad del portafolio.', number: '01' },
  { icon: FiGrid, title: 'Gestión de proyectos', description: 'El espacio para organizar los proyectos y darles seguimiento.', number: '02' },
  { icon: FiFileText, title: 'Gestión de blog', description: 'Ideas, borradores y publicaciones, en un mismo lugar.', number: '03' },
  { icon: FiSettings, title: 'Configuración', description: 'Los próximos ajustes y preferencias del portafolio.', number: '04' },
];

export default function Dashboard() {
  return (
    <main className="portfolio-dashboard">
      <PageHeading number="05" label="DETRÁS DE ESCENA" title="Todo en su" accent="lugar." description="El futuro centro de control del portafolio. Por ahora, un vistazo a lo que está por venir." aside={<span className="portfolio-tag"><FiClock /> EN CONSTRUCCIÓN</span>} />
      <div className="portfolio-section-bar"><span>Una vista del próximo paso</span><span>Panel en preparación</span></div>
      <div className="portfolio-tile-grid">
        {cards.map(({ icon: Icon, title, description, number }) => (
          <article className="portfolio-tile" key={number}>
            <div className="portfolio-tile-top"><span className="portfolio-tile-icon"><Icon /></span><span className="portfolio-dashboard-number">/{number}</span></div>
            <h2>{title}</h2><p>{description}</p>
            <div className="portfolio-tile-bottom"><span>Próximamente</span><FiClock /></div>
          </article>
        ))}
      </div>
    </main>
  );
}
