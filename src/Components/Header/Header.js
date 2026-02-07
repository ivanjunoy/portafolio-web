import React, { useEffect, useState } from 'react'
import profileImg from "../../Imagenes/perfil2.png"
import "./header.css"
import Typewriter from 'typewriter-effect';

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";



const Header = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const buttonVar = isImageVisible ? "Cerrar foto de perfil" : "Foto de perfil";
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
                <div className='darkModeButton' onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <CiLight fontSize="2em"/> : <CiDark fontSize="2em"/>}
                </div>
            </div>

            <button type="button" className='profileButon' onClick={showProfilePicture}>
                {buttonVar}
            </button>
            <img className='profilePicture' src={profileImg} alt="Perfil Foto" style={{ display: isImageVisible ? 'block' : 'none' }} onClick={showProfilePicture}/>
            <hr />
        </>
    )
}

export default Header;
