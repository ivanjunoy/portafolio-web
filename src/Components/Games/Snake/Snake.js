import styles from "./snake.module.css";

const Snake = () => {

    // Crea el arreglo de divs.
    function createArrayDiv(index) {
        let unorderArray = [];
        for (let n = 0; n < index; n++) {
            unorderArray.push(
                <div key={n} className={styles.arrayItem}>{n}</div>
            );
        }

        return unorderArray;
    }

    const showArr = createArrayDiv(200)
    
    return (
        <div>
            <h1>Array:</h1>
            <div className={styles.arrContainer}>
                {showArr}
            </div>
        </div>
    )
}

export default Snake;