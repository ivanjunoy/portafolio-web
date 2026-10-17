import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import NavigationHeader from '../NavigationHeader/NavigationHeader';
import './PortfolioLayout.css';

export function PageHeading({ number, label, title, accent, description, aside }) {
  return (
    <header className="portfolio-page-heading">
      <div>
        <p className="portfolio-eyebrow"><span>{number} /</span> {label}</p>
        <h1>{title} <em>{accent}</em></h1>
        <p className="portfolio-description">{description}</p>
      </div>
      {aside && <span className="portfolio-heading-note">{aside}</span>}
    </header>
  );
}

export default function PortfolioLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.classList.add('portfolio-body');
    return () => document.body.classList.remove('portfolio-body');
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="portfolio-shell">
      <a className="portfolio-skip" href="#portfolio-content">Ir al contenido</a>
      <NavigationHeader appearance="portfolio" />
      <div id="portfolio-content" className="portfolio-content" tabIndex={-1}><Outlet /></div>
      <footer className="portfolio-footer">
        <Link to="/welcome">IVÁN JUNOY <span>/ PORTAFOLIO</span></Link>
        <span>Hecho con curiosidad, desde Rosario.</span>
        <a href="mailto:ivanjunoy@gmail.com">Conversemos <FiArrowUpRight /></a>
      </footer>
    </div>
  );
}
