import React, { useEffect, useState } from 'react'
import profileImg from "../../Imagenes/perfil2.png"
import "./header.css"
import Typewriter from 'typewriter-effect';

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaLanguage } from "react-icons/fa";



const Header = ({ lang = 'es', onToggleLang = () => {} }) => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const copy = {
        es: {
            open: 'Foto de perfil',
            close: 'Cerrar foto de perfil',
            imgAlt: 'Foto de perfil',
        },
        en: {
            open: 'Profile photo',
            close: 'Close profile photo',
            imgAlt: 'Profile photo',
        },
    };
    const buttonVar = isImageVisible ? copy[lang].close : copy[lang].open;
    const langLabel = lang === 'es' ? 'Switch to English' : 'Cambiar a español';
    const [darkMode, setDarkMode] = useState(true);

    const showProfilePicture = () => {
        setIsImageVisible(!isImageVisible);
    };


    useEffect(() => {
      // Agrega o quita la clase 'dark-mode' del body según el estado
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [darkMode]);

    return (
        <>
            <div className='header-cont'>
                <div>
                    <h1>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString('Ivan Junoy')
                                .start()
                            }}
                        />
                    </h1>
                </div>
                <div className='header-actions'>
                    <button
                        type="button"
                        className='langButton'
                        onClick={onToggleLang}
                        aria-label={langLabel}
                        title={langLabel}
                    >
                        <FaLanguage fontSize="1.6em" />
                    </button>
                    <button
                        type="button"
                        className='darkModeButton'
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {darkMode ? <CiLight fontSize="2em"/> : <CiDark fontSize="2em"/>}
                    </button>
                </div>
            </div>

            <button type="button" className='profileButon' onClick={showProfilePicture}>
                {buttonVar}
            </button>
            <img className='profilePicture' src={profileImg} alt={copy[lang].imgAlt} style={{ display: isImageVisible ? 'block' : 'none' }} onClick={showProfilePicture}/>
            <hr />
        </>
    )
}

export default Header;
