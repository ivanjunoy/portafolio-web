import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiGrid, FiRefreshCw, FiSliders } from 'react-icons/fi';
import { PageHeading } from '../../PortfolioLayout/PortfolioLayout';
import styles from './sliderGrid.module.css';

const MIN_ITEMS = 1;
const MAX_ITEMS = 1000;

export default function SliderGrid() {
  const [count, setCount] = useState(MIN_ITEMS);
  const progress = ((count - MIN_ITEMS) / (MAX_ITEMS - MIN_ITEMS)) * 100;

  return (
    <main className={styles.page}>
      <Link to="/proyectos" className={styles.back}><FiArrowLeft /> Volver a proyectos</Link>
      <PageHeading number="01.04" label="CUADRÍCULA DESLIZANTE / INTERACTIVO" title="Una cuadrícula," accent="mil posibilidades." description="Un control, muchos elementos. Deslizá, explorá y mirá cómo la cuadrícula encuentra su forma." aside={<span className="portfolio-tag"><FiGrid /> REACT · INTERACCIÓN</span>} />

      <div className={styles.workspace}>
        <section className={styles.controls} aria-labelledby="grid-controls-title">
          <span className={styles.controlIcon}><FiSliders /></span>
          <p className="portfolio-eyebrow">EL CONTROL ESTÁ EN TUS MANOS</p>
          <h2 id="grid-controls-title">De uno a mil.</h2>
          <p className={styles.intro}>Cada movimiento agrega o quita elementos. La vista previa se actualiza al instante.</p>

          <label className={styles.rangeLabel} htmlFor="grid-count">Cantidad de elementos</label>
          <div className={styles.counter}><output htmlFor="grid-count" aria-live="polite" aria-atomic="true">{String(count).padStart(2, '0')}</output><span>{count === 1 ? 'elemento' : 'elementos'}</span></div>
          <input id="grid-count" className={styles.slider} type="range" min={MIN_ITEMS} max={MAX_ITEMS} step="1" value={count} style={{ '--range-progress': `${progress}%` }} onChange={event => setCount(Number(event.target.value))} />
          <div className={styles.rangeEnds}><span>01 / MÍNIMO</span><span>1000 / MÁXIMO</span></div>

          <div className={styles.presets}><p>O probá con un punto de partida</p><div>{[9, 25, 100].map(value => <button key={value} type="button" aria-pressed={count === value} onClick={() => setCount(value)}>{value}</button>)}</div></div>
          <button type="button" className={styles.reset} onClick={() => setCount(MIN_ITEMS)} disabled={count === MIN_ITEMS}><FiRefreshCw /> Reiniciar cuadrícula</button>
          <p className={styles.keyboardHint}>También podés usar las flechas del teclado con el control seleccionado.</p>
        </section>

        <section className={styles.preview} aria-labelledby="grid-preview-title">
          <div className={styles.previewHeader}><h2 id="grid-preview-title"><FiGrid /> Vista previa</h2><span>CSS GRID</span></div>
          <div className={styles.grid} role="region" aria-label="Cuadrícula de elementos numerados" tabIndex={0}>
            {Array.from({ length: count }, (_, index) => <div className={styles.cell} key={index}>{index + 1}</div>)}
          </div>
          <div className={styles.previewFooter}><span><i /> {count === 1 ? '1 elemento visible' : `${count} elementos en la cuadrícula`}</span><span>Actualización en vivo</span></div>
        </section>
      </div>
      <div className={styles.bottomNote}><span>Una pequeña exploración de estado y composición.</span><span>DESLIZÁ → OBSERVÁ → REPETÍ</span></div>
    </main>
  );
}
