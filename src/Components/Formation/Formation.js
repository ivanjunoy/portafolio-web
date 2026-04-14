import React from "react";

const Formation = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Formación',
            degree: 'Analista Programador',
            institution: 'UAI',
            date: 'ene. 2025 - actualidad (en curso)',
        },
        en: {
            title: 'Education',
            degree: 'Systems Analyst',
            institution: 'UAI',
            date: 'Jan 2025 - Present (in progress)',
        },
    };

    return (
        <>
            <h2>{copy[lang].title}</h2>
            <div>
                <h4>{copy[lang].degree}</h4>
                <ul>
                    <li>{copy[lang].institution}</li>
                    <li>{copy[lang].date}</li>
                </ul>
            </div>
        </>
    )
}

export default Formation;
