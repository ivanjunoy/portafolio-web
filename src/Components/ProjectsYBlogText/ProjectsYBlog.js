import React from "react";
import { Link } from "react-router-dom";

const ProjectsYBlog = ({ lang = 'es' }) => {
    const copy = {
        es: {
            title: 'Proyectos y Blog',
            projects: 'Ir a Proyectos',
            blog: 'Ir al Blog',
            learning: 'Aprendizaje',
        },
        en: {
            title: 'Projects and Blog',
            projects: 'Go to Projects',
            blog: 'Go to Blog',
            learning: 'Learning',
        },
    };

    return (
        <>
            <div>
                <h2>{copy[lang].title}</h2>
                <ul>
                    <li>
                        <Link to='/proyectos'>{copy[lang].projects}</Link>
                    </li>
                    <li>
                        <Link to='/blog' target="_blank" rel="noopener noreferrer">{copy[lang].blog}</Link>
                    </li>
                    <li>
                        <Link to='/learning' rel="noopener noreferrer">{copy[lang].learning}</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProjectsYBlog;
