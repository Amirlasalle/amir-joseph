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


const HomePage = () => {


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
                    Fullstack Software Developer
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


            <div className='home__container p-5 justify-center mb-20'>

                <div className='home__me ml-10 mr-5 '>
                    <HeaderSocials />
                </div>
                <div className='home__me-image'>

                    <Image src={ME} alt='me' className='home-img' thumbnail />

                </div>

            </div>




        </div>
    );
};


export default HomePage 