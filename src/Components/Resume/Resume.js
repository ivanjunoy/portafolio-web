import React from 'react'

const Resume = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Ingeniero de Software | Frontend y e-commerce',
            p1: 'Soy Iván, desarrollador de software con 4 años de experiencia en e-commerce, enfocado en construir interfaces claras y confiables.',
            p2: 'Trabajo en funcionalidades clave como checkout, promociones, integraciones con APIs y tableros de métricas, cuidando performance y estabilidad.',
            p3: 'Me destaco por el análisis técnico, la resolución de incidentes y el trabajo colaborativo con equipos multidisciplinarios.',
            location: 'Rosario, Santa Fe, Argentina',
        },
        en: {
            title: 'Software Engineer | Frontend and e-commerce',
            p1: 'I am Iván, a software developer with 4 years of experience in e-commerce, focused on building clear and reliable interfaces.',
            p2: 'I work on key features such as checkout, promotions, API integrations, and metrics dashboards, prioritizing performance and stability.',
            p3: 'I stand out for technical analysis, incident resolution, and collaborative work with multidisciplinary teams.',
            location: 'Rosario, Santa Fe, Argentina',
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
            <p>{copy[lang].location}</p>
            <hr />
        </>
    )
}

export default Resume;
