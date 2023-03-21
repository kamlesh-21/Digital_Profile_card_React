import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from "../images/kk.jpg"

export default function Info() {
     return (
       <header>
            <img src={ image } className="header--image" />
            <h1 className="header--name"> Kamlesh Kumar </h1>
            <h3 className="header--role"> Frontend Developer </h3>
            <p className="header--website"> kamnlesh.website </p>
            <div className="header--buttons">
                <button className="email"> <FontAwesomeIcon icon={faEnvelope} className="mail-icon"/> Email </button>
                <button className="linkedin">  <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/> Linkedin </button>
            </div>
            
       </header>
    )
}