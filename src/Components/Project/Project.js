import { PageHeading } from '../PortfolioLayout/PortfolioLayout';
import ProjectCards from "./ProjectCards/projectCards";

const Project = () => {
    return (
        <main>
            <PageHeading number="01" label="EL LABORATORIO" title="Ideas que toman" accent="forma." description="Pequeños experimentos, interfaces y cosas que construyo para seguir aprendiendo. Pasá, explorá y probá." aside={<>Una idea a la vez.<br />Siempre en construcción.</>} />
            <div className="portfolio-section-bar"><span>Explorá los proyectos</span><span>05 proyectos / React & experimentación</span></div>
            <ProjectCards />
        </main>
    )
}

export default Project;
