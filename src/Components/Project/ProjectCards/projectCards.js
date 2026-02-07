import { Link } from "react-router-dom"
import ColorImage from '../../../Imagenes/colores.webp'
import CardsImage from '../../../Imagenes/cards.webp'
import PrivateImage from '../../../Imagenes/secret.png'
import './projectCards.css'

const ProjectCards = () => {
    return (
        <>
            <div className="card-container">
                {/* Colors */}
                <div className="card">
                <a href="https://ivanjunoy.github.io/colors/" target="_blank" rel="noopener noreferrer">
                    <img className="projectCard" src={ColorImage} alt="Avatar"/>
                </a>
                    <div className="container">
                        <h4><b>Colors</b></h4>
                        <p>Este sitio fue de los primeros proyectos que hice por mi cuenta.</p>
                    </div>
                </div>

                {/* Expanding Cards */}
                <div className="card">
                <a href="https://ivanjunoy.github.io/expanding-cards/" target="_blank" rel="noopener noreferrer">
                    <img className="projectCard" src={CardsImage} alt="Avatar"/>
                </a>
                    <div className="container">
                        <h4><b>expanding-cards</b></h4>
                        <p>Un pequeño componente en React construido a partir de una referencia.</p>
                    </div>
                </div>

                {/* Private Not Finished */}
                <div className="card">
                <Link to="/">
                    <img className="projectCard" src={PrivateImage} alt="Avatar"/>
                </Link>
                    <div className="container">
                        <h4><b>Red Privada</b></h4>
                        <p>Una red privada para amigos que quedó en pausa. Algún día...</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCards

/* 

            <a href="https://ivanjunoy.github.io/colors/" target="_blank" rel="noopener noreferrer">
                Colores
            </a>

            <a href="https://ivanjunoy.github.io/expanding-cards/" target="_blank" rel="noopener noreferrer">
                expanding-cards
            </a>
*/
