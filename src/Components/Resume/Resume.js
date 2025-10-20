import React from 'react'

const Resume = () => {

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        
        return age;
    };

    const age = calculateAge('1995-10-30'); // Fecha de cumpleaños
    
    return (
        <>
            <p>Software Engineer | {age} years old</p>
            <p>
                I’m Iván, a software development professional with 4 years of experience, specializing in the creation and maintenance of e-commerce solutions.
            </p>
            <p>
                My main focus is on developing highly functional user experiences in the digital environment, driven by a strong interest in programming and process optimization.
            </p>  
            <p>
                Over the past years, I’ve gained valuable experience building and maintaining a full-featured e-commerce platform, including key functionalities such as checkout, promotions management, data handling, API integration, AWS deployment, and dashboard development for metrics analysis. Additionally, I possess strong skills in software analysis, error resolution, and an outstanding ability to collaborate effectively within multidisciplinary teams.
            </p>                    
            <p>Rosario - Santa Fe - Argentina</p>
            <hr />
        </>
    )
}

export default Resume;