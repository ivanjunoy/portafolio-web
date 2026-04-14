import React from "react";

const Skills = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Skills',
            categories: [
                {
                    title: 'Frontend',
                    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass'],
                },
                {
                    title: 'Backend y APIs',
                    items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Integraciones'],
                },
                {
                    title: 'Cloud y plataformas',
                    items: ['AWS', 'VTEX', 'Git', 'GitHub', 'Postman'],
                },
                {
                    title: 'IA aplicada',
                    items: ['ChatGPT', 'GitHub Copilot', 'Prompting', 'Desarrollo asistido por IA'],
                },
                {
                    title: 'Producto y colaboración',
                    items: ['E-commerce', 'Checkout', 'Análisis de incidentes', 'Documentación técnica', 'Inglés C2'],
                },
            ],
        },
        en: {
            title: 'Skills',
            categories: [
                {
                    title: 'Frontend',
                    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass'],
                },
                {
                    title: 'Backend and APIs',
                    items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Integrations'],
                },
                {
                    title: 'Cloud and platforms',
                    items: ['AWS', 'VTEX', 'Git', 'GitHub', 'Postman'],
                },
                {
                    title: 'Applied AI',
                    items: ['ChatGPT', 'GitHub Copilot', 'Prompting', 'AI-assisted development'],
                },
                {
                    title: 'Product and collaboration',
                    items: ['E-commerce', 'Checkout', 'Incident analysis', 'Technical documentation', 'English C2'],
                },
            ],
        },
    };

    return (
        <>
            <div className="skillsGrid">
                <h2>{copy[lang].title}</h2>
                {copy[lang].categories.map((category) => (
                    <div className="skillCategory" key={category.title}>
                        <h4>{category.title}</h4>
                        <ul>
                            {category.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr />
        </>
    )
}

export default Skills;
