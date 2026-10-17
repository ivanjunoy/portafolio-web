import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiCode, FiBookOpen, FiFileText, FiMapPin } from 'react-icons/fi';
import styles from './Welcome.module.css';

const thinkingPhrases = [
  'Pensando...',
  'Analizando datos...',
  'Leyendo archivo...',
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

/* const thinkingPhrasesEn = [
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
]; */

const Welcome = () => {
  const [thinkingIndex, setThinkingIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const run = () => {
      const randomDelay = 2400 + Math.random() * 1600;

      timeoutId = setTimeout(() => {
        setThinkingIndex((prevIndex) =>
          (prevIndex + 1) % thinkingPhrases.length
        );
        run();
      }, randomDelay);
    };

    run();

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <main className={styles.page}>
      <section className={styles.frame}>
        <div className={styles.introduction}>
        <p className="portfolio-eyebrow"><span>00 /</span> CÓDIGO - PROBLEMAS - SOLUCIONES</p>
        <h1 className={styles.title}>Hola, soy<br />Iván <em>Junoy.</em></h1>
        <p className={styles.subtitle}>
          Desarrollador de software enfocado en construir soluciones claras y confiables.
        </p>
        <div className={styles.actions}>
          <Link className="portfolio-button" to="/proyectos">Explorar proyectos <FiArrowRight /></Link>
          {/* <Link className="portfolio-button portfolio-button-secondary" to="/resume">Ver mi CV <FiArrowUpRight /></Link> */}
        </div>
        <div className={styles.contact}>
          <span>¿Charlamos?</span>
          <a href="https://wa.me/3416752684" target="_blank" rel="noopener noreferrer">WhatsApp <FiArrowUpRight /></a>
          <a href="mailto:ivanjunoy@gmail.com">Mail <FiArrowUpRight /></a>
        </div>
        <div className={styles.location}><FiMapPin /> Rosario, Santa Fe, Argentina</div>
        </div>
        <aside className={styles.workbench} aria-label="Explorá el portafolio">
          <div className={styles.workbenchTop}><span>PORTAFOLIO / PERSONAL</span><span className={styles.smallDot} /></div>
          <h2>Un lugar para<br /><em>probar ideas.</em></h2>
          <p>Lo que construyo, lo que aprendo<br />y lo que me queda por descubrir.</p>
          <div className={styles.exploreLinks}>
            <Link to="/proyectos"><span className={styles.linkIcon}><FiCode /></span><span><strong>El laboratorio</strong><small>Proyectos & experimentos</small></span><FiArrowUpRight /></Link>
            <Link to="/learning"><span className={styles.linkIcon}><FiBookOpen /></span><span><strong>En aprendizaje</strong><small>Conceptos & pequeñas notas</small></span><FiArrowUpRight /></Link>
            <Link to="/blog"><span className={styles.linkIcon}><FiFileText /></span><span><strong>Referencias</strong><small>Enlaces & lecturas</small></span><FiArrowUpRight /></Link>
          </div>
          <div className={styles.stack}><span>MI CAJA DE HERRAMIENTAS</span><p>React · Node <span>/</span> Next · Nest</p></div>
        </aside>
      </section>
      <div className={styles.bottomBar}>
        <p className={styles.status}><span className={styles.smallDot} /> Actualmente trabajo tiempo completo como ingeniero de software. <span className={styles.availability}>No disponible</span></p>
        <p className={styles.thinking} aria-hidden="true">{'>'} {thinkingPhrases[thinkingIndex]}<span className={styles.spinner} /></p>
      </div>
    </main>
  );
};

export default Welcome;
