import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowUp, FiArrowDown, FiArrowRight, FiClock, FiGrid, FiCommand } from 'react-icons/fi';
import { PageHeading } from '../../PortfolioLayout/PortfolioLayout';
import styles from './snake.module.css';

const COLUMNS = 20;
const ROWS = 10;
// Ilustración estática: el movimiento y las reglas se implementarán más adelante.
const PREVIEW_SNAKE = new Set([83, 84, 85, 105, 125, 126, 127]);
const HEAD = 127;
const FOOD = 73;

export default function Snake() {
  return (
    <main className={styles.page}>
      <Link to="/games" className={styles.back}><FiArrowLeft /> Volver a Juegos</Link>
      <PageHeading number="04.01" label="SNAKE / UN CLÁSICO EN CONSTRUCCIÓN" title="Un pequeño" accent="recreo." description="La serpiente de siempre, un nuevo lugar para crecer. Por ahora, preparando el escenario para la primera partida." aside={<span className="portfolio-tag"><FiClock /> EN DESARROLLO</span>} />

      <div className={styles.workspace}>
        <section className={styles.introPanel} aria-labelledby="snake-title">
          <span className={styles.icon}><FiCommand /></span>
          <p className="portfolio-eyebrow">SERPIENTE / SNAKE</p>
          <h2 id="snake-title">El próximo<br /><em>movimiento.</em></h2>
          <p className={styles.description}>El tablero ya tiene su espacio. La lógica del juego será el siguiente paso.</p>
          <div className={styles.status}><span /><div><strong>En construcción</strong><p>Esta es una vista previa estática.<br />Todavía no se puede jugar.</p></div></div>

          <div className={styles.controls}>
            <span>CONTROLES / PRÓXIMAMENTE</span>
            <div className={styles.keys} aria-hidden="true">
              <kbd className={styles.up}><FiArrowUp /></kbd>
              <kbd><FiArrowLeft /></kbd><kbd><FiArrowDown /></kbd><kbd><FiArrowRight /></kbd>
            </div>
            <p>Las flechas se activarán cuando el juego esté listo.</p>
          </div>
          <Link to="/games" className={styles.returnLink}>Explorar Juegos <FiArrowRight /></Link>
        </section>

        <section className={styles.boardPanel} aria-labelledby="snake-board-title">
          <div className={styles.boardHeader}><h2 id="snake-board-title"><FiGrid /> El tablero</h2><span>VISTA PREVIA</span></div>
          <div className={styles.boardMeta}><span>20 × 10 <small>CUADRÍCULA</small></span><span>200 <small>CELDAS</small></span><span className={styles.staticBadge}><i /> Sin iniciar</span></div>
          <figure className={styles.preview}>
            <div className={styles.board} role="img" aria-label="Vista previa estática de Snake: tablero de 20 columnas y 10 filas con una serpiente ilustrativa. No es un juego interactivo.">
              {Array.from({ length: COLUMNS * ROWS }, (_, index) => (
                <div key={index} aria-hidden="true" className={`${styles.cell} ${PREVIEW_SNAKE.has(index) ? styles.snake : ''} ${index === HEAD ? styles.head : ''} ${index === FOOD ? styles.food : ''}`}>
                  {!PREVIEW_SNAKE.has(index) && index !== FOOD && <span>{index}</span>}
                </div>
              ))}
            </div>
            <figcaption><span><i /> Vista previa estática</span><span>El juego está en desarrollo</span></figcaption>
          </figure>
          <div className={styles.boardFooter}><span className={styles.captionIcon}><FiCommand /></span><p>Todo empieza con<br /><strong>un primer movimiento.</strong></p><span>SNAKE / 01</span></div>
        </section>
      </div>
      <p className={styles.bottomNote}>Un proyecto para seguir aprendiendo, una celda a la vez.</p>
    </main>
  );
}
