import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Lerning.module.css';

const Learning = () => {
    return (
        <div className={styles.learningContainer}>
            <div>
                <h1>Learning</h1>
                <hr />
            </div>
            <div className={styles.learningListContainer}>
                <ul>
                    <li>
                        <Link to="/learning/closures" rel="noopener noreferrer">Closures</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Learning;



