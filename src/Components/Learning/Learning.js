import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Lerning.module.css';

const Learning = () => {

    function ploxCounter(n) {
        console.log('n: ', n);

        if(n <= 9) return ploxCounter(n + 1);

        return n;
    }

    const numberShow = ploxCounter(0);
    console.log('numberShow: ', numberShow);
    
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
            <div>
                {numberShow}
            </div>
        </div>
    );
};

export default Learning;



