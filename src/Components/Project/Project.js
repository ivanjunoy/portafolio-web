import { Link } from "react-router-dom";
import ProjectCards from "./ProjectCards/projectCards";

const Project = () => {
    return (
        <>
            <h1>Proyectos</h1>
            <ProjectCards />
            <hr />
            <Link to='/'>Volver</Link>
        </>
    )
}

export default Project;
