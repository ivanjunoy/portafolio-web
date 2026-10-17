import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./sliderGrid.module.css";

const SliderGrid = () => {
    const [sliderValue, setSliderValue] = useState(1);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const generateGrid = () => {
        const gridItems = [];
        const totalItems = parseInt(sliderValue);

        for (let i = 0; i < totalItems; i++) {
            gridItems.push(
                <div key={i} className={styles['grid-item']}>
                    {i + 1}
                </div>
            );
        }

        return gridItems;
    };

    return (
        <div>
            <h1>Cuadrícula deslizante</h1>
            <div className={styles['slider-info']}>
                <p>Total de elementos: {sliderValue}</p>
            </div>
            <div className={styles['slidecontainer']}>
                <input
                    type="range"
                    min="1"
                    max="1000"
                    value={sliderValue}
                    className={styles['slider']}
                    id="myRange"
                    aria-label="Cantidad de elementos"
                    onChange={handleSliderChange}
                />
            </div>
            <div className={styles['grid-container']}>
                {generateGrid()}
            </div>
            <hr />
            <Link to="/proyectos">Volver a proyectos</Link>
        </div>
    );
}

export default SliderGrid;
