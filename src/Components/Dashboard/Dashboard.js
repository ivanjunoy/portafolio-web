import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
            </header>

            <main className="dashboard-content">
                <div className="dashboard-grid">
                    <div className="dashboard-card">
                        <h3>Estadísticas Generales</h3>
                        <p>Aquí irán las estadísticas del portafolio</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>Gestión de Proyectos</h3>
                        <p>Administra tus proyectos desde aquí</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>Gestión de Blog</h3>
                        <p>Administra las entradas del blog</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>Configuración</h3>
                        <p>Ajustes del portafolio</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
