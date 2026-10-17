import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import ColorImage from '../../../Imagenes/colores.webp';
import CardsImage from '../../../Imagenes/cards.webp';
import SliderGridImage from '../../../Imagenes/slider-grid.svg';
import LoginLabImage from '../../../Imagenes/login-lab.svg';
import './projectCards.css';

const projects = [
  { name: 'Login Lab', number: '01', tag: 'INTERACTIVO', description: 'De un formulario a una sesión iniciada. Explorá el registro de usuarios y sus datos en tiempo real.', image: LoginLabImage, to: '/proyectos/login', featured: true, action: 'Explorar el experimento', technology: 'React · Estado · JSON' },
  { name: 'Colors', number: '02', tag: 'GENERADOR', description: 'Una exploración de colores y combinaciones. Uno de mis primeros proyectos por cuenta propia.', image: ColorImage, href: 'https://ivanjunoy.github.io/colors/', action: 'Abrir proyecto', technology: 'Color · Creatividad' },
  { name: 'Expanding Cards', number: '03', tag: 'INTERFAZ', description: 'Un pequeño componente en React construido a partir de una referencia. Tarjetas con espacio para expandirse.', image: CardsImage, href: 'https://ivanjunoy.github.io/expanding-cards/', action: 'Abrir proyecto', technology: 'React · Componentes' },
  { name: 'Cuadrícula deslizante', number: '04', tag: 'INTERACTIVO', description: 'Un slider, muchas posibilidades. Ajustá la cantidad de elementos y mirá cómo cambia la cuadrícula.', image: SliderGridImage, to: '/proyectos/slider-grid', action: 'Probar la cuadrícula', technology: 'React · Interacción' }
];

export default function ProjectCards() {
  return (
    <div className="portfolio-project-grid">
      {projects.map(project => {
        const content = <>
          <div className="portfolio-project-image"><img src={project.image} alt={`Vista previa de ${project.name}`} /><span className="portfolio-project-number">/{project.number}</span></div>
          <div className="portfolio-project-copy">
            <div className="portfolio-project-label"><span>{project.tag}</span>{project.featured && <span className="portfolio-project-new">NUEVO</span>}</div>
            <h2>{project.name}{(project.to || project.href) && <FiArrowUpRight aria-hidden="true" />}</h2>
            <p>{project.description}</p>
            <div className="portfolio-project-technology">{project.technology}</div>
            <div className="portfolio-project-action"><span>{project.action}</span>{(project.to || project.href) && <FiArrowRight aria-hidden="true" />}</div>
          </div>
        </>;
        const className = `portfolio-project-card${project.featured ? ' portfolio-project-featured' : ''}`;
        if (project.to) return <Link key={project.name} to={project.to} className={className}>{content}</Link>;
        if (project.href) return <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className={className}>{content}<span className="portfolio-external-note">Abre en otra pestaña</span></a>;
        return <article key={project.name} className={`${className} portfolio-project-paused`}>{content}</article>;
      })}
    </div>
  );
}
