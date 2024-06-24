import { Link } from "react-router-dom"
import ColorImage from '../../../Imagenes/colores.webp'
import CardsImage from '../../../Imagenes/cards.webp'
import PrivateImage from '../../../Imagenes/secret.png'
import './projectCards.css'

const ProjectCards = () => {
    return (
        <>
            <div class="card-container">
                {/* Colors */}
                <div className="card">
                <Link to="https://ivanjunoy.github.io/colors/" target="_blank" rel="noopener noreferrer">
                    <img className="projectCard" src={ColorImage} alt="Avatar"/>
                </Link>
                    <div class="container">
                        <h4><b>Colors</b></h4>
                        <p>This old site is one of the first projects I did on my own when I was a kid.</p>
                    </div>
                </div>

                {/* Expanding Cards */}
                <div className="card">
                <Link to="https://ivanjunoy.github.io/expanding-cards/" target="_blank" rel="noopener noreferrer">
                    <img className="projectCard" src={CardsImage} alt="Avatar"/>
                </Link>
                    <div class="container">
                        <h4><b>expanding-cards</b></h4>
                        <p>A small React component I built from a reference. Can't remember which one.</p>
                    </div>
                </div>

                {/* Private Not Finished */}
                <div className="card">
                <Link to="/" target="_blank" rel="noopener noreferrer">
                    <img className="projectCard" src={PrivateImage} alt="Avatar"/>
                </Link>
                    <div class="container">
                        <h4><b>Red Privada</b></h4>
                        <p>A private social network I wanted to use with my friends, but I never finished. Some day...</p>
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