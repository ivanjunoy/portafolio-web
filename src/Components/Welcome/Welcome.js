import { useEffect } from 'react';
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
          Desarrollador de software enfocado en construir soluciones claras y confiables.
        </p>
        <p className={styles.status}>
          Actualmente trabajo tiempo completo como ingeniero de software.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href="https://wa.me/3416752684" target="_blank" rel="noopener noreferrer">Whatsapp</a>
          <a className={styles.secondary} href="mailto:ivanjunoy@gmail.com">Mail</a>
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
