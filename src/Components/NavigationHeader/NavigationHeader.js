import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiCode } from 'react-icons/fi';
import './NavigationHeader.css';

const NavigationHeader = ({ appearance = 'default' }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/proyectos', label: 'Proyectos' },
        { path: '/blog', label: 'Blog' },
        { path: '/learning', label: 'Aprendizaje' },
        { path: '/games', label: 'Juegos' },
        { path: '/dashboard', label: 'Dashboard' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navigation-header" aria-label="Navegación principal">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/welcome" onClick={closeMenu}>
                        {appearance === 'portfolio' && <span className="portfolio-logo-icon" aria-hidden="true"><FiCode /></span>}
                        Ivan Junoy
                    </Link>
                </div>
                
                {/* Hamburger button */}
                <button type="button" className="hamburger" onClick={toggleMenu} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isMenuOpen} aria-controls="main-navigation-menu">
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                </button>

                <ul id="main-navigation-menu" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link 
                                to={item.path} 
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                aria-current={location.pathname === item.path ? 'page' : undefined}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationHeader;
