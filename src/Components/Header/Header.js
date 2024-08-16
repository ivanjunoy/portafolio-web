import React, { useState } from 'react'
import profileImg from "../../Imagenes/perfil2.png"
import "./header.css"
import Typewriter from 'typewriter-effect';



const Header = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const buttonVar = isImageVisible ? "Close profile photo" : "Profile Photo";

    const showProfilePicture = () => {
        setIsImageVisible(!isImageVisible);
    };

    return (
        <>
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

                <p className='profileButon' onClick={showProfilePicture}>{buttonVar}</p>
                <img className='profilePicture' src={profileImg} alt="Perfil Foto" style={{ display: isImageVisible ? 'block' : 'none' }} onClick={showProfilePicture}/>
                <hr />
            </div>

        </>
    )
}

export default Header;