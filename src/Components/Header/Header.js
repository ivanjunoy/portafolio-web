import React, { useState } from 'react'
import profileImg from "../../Imagenes/perfil2.png"
import "./header.css"

const Header = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const buttonVar = isImageVisible ? "Close profile photo" : "Profile Photo";

    const showProfilePicture = () => {
        setIsImageVisible(!isImageVisible);
    };

    return (
        <>
            <h1>Ivan Junoy</h1>
            <p className='profileButon' onClick={showProfilePicture}>{buttonVar}</p>
            <img className='profilePicture' src={profileImg} alt="Perfil Foto" style={{ display: isImageVisible ? 'block' : 'none' }} onClick={showProfilePicture}/>
            <hr />
        </>
    )
}

export default Header;