import React from "react";

const Experience = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Experiencia laboral',
            role1: 'Ingeniero de Software',
            role1Date: 'ene. 2023 - actualidad',
            role1Bullets: [
                'Desarrollo y mantenimiento de flujos críticos de e-commerce: checkout, promociones, catálogo e integraciones.',
                'Implementación de interfaces, validaciones y consumo de APIs para mejorar estabilidad y experiencia de compra.',
                'Soporte a despliegues en AWS, análisis de incidentes productivos y coordinación con equipos de producto, QA y UX/UI.',
                'Uso de herramientas de IA para acelerar debugging, documentación técnica, análisis de alternativas e implementación.',
            ],
            role2: 'Analista de Desarrollo de Software',
            role2Date: 'sept. 2022 - ene. 2023',
            role2Bullets: [
                'Análisis y resolución de incidentes en aplicaciones web de negocio e integraciones internas.',
                'Relevamiento con equipos funcionales para priorizar mejoras, documentar alcance y reducir ambigüedad técnica.',
                'Soporte a continuidad operativa mediante documentación, seguimiento de issues y validación de entregas.',
            ],
            role3: 'Desarrollador Frontend',
            role3Date: 'mar. 2022 - sept. 2022',
            role3Bullets: [
                'Implementación de interfaces responsive y componentes reutilizables con foco en claridad visual y mantenibilidad.',
                'Optimización de estilos, accesibilidad y comportamiento mobile para mejorar la experiencia de usuario.',
                'Trabajo conjunto con diseño y producto para iterar sobre feedback y entregar cambios funcionales rápidamente.',
            ],
        },
        en: {
            title: 'Work Experience',
            role1: 'Software Engineer',
            role1Date: 'Jan 2023 - Present',
            role1Bullets: [
                'Development and maintenance of critical e-commerce flows: checkout, promotions, catalog, and integrations.',
                'Built interfaces, validations, and API consumption flows to improve stability and purchase experience.',
                'Supported AWS deployments, production incident analysis, and coordination with product, QA, and UX/UI teams.',
                'Applied AI tools to accelerate debugging, technical documentation, solution analysis, and implementation.',
            ],
            role2: 'Software Development Analyst',
            role2Date: 'Sep 2022 - Jan 2023',
            role2Bullets: [
                'Analyzed and resolved incidents in business web applications and internal integrations.',
                'Worked with functional teams to prioritize improvements, document scope, and reduce technical ambiguity.',
                'Supported operational continuity through documentation, issue tracking, and delivery validation.',
            ],
            role3: 'Frontend Developer',
            role3Date: 'Mar 2022 - Sep 2022',
            role3Bullets: [
                'Implemented responsive interfaces and reusable components with focus on visual clarity and maintainability.',
                'Optimized styles, accessibility, and mobile behavior to improve user experience.',
                'Worked with design and product to iterate on feedback and deliver functional changes quickly.',
            ],
        },
    };

    return (
        <>
            <h2>{copy[lang].title}</h2>
            <div>
                <h4>{copy[lang].role1}</h4>
                <ul>
                    <li><a href="https://www.cencosud.com/" target="_blank" rel="noopener noreferrer">Cencosud S.A.</a></li>
                    <li>{copy[lang].role1Date}</li>
                </ul>
                <ul>
                    {copy[lang].role1Bullets.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>{copy[lang].role2}</h4>
                <ul>
                    <li><a href="https://neoris.com/home" target="_blank" rel="noopener noreferrer">NEORIS</a></li>
                    <li>{copy[lang].role2Date}</li>
                </ul>
                <ul>
                    {copy[lang].role2Bullets.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>{copy[lang].role3}</h4>
                <ul>
                    <li><a href="https://www.fantommers.com/" target="_blank" rel="noopener noreferrer">Fantommers</a></li>
                    <li>{copy[lang].role3Date}</li>
                </ul>
                <ul>
                    {copy[lang].role3Bullets.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Experience;
