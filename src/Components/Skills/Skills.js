import React from "react";

const Skills = ({ lang = 'es' }) => {
    const copy = {
        es: {
            techTitle: 'Habilidades técnicas',
            softTitle: 'Habilidades blandas',
            tech: [
                'React',
                'JavaScript',
                'TypeScript',
                'HTML/CSS (',
                'Node.js',
                'Express',
                'NestJS',
                'Next.js',
                'Sass',
                'Git',
                'VTEX',
                'AWS',
                'Inglés C2',
            ],
            soft: [
                'Trabajo en equipo',
                'Comunicación clara con perfiles técnicos y no técnicos',
                'Gestión del tiempo y prioridades',
                'Presentación de avances y resultados',
            ],
        },
        en: {
            techTitle: 'Technical Skills',
            softTitle: 'Soft Skills',
            tech: [
                'React',
                'JavaScript',
                'TypeScript',
                'HTML/CSS',
                'Node.js',
                'Express',
                'NestJS',
                'Next.js',
                'Sass',
                'Git',
                'VTEX',
                'AWS',
                'English C2',
            ],
            soft: [
                'Teamwork',
                'Clear communication with technical and non-technical profiles',
                'Time and priority management',
                'Presentation of progress and results',
            ],
        },
    };

    return (
        <>
            <div className="containerGrid">
                <div>
                    <h2>{copy[lang].techTitle}</h2>
                    <ul>
                        {copy[lang].tech.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>{copy[lang].softTitle}</h2>
                    <ul>
                        {copy[lang].soft.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Skills;
