import React, { useState } from 'react';
import "./games.modue.css";

const Games = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    // Función para generar la cuadrícula de divs
    const generateGrid = () => {
        const gridItems = [];
        const totalItems = parseInt(sliderValue);
        
        for (let i = 0; i < totalItems; i++) {
            gridItems.push(
                <div key={i} className="grid-item">
                    {i + 1}
                </div>
            );
        }
        
        return gridItems;
    };

    return (
        <div className="games-container">
            <h1>Games</h1>
            <div className="slider-info">
                <p>Valor del slider: {sliderValue}</p>
                <p>Total de elementos: {sliderValue}</p>
            </div>
            
            <div className="slidecontainer">
                <input 
                    type="range" 
                    min="1" 
                    max="1000" 
                    value={sliderValue} 
                    className="slider" 
                    id="myRange"
                    onChange={handleSliderChange}
                />
            </div>

            <div className="grid-container">
                {generateGrid()}
            </div>
        </div>
    );
};

export default Games;
