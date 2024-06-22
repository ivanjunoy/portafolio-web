import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <>
            <div>
                <h2>Projects & Blog</h2>
                <ul>
                <li>
                    <Link to='/proyectos'>Go to Projects!</Link>
                </li>
                </ul>
            </div>
        </>
    )
}

export default Projects;

/* 
    <ul>
        <li>
            <a href="https://ivanjunoy.github.io/colors/" target="_blank" rel="noopener noreferrer">
                Colores
            </a>
        </li>
        <li>
            <a href="https://ivanjunoy.github.io/expanding-cards/" target="_blank" rel="noopener noreferrer">
                expanding-cards
            </a>
        </li>
    </ul>
*/