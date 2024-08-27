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
    return (
        <>
            <Header />
            <Resume />
            <div className={styles.containerGrid}>
                <div>
                <Experience  />
                </div>
                <div>
                <Formation  />  
                </div>
            </div>
            <hr />
            <Skills />
            <div className={styles.containerGrid}>
                <div>
                    <Contact />
                </div>
                <div>
                    <Projects />
                </div>
            </div>
        </>
    )
}

export default MinimalResumeHome;