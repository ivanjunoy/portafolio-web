import React from 'react';
import "./games.module.css";
import { Link } from 'react-router-dom';

const Games = () => {
    return (
        <div className="games-container">
            <h1>Games</h1>
            <ul>
                <li>
                    <Link to="/games/slider-grid" rel="noopener noreferrer">Slider Grid</Link>
                </li>
                <li>
                    <Link to="/games/snake" rel="noopener noreferrer">Snake</Link>
                </li>
            </ul>
        </div>
    )
};

export default Games;
