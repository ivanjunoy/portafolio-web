import React from 'react';
import { Outlet } from 'react-router-dom';
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
                        <a href="/learning/closures" rel="noopener noreferrer">Closures</a>
                    </li>
                </ul>
                <Outlet />
            </div>

        </div>
    );
};

export default Learning;



