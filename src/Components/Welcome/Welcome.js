import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome = () => {
  useEffect(() => {
    document.body.classList.add('welcome-body');
    return () => {
      document.body.classList.remove('welcome-body');
    };
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.frame}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 className={styles.title}>Iván Junoy</h1>
        <p className={styles.subtitle}>
          Desarrollador de software enfocado en construir interfaces claras y confiables.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primary} to="/proyectos">Ver proyectos</Link>
          <Link className={styles.secondary} to="/resume">Ver CV</Link>
        </div>

        <div className={styles.meta}>
          <span>Rosario, Santa Fe, Argentina</span>
          <span>React · Node</span>
          <span>Next · Nest</span>
          <span>No disponible</span>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
