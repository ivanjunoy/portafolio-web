import React, { useState } from 'react'
import profileImg from "../../Imagenes/perfil2.png"
import "./header.css"

const Header = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);

    const showProfilePicture = () => {
        setIsImageVisible(!isImageVisible);
    };

    return (
        <>
            <h1>Ivan Junoy</h1>
            <p className='profileButon' onClick={showProfilePicture}>Profile picture</p>
            <img src={profileImg} alt="Perfil Foto" style={{ display: isImageVisible ? 'block' : 'none' }}/>
            <hr />
        </>
    )
}

export default Header;