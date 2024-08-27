import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css"


const Contact = () => {
    return (
        <>
            <div>
                <h2>Contact</h2>
                <div className={styles.contactContainer}>
                    <div>
                        <a href="mailto: ivanjunoy@gmail.com" target="_blank" rel="noopener noreferrer">
                            <CiMail fontSize="2em"/>
                        </a>   
                    </div>
                    <div>
                        <a href="https://github.com/ivanjunoy" target="_blank" rel="noopener noreferrer">
                            <FaGithub fontSize="2em"/>
                        </a>  
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/ivanjunoy/" target="_blank" rel="noopener noreferrer">
                            <CiLinkedin fontSize="2em"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

/* 

    display: flex;
    width: 150px;
    justify-content: space-between;

*/