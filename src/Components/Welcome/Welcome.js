import { useEffect, useState } from 'react';
import styles from './Welcome.module.css';

const thinkingPhrasesEs = [
  'Pensando...',
  'Analizando datos...',
  'Procesando solicitud...',
  'Ejecutando comando...',
  'Consultando base de datos...',
  'Generando respuesta...',
  'Validando parámetros...',
  'Compilando resultados...',
  'Sincronizando servicios...',
  'Optimizando proceso...',
  'Interpretando entrada...',
  'Resolviendo dependencias...',
  'Inicializando módulos...',
  'Autenticando usuario...',
  'Estableciendo conexión...',
  'Evaluando contexto...',
  'Aplicando lógica...',
  'Verificando integridad...',
  'Preparando entorno...',
  'Finalizando operación...',
];

const thinkingPhrasesEn = [
  'Thinking...',
  'Analyzing data...',
  'Reading file...',
  'Processing request...',
  'Running command...',
  'Querying database...',
  'Generating response...',
  'Validating parameters...',
  'Compiling results...',
  'Syncing services...',
  'Optimizing process...',
  'Interpreting input...',
  'Resolving dependencies...',
  'Initializing modules...',
  'Authenticating user...',
  'Establishing connection...',
  'Evaluating context...',
  'Applying logic...',
  'Verifying integrity...',
  'Preparing environment...',
  'Finalizing operation...',
];

const thinkingPhrases = thinkingPhrasesEn.map((phrase) => phrase);

const Welcome = () => {
  const [thinkingIndex, setThinkingIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add('welcome-body');
    return () => {
      document.body.classList.remove('welcome-body');
    };
  }, []);

  useEffect(() => {
    let timeoutId;

    const run = () => {
      const randomDelay = Math.random() * (1400 - 200); // entre 400ms y 1400ms

      timeoutId = setTimeout(() => {
        setThinkingIndex((prevIndex) =>
          (prevIndex + 1) % thinkingPhrases.length
        );
        run(); // vuelve a programarse con nuevo delay
      }, randomDelay);
    };

    run();

    return () => clearTimeout(timeoutId);
  }, [thinkingPhrases.length]);


  return (
    <main className={styles.page}>
      <section className={styles.frame}>
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

        <p className={styles.eyebrow}>
          <span className={styles.thinking}>
            {'>'} {thinkingPhrases[thinkingIndex]}
            <span className={styles.spinner} aria-hidden="true" />
          </span>
        </p>
      </section>
    </main>
  );
};

export default Welcome;
