import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationHeader.css';

const NavigationHeader = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/proyectos', label: 'Proyectos' },
        { path: '/blog', label: 'Blog' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/learning', label: 'Aprendizaje' },
        { path: '/games', label: 'Juegos' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navigation-header">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/" onClick={closeMenu}>Ivan Junoy</Link>
                </div>
                
                {/* Hamburger button */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link 
                                to={item.path} 
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
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
