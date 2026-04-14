import React from 'react'

const Resume = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Desarrollador de Software | E-commerce, integraciones e IA aplicada',
            p1: 'Desarrollador de software con 4 años de experiencia construyendo y manteniendo productos web para e-commerce.',
            p2: 'Trabajo sobre flujos críticos como checkout, promociones, catálogo, APIs e integraciones, con foco en performance, estabilidad y entrega de valor de producto.',
            p3: 'Experiencia aplicando herramientas de IA para acelerar análisis técnico, implementación, documentación y resolución de problemas.',
        },
        en: {
            title: 'Software Developer | E-commerce, integrations and applied AI',
            p1: 'Software developer with 4 years of experience building and maintaining web products for e-commerce.',
            p2: 'Focused on critical flows such as checkout, promotions, catalog, APIs, and integrations, with emphasis on performance, stability, and product delivery.',
            p3: 'Experienced in applying AI tools to accelerate technical analysis, implementation, documentation, and problem-solving.',
        },
    };

    return (
        <>
            <p>{copy[lang].title}</p>
            <p>
                {copy[lang].p1}
            </p>
            <p>
                {copy[lang].p2}
            </p>
            <p>
                {copy[lang].p3}
            </p>
            <hr />
        </>
    )
}

export default Resume;
