import React from "react";
import { Link } from "react-router-dom";

const ProjectsYBlog = () => {
    return (
        <>
            <div>
                <h2>Projects & Blog</h2>
                <ul>
                    <li>
                        <Link to='/proyectos'>Go to Projects</Link>
                    </li>
                    <li>
                        <Link to='/blog' target="_blank" rel="noopener noreferrer">Go to Blog</Link>
                    </li>
                    <li>
                        <Link to='/learning' rel="noopener noreferrer">Learning</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProjectsYBlog;