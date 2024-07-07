import { Link } from "react-router-dom";
import ProjectCards from "./ProjectCards/projectCards";

const Project = () => {
    return (
        <>
            <h1>Projects</h1>
            <ProjectCards />
            <hr />
            <Link to='/'>Go Back</Link>
        </>
    )
}

export default Project;