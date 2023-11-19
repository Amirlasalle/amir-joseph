import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import '../index.css'
import aboutmecardsData from "../components/Jsons/aboutmecards.json";
import ME from '../components/assets/Images/ProPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Row, Button, Card, Container, Image } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AboutMe = () => {

    const [aboutmecards] = useState(aboutmecardsData);


    const navigate = useNavigate();

    console.log(aboutmecards);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };

    const handleNavLinkClick = (url) => {
        scrollToTop();
        navigate(url);
    };

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dotsClass: "button__bar",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const settingsTwo = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "button__bar",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />

    };


    return (
        <div className="container header_container justify-center">
            <div className='mt-5 mb-5 pb-5'>
                <h4 className='pl-5 primary-text'>
                    Get To Know
                </h4>
                <h1 className='pl-5'>
                    About Me
                </h1>
                <Link to='/contact' onClick={() => handleNavLinkClick('/contact')} >
                    <Button className='btn btn-primary mt-2 ml-5'>

                        Lets Talk

                    </Button>
                </Link>
            </div>
            <div className='about__container p-5'>

                <div className='about__me ml-10 mr-5 mb-20'>
                    <div className='about__me-image'>

                        <Image src={ME} alt='me' className='' thumbnail />

                    </div>
                </div>

                <Container fluid secondary="true" className="ml-20 mr-2 justify-around d-flex flex-wrap w-90 hide-it-750 blur">
                    <div className='slider-body mt-5 '>
                        <Slider {...settings} >
                            {aboutmecards.map((aboutmecard, key) => (
                                <Card key={key} className="about-cards-shadow mt-5" >
                                    <Link to={aboutmecard.linkTo} onClick={() => handleNavLinkClick(aboutmecard.linkTo)}>
                                        {/* <Link to={aboutmecard.linkTo} target="_blank" rel="noreferrer" className="no-decoration"> */}
                                        <Card.Body className='w-100 mt-2 ml-0 mr-0'>
                                            <Card.Title className="mb-2 about-card-title text-white text-xx-large" dangerouslySetInnerHTML={{ __html: aboutmecard.icon }}>
                                            </Card.Title>
                                            <Card.Title className="about-card-subtitles text-white"><h4 className='pl-0'>{aboutmecard.title}</h4></Card.Title>
                                            <Card.Subtitle className="about-card-subtitles text-white mb-2">{aboutmecard.subtitle}
                                            </Card.Subtitle>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            ))}
                        </Slider>
                    </div>

                </Container>
            </div>


            <div className='mt-1 about-img'>

                <div className='about-text'>
                    <p className='d-flex flex-column justify-center about-para'>
                        👋 Hi, I'm Amir, a passionate Software Developer specializing in fullstack software development. With 2+ years of coding experience, I've crafted solutions for projects like Venture Villa, and the ASCO Study Center. I'm on a constant quest for clean code and elegant solutions. Let's turn your ideas into functional reality together!
                    </p>
                </div>

            </div>



            <Row className='mt-20 mb-25 show-it-750'>
                <Container fluid secondary="true" className=" justify-around d-flex flex-wrap w-100 show-it-750 blur">
                    <div className='slider-body'>
                        <Slider {...settings} >
                            {aboutmecards.map((aboutmecard, key) => (
                                <Card key={key} className="about-cards-shadow mt-5" >
                                    <Link to={aboutmecard.linkTo} onClick={() => handleNavLinkClick(aboutmecard.linkTo)}>
                                        <Card.Body className='w-100 mt-2 ml-0 mr-0 '>

                                            <Card.Title className="mb-1 about-card-title text-white text-xx-large" dangerouslySetInnerHTML={{ __html: aboutmecard.icon }}></Card.Title>

                                            <Card.Title className="about-card-subtitles text-white"><h4 className='pl-0'>{aboutmecard.title}</h4></Card.Title>
                                            <Card.Subtitle className=" about-card-subtitles text-white">{aboutmecard.subtitle}
                                            </Card.Subtitle>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </Row>
            <Row className='mb-25 mt-5 show-it-315'>
                <Container fluid secondary="true" className="justify-around d-flex flex-wrap w-100 show-it-315">
                    <div className='justify-around slider-body'>
                        <Slider {...settingsTwo} >
                            {aboutmecards.map((aboutmecard, key) => (
                                <Card key={key} className="about-cards mt-5" >
                                    <Link to={aboutmecard.linkTo} onClick={() => handleNavLinkClick(aboutmecard.linkTo)}>
                                        <Card.Body className='w-100 mt-2 ml-0 mr-0 '>
                            
                                            <Card.Title className="about-card-title text-white text-xx-large" dangerouslySetInnerHTML={{ __html: aboutmecard.icon }}>
                                            </Card.Title>
                                            <Card.Title className="about-card-subtitles text-white"><h4 className='pl-0'>{aboutmecard.title}</h4></Card.Title>
                                            <Card.Subtitle className="mt-2 mb-2 about-card-subtitles text-white">{aboutmecard.subtitle}
                                            </Card.Subtitle>


                                        </Card.Body>
                                    </Link>
                                </Card>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </Row>
        </div>
    );
};

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronCircleRight} size="lg"
            className={`arrow ${className}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronCircleLeft} size="lg"
            className={`arrow ${className}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );

};

export default AboutMe


/* <div class="mt-5 circle-sb">
<div className='about-text'>
        <p className='d-flex flex-column justify-center about-para'>
            👋 Hi, I'm Amir, a passionate Software Developer specializing in fullstack software development. With 2+ years of coding experience, I've crafted solutions for projects like Venture Villa. I'm on a constant quest for clean code and elegant solutions. Let's turn your ideas into functional reality together!
        </p>
    </div>
    <div class="dcircle"></div>
    <div class="dcircle1"></div>
</div> */
