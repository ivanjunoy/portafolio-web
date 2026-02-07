import React from "react";

const Formation = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Formación',
            degree: 'Analista de Sistemas',
            institution: 'Instituto Politécnico Superior "General San Martín"',
            date: 'ene. 2021 - actualidad (en curso)',
        },
        en: {
            title: 'Education',
            degree: 'Systems Analyst',
            institution: 'Instituto Politécnico Superior "General San Martín"',
            date: 'Jan 2021 - Present (in progress)',
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
