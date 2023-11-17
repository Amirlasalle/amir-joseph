// import React from 'react'
// import '../../App.css'
// import CTA from './CTA'
// import ME from '../assets/Images/about-pic.PNG'
// import HeaderSocials from './HomePageSocials'

// const Header = () => {
//     return (
//         <header>
//             <div className='container header_container justify-center'>
//                 <h5 className='text-center pl-0'>
//                     Hello I'm
//                 </h5>
//                 <h1 className='text-center pl-0'>
//                     Amir Mohamed
//                 </h1>
//                 <h5 className='text-light text-center pl-0'>
//                     Fullstack Developer
//                 </h5>

//                 <CTA />

//             <HeaderSocials />

//                 <div className='me'>
//                     <img src={ME} alt='me'/>
//                 </div>

//             </div>
//         </header>
//     )
// }

// export default Header

// import React from 'react'
// import '../../App.css'
// import CTA from './CTA'
// import SpinningLogo from '../Logo/SpinningLogo'
// import ME from '../assets/Images/about-pic.PNG'
// import HeaderSocials from './HomePageSocials'
// import { Container } from 'react-bootstrap'

// const Header = () => {
//     return (

//         <div className="home">
//              <SpinningLogo />
//         <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">
//         {/* <div className='container header_container justify-around mb-5 pb-5'> */}
//             <div className='mt-5 justify-center'>
// <h5 className='pl-0 text-center '>
//     Hello I'm
// </h5>
// <h1 className='pl-0 text-center'>
//     Amir Mohamed
// </h1>
// <h5 className='pl-0 text-light text-center'>
//     Fullstack Developer
// </h5>

//                 <CTA />
//             </div>
//             <div className='about__container p-5 mb-5'>
//                 <HeaderSocials />

//                 <div className='me'>
//                     <img src={ME} alt='me' />
//                 </div>
//             </div>
//         {/* </div> */}
//         </Container>
//     </div>
//     )
// }

// export default Header

import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'
import '../../index.css'
import ME from '../assets/Images/about-pic.PNG'
import CV from '../assets/CV/amir-resume.pdf'
import SpinningLogo from '../Logo/SpinningLogo'
import HeaderSocials from './HomePageSocials'
import { Button, Image } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AboutMe = () => {


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
        <div className="container header_container justify-center">

            <div className='mt-5 justify-center d-flex flex-wrap'>
                <SpinningLogo />
                <h5 className='pl-0 text-center '>
                    Hello I'm
                </h5>
                <h1 className='pl-0 text-center'>
                    Amir Mohamed
                </h1>
                <h5 className='pl-0 text-light text-center'>
                    Fullstack Developer
                </h5>
                <div className=' button-container justify-center'>
                    <a href={CV} download className='justify-center'>
                        <Button className='justify-center btn7 btn-bg m-1 mx-auto'>

                            Download CV

                        </Button>
                    </a>
                    <Link to='/contact' onClick={() => handleNavLinkClick('/contact')} className={activeNav === '/contact' ? 'active' : ''}>
                        <Button className='btn7 ml-1 mx-auto btn-primary '>

                            Lets Talk

                        </Button>
                    </Link>

                </div>

            </div>


            <div className='home__container p-5'>

                <div className='home__me ml-10 mr-5 mb-20'>
                <HeaderSocials />

                    <div className='home__me-image'>

                        <Image src={ME} alt='me' className='home-img' thumbnail />

                    </div>
                </div>
            </div>




        </div>
    );
};


export default AboutMe 