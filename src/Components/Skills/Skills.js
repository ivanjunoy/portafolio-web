import React from "react";

const Skills = ({ lang = 'es' }) => {
    const copy = {
        es: {
            techTitle: 'Habilidades técnicas',
            softTitle: 'Habilidades blandas',
            tech: [
                'React (4 años, avanzado)',
                'JavaScript (4 años, avanzado)',
                'TypeScript (3 años, avanzado)',
                'HTML/CSS (4 años, avanzado)',
                'Node.js (3 años, intermedio)',
                'Express (2 años, intermedio)',
                'NestJS (1 año, intermedio)',
                'Next.js (1 año, intermedio)',
                'Sass (2 años, intermedio)',
                'Git (4 años, avanzado)',
                'VTEX (3 años, avanzado)',
                'AWS (2 años, intermedio)',
                'Inglés B2',
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
                'React (4 years, advanced)',
                'JavaScript (4 years, advanced)',
                'TypeScript (3 years, advanced)',
                'HTML/CSS (4 years, advanced)',
                'Node.js (3 years, intermediate)',
                'Express (2 years, intermediate)',
                'NestJS (1 year, intermediate)',
                'Next.js (1 year, intermediate)',
                'Sass (2 years, intermediate)',
                'Git (4 years, advanced)',
                'VTEX (3 years, advanced)',
                'AWS (2 years, intermediate)',
                'English B2',
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
