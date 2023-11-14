import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBook, faHandshake, faHouse, faUserCircle } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {

    const [activeNav, setActiveNav ] = useState('/')

    const navigate = useNavigate();

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    };
  
    const handleNavLinkClick = (url) => {
      scrollToTop();
      navigate(url);
      setActiveNav(url);
    };

  return (
    <nav>
        <Link to='/' onClick={() => handleNavLinkClick('/')}  className={activeNav === '/' ? 'active' : ''}>
        <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link to='/aboutme' onClick={() => handleNavLinkClick('/aboutme')}  className={activeNav === '/aboutme' ? 'active' : ''}>
        <FontAwesomeIcon icon={faUserCircle} />
        </Link>
        <Link to='/experiences' onClick={() => handleNavLinkClick('/experiences')}  className={activeNav === '/experiences' ? 'active' : ''}>
        <FontAwesomeIcon icon={faBook} />
        </Link>
        <Link to='/services' onClick={() => handleNavLinkClick('/services')}  className={activeNav === '/services' ? 'active' : ''}>
        <FontAwesomeIcon icon={faHandshake} />
        </Link>
        <Link to='/contact' onClick={() => handleNavLinkClick('/contact')}  className={activeNav === '/contact' ? 'active' : ''}>
        <FontAwesomeIcon icon={faAddressBook} />
        </Link>
    </nav>
  )
}

export default Navbar