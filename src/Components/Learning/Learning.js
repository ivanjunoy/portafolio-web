import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Lerning.module.css';

const Learning = () => {
    return (
        <div className={styles.learningContainer}>
            <div>
                <h1>Aprendizaje</h1>
                <hr />
            </div>
            <div className={styles.learningListContainer}>
                <ul>
                    <li>
                        <Link to="/learning/closures" rel="noopener noreferrer">Cierres (Closures)</Link>
                    </li>
                    <li>
                        <Link to="/learning/closures" rel="noopener noreferrer">Bucle de eventos (Event Loop)</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Learning;

