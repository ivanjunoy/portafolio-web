import React, { useState } from 'react';
import "./games.modue.css";

const Games = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <div>
            <h1>Games</h1>
            <div>Valor del slider: {sliderValue}</div>
            <div className="slidecontainer">
                <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={sliderValue} 
                    className="slider" 
                    id="myRange"
                    onChange={handleSliderChange}
                />
            </div>
        </div>
    );
};

export default Games;
