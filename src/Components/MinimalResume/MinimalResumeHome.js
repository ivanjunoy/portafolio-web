import Header from '../Header/Header'
import Resume from '../Resume/Resume';
import Experience from '../Experience/Experience';
import Formation from '../Formation/Formation';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const MinimalResumeHome = () => {
    return (
        <>
            <Header />
            <Resume />
            <div className='containerGrid'>
                <div>
                <Experience  />
                </div>
                <div>
                <Formation  />  
                </div>
            </div>
            <hr />
            <Skills />
            <div className='containerGrid'>
                <div>
                <Contact />
                </div>
                <div>
                <Projects />
                </div>
            </div>
            <hr />
        </>
    )
}

export default MinimalResumeHome;