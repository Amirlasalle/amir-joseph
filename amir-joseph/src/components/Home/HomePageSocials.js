import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/amirlasalle" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.github.com/amirlasalle" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/ichigo23__/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            </a>

        </div>
    )
}

export default HeaderSocials