import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import '../index.css'
import CV from '../components/assets/CV/Amir-Mohamed-2023.pdf'
import SpinningLogoTwo from '../components/Logo/SpinningLogoTwo'
import HeaderSocials from '../components/Home/HomePageSocials'
import { Button } from 'react-bootstrap'
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
        <SpinningLogoTwo />
        <h4 className='pl-0 text-center '>
          Take A Look At
        </h4>
        <h1 className='pl-0 text-center text-primary'>
          <span className='text-white'>My</span> Resume
        </h1>
        <h5 className='pl-0 text-light text-center'>
          downloadable PDF
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
          {/* <iframe
            height="1770px"
            width="850px"
            title="resume"
            src="https://docs.google.com/document/d/e/2PACX-1vTzu-Smi-LyK1ow6xl3Tw79V3V0Lt5ZOn-nrrlCOdq2LCsb0jh7SSJCOoy8T2s6bWQUqpB2ab91DWWD/pub?embedded=true" 
            className='resume-iframe'
            /> */}
          {/* <iframe
            height="2150px"
            width="850px"
            title="resume"
            src="https://onedrive.live.com/embed?resid=EC63EF670676D710%2128526&amp;authkey=%21AM4hVx4namo2b60&amp;em=2"
            className='resume-iframe scroll-touch'
            /> */}
          <iframe 
          src="https://onedrive.live.com/embed?resid=EC63EF670676D710%2128526&amp;authkey=%21AM4hVx4namo2b60&amp;em=2" 
          height="2150px"
          width="850px"
          title="resume"
          frameborder="0" 
          className='resume-iframe scroll-touch'/>
          
        </div>

      </div>




    </div>
  );
};


export default HomePage 