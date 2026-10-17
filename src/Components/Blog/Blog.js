import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { PageHeading } from '../PortfolioLayout/PortfolioLayout';
import { references } from './references';
import styles from './Blog.module.css';

export default function Blog() {
  return (
    <main>
      <PageHeading number="02" label="REFERENCIAS" title="Para leer y" accent="volver." description="Documentación, herramientas, noticias y otras cosas que me interesan. Una lista de enlaces para tener a mano." aside={<>Hallazgos y apuntes.<br />Para volver después.</>} />
      <div className="portfolio-section-bar"><span>Una colección personal</span><span>{String(references.length).padStart(2, '0')} referencias</span></div>
      <ul className={styles.list} aria-label="Referencias guardadas">
        {references.map((reference, index) => {
          const content = <>
            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div className={styles.content}>
              <div className={styles.meta}><span>{reference.category}</span><span>{reference.source}</span></div>
              <h2>{reference.title}</h2>
              <p>{reference.description}</p>
            </div>
            <span className={styles.direction}>
              <span>{reference.external ? 'Abrir enlace' : 'Leer texto'}</span>
              {reference.external ? <FiArrowUpRight aria-hidden="true" /> : <FiArrowRight aria-hidden="true" />}
            </span>
            {reference.external && <span className={styles.srOnly}> (se abre en una pestaña nueva)</span>}
          </>;

          return <li key={reference.href}>
            {reference.external
              ? <a className={styles.link} href={reference.href} target="_blank" rel="noopener noreferrer">{content}</a>
              : <Link className={styles.link} to={reference.href}>{content}</Link>}
          </li>;
        })}
      </ul>
    </main>
  );
}
