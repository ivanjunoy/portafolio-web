import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiCode, FiBookOpen } from 'react-icons/fi';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import { PageHeading } from '../PortfolioLayout/PortfolioLayout';
import styles from './LearningArticle.module.css';

export function CodeExample({ title, code, output }) {
  const codeRef = useRef(null);
  useEffect(() => { Prism.highlightElement(codeRef.current); }, [code]);
  return (
    <figure className={styles.codeWindow}>
      <figcaption><span><FiCode /> {title}</span><span>JAVASCRIPT</span></figcaption>
      <pre tabIndex={0} aria-label={`Código: ${title}`}><code ref={codeRef} className="language-javascript">{code}</code></pre>
      {output && <div className={styles.output}><span>SALIDA EN CONSOLA</span><pre>{output}</pre></div>}
    </figure>
  );
}

export function LessonSection({ id, number, title, children }) {
  return <section id={id} className={styles.section}><span className={styles.sectionNumber}>/{number}</span><h2>{title}</h2>{children}</section>;
}

export function LessonNote({ children }) {
  return <aside className={styles.note}><FiBookOpen aria-hidden="true" /><div>{children}</div></aside>;
}

export default function LearningArticle({ number, title, accent, description, sections, related, sources, children }) {
  return (
    <main className={styles.lesson}>
      <Link to="/learning" className={styles.back}><FiArrowLeft /> Volver a Aprendizaje</Link>
      <PageHeading number={`03.${number}`} label="JAVASCRIPT / FUNDAMENTOS" title={title} accent={accent} description={description} aside={<span className="portfolio-tag">NOTA DE APRENDIZAJE</span>} />
      <div className={styles.layout}>
        <article className={styles.article}>{children}
          <div className={styles.references}><span>PARA SEGUIR EXPLORANDO</span>{sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<FiArrowUpRight /><span className={styles.srOnly}> (abre en otra pestaña)</span></a>)}</div>
        </article>
        <aside className={styles.sidebar}>
          <nav aria-label="En esta nota"><p className="portfolio-eyebrow">EN ESTA NOTA</p><ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>0{index + 1}</span>{section.title}</a></li>)}</ol></nav>
          <div className={styles.sideNote}><FiCode /><p>Una idea, un ejemplo.<br />Probalo en la consola de tu navegador.</p><span>JAVASCRIPT · APRENDER HACIENDO</span></div>
        </aside>
      </div>
      <Link to={related.to} className={styles.related}><span><small>SEGUÍ EXPLORANDO</small><strong>{related.label}</strong></span><FiArrowUpRight /></Link>
    </main>
  );
}
