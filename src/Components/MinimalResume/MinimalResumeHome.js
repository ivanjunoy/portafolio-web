import { useEffect, useState } from 'react';
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

    useEffect(() => {
        const hadDarkMode = document.body.classList.contains('dark-mode');

        document.body.classList.add('resume-body');
        document.body.classList.remove('dark-mode');

        return () => {
            document.body.classList.remove('resume-body');

            if (hadDarkMode) {
                document.body.classList.add('dark-mode');
            }
        };
    }, []);

    const toggleLang = () => {
        setLang((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <main className={styles.resumePage}>
            <article className={styles.sheet}>
                <header className={styles.resumeHeader}>
                    <div>
                        <h1>Ivan Junoy</h1>
                    </div>
                    <button
                        type="button"
                        className={`${styles.langButton} ${styles.printHidden}`}
                        onClick={toggleLang}
                        aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
                    >
                        {lang === 'es' ? 'EN' : 'ES'}
                    </button>
                </header>

                <section className={`${styles.section} ${styles.summary}`}>
                    <Resume lang={lang} />
                </section>

                <div className={styles.resumeGrid}>
                    <section className={`${styles.section} ${styles.experience}`}>
                        <Experience lang={lang} />
                    </section>

                    <aside className={styles.sidebar}>
                        <section className={`${styles.section} ${styles.formation}`}>
                            <Formation lang={lang} />
                        </section>

                        <section className={`${styles.section} ${styles.skills}`}>
                            <Skills lang={lang} />
                        </section>

                        <section className={`${styles.section} ${styles.contact}`}>
                            <Contact lang={lang} />
                            <p>ivanjunoy@gmail.com</p>
                        </section>
{/* 
                        <section className={`${styles.section} ${styles.projects}`}>
                            <Projects lang={lang} />
                        </section> */}
                    </aside>
                </div>
            </article>
        </main>
    )
}

export default MinimalResumeHome;
