import { useState } from 'react';
import Header from '../Header/Header'
import Resume from '../Resume/Resume';
import Experience from '../Experience/Experience';
import Formation from '../Formation/Formation';
import Skills from '../Skills/Skills';
import Projects from '../ProjectsYBlogText/ProjectsYBlog';
import Contact from '../Contact/Contact';

// CSS
import styles from './MinimalResume.module.css'

const MinimalResumeHome = () => {
    const [lang, setLang] = useState('es');

    const toggleLang = () => {
        setLang((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <>
            <Header lang={lang} onToggleLang={toggleLang} />
            <Resume lang={lang} />
            <div className={styles.containerGrid}>
                <div>
                <Experience lang={lang} />
                </div>
                <div>
                <Formation lang={lang} />  
                </div>
            </div>
            <hr />
            <Skills lang={lang} />
            <div className={styles.containerGrid}>
                <div>
                    <Contact lang={lang} />
                    <p>ivanjunoy@gmail.com</p>
                </div>
                <div>
                    <Projects lang={lang} />
                </div>
            </div>
        </>
    )
}

export default MinimalResumeHome;
