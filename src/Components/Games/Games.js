import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiPlay, FiCommand } from 'react-icons/fi';
import { PageHeading } from '../PortfolioLayout/PortfolioLayout';
import styles from './games.module.css';

export default function Games() {
  return (
    <main>
      <PageHeading number="04" label="EL RECREO" title="También se aprende" accent="jugando." description="Pequeños juegos para hacer una pausa y seguir experimentando con código. ¿Una partida?" aside={<>Un poco de lógica.<br />Un poco de diversión.</>} />
      <div className="portfolio-section-bar"><span>Elegí tu próxima partida</span><span>01 juego / Clásicos en código</span></div>
      <Link to="/games/snake" className={`portfolio-tile portfolio-dark-tile ${styles.snakeCard}`}>
        <div className={styles.snakeCopy}>
          <div className="portfolio-tile-top"><span className="portfolio-tile-icon"><FiPlay /></span><span className="portfolio-tag">CLÁSICO</span></div>
          <h2>Serpiente (Snake)</h2>
          <p>El clásico de siempre, una línea de código a la vez. Movete, comé y tratá de no encontrarte con tu propia cola.</p>
          <div className="portfolio-tile-bottom"><span>Jugar una partida</span><FiArrowUpRight /></div>
        </div>
        <div className={styles.snakePreview} aria-hidden="true"><div className={styles.snakeBody} /><span className={styles.food} /><span className={styles.gameLabel}><FiCommand /> SNAKE / 01</span></div>
      </Link>
    </main>
  );
}
