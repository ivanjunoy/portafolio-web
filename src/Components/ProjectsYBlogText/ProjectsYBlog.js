import React from "react";
import { Link } from "react-router-dom";

const ProjectsYBlog = () => {
    return (
        <>
            <div>
                <h2>Proyectos y Blog</h2>
                <ul>
                    <li>
                        <Link to='/proyectos'>Ir a Proyectos</Link>
                    </li>
                    <li>
                        <Link to='/blog' target="_blank" rel="noopener noreferrer">Ir al Blog</Link>
                    </li>
                    <li>
                        <Link to='/learning' rel="noopener noreferrer">Aprendizaje</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProjectsYBlog;
