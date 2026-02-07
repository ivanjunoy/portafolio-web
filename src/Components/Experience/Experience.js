import React from "react";

const Experience = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Experiencia laboral',
            role1: 'Ingeniero de Software',
            role1Date: 'ene. 2023 - actualidad',
            role1Bullets: [
                'Desarrollo y mantenimiento de flujos críticos de e-commerce (checkout, promociones y catálogo).',
                'Mejoras en performance y UX para reducir fricción en la compra.',
                'Integraciones con APIs internas/externas y soporte a despliegues en AWS.',
            ],
            role2: 'Analista de Desarrollo de Software',
            role2Date: 'sept. 2022 - ene. 2023',
            role2Bullets: [
                'Análisis y resolución de incidentes en aplicaciones web de negocio.',
                'Colaboración con equipos funcionales para priorizar y definir mejoras.',
                'Soporte a integraciones y documentación técnica para continuidad operativa.',
            ],
            role3: 'Desarrollador Frontend',
            role3Date: 'mar. 2022 - sept. 2022',
            role3Bullets: [
                'Implementación de interfaces responsive y componentes reutilizables.',
                'Optimización de estilos y accesibilidad para mejorar la experiencia de usuario.',
                'Trabajo conjunto con diseño para iterar rápidamente sobre feedback.',
            ],
        },
        en: {
            title: 'Work Experience',
            role1: 'Software Engineer',
            role1Date: 'Jan 2023 - Present',
            role1Bullets: [
                'Development and maintenance of critical e-commerce flows (checkout, promotions, and catalog).',
                'Performance and UX improvements to reduce purchase friction.',
                'Integrations with internal/external APIs and support for AWS deployments.',
            ],
            role2: 'Software Development Analyst',
            role2Date: 'Sep 2022 - Jan 2023',
            role2Bullets: [
                'Analysis and resolution of incidents in business web applications.',
                'Collaboration with functional teams to prioritize and define improvements.',
                'Support for integrations and technical documentation for operational continuity.',
            ],
            role3: 'Frontend Developer',
            role3Date: 'Mar 2022 - Sep 2022',
            role3Bullets: [
                'Implementation of responsive interfaces and reusable components.',
                'Style and accessibility optimizations to improve user experience.',
                'Worked closely with design to iterate quickly on feedback.',
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
