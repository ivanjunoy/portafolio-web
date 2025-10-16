import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Página no encontrada</h2>
                <p className="not-found-description">
                    Lo siento, la página que estás buscando no existe o ha sido movida.
                </p>
                <button className="not-found-button" onClick={handleGoHome}>
                    Volver al inicio
                </button>
            </div>
        </div>
    );
};

export default NotFound;
