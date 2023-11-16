// import React from 'react'
// import CV from '../assets/CV/amir-resume.pdf'
// import '../../App.css'

// const CTA = () => {
//   return (
//     <div className='cta'>
//         <a href={CV} download className='btn'>
//             Download CV
//         </a>
//         <a href='#contact' className='btn btn-primary'>
//             Let's Talk
//         </a>
//     </div>
//   )
// }

// export default CTA

import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CV from '../assets/CV/amir-resume.pdf'
import '../../App.css'
import { Button } from 'react-bootstrap'



const CTA = () => {

  const [activeNav, setActiveNav] = useState('/')

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
    <div className='cta justify-center'>
      <a href={CV} download className='justify-center'>
        <Button className='btn btn-bg'>
          Download CV
        </Button>
      </a>
      <Link to='/contact' onClick={() => handleNavLinkClick('/contact')} className={activeNav === '/contact' ? 'active' : ''}>
        <Button className='btn btn-primary '>

          Lets Talk

        </Button>
      </Link>
    </div>
  )
}

export default CTA