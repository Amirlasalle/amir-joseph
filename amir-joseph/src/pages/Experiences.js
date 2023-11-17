import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';useContext Accordion, useAccordionButton, AccordionContext, Button,faChevronDown, faChevronUp,
import '../App.css'
import '../index.css'
import projectsData from "../components/Jsons/projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Card,  Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPatchCheckFill } from "react-icons/bs";


const Experiences = () => {

    const [projects] = useState(projectsData);
    // const UP = <FontAwesomeIcon icon={faChevronUp} size="lg" className='up-to-down' />;
    // const DOWN = <FontAwesomeIcon icon={faChevronDown} size="lg" className='down-to-up' />;

    // function ContextAwareToggle({ children, eventKey, callback }) {
    //     const { activeEventKey } = useContext(AccordionContext);

    //     const decoratedOnClick = useAccordionButton(
    //         eventKey,
    //         () => callback && callback(eventKey),
    //     );

    //     const isCurrentEventKey = activeEventKey === eventKey;

    //     return (
    //         <Button
    //             type="button"
    //             style={{ backgroundColor: isCurrentEventKey ? 'white' : 'rgb(4, 14, 158)' }}
    //             onClick={decoratedOnClick}
    //             className='offer-icon'
    //         >
    //             {isCurrentEventKey ? UP : DOWN}
    //             {children}
    //         </Button>
    //     );
    // }

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dotsClass: "button__bar",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return (
        <div className="home mb-25 justify-center">
            <div className='mt-5 mb-5 pb-5'>
                <h4 className='pl-5 primary-text'>
                    My Skills <span className='text-white'>&</span>
                </h4>
                <h1 className='pl-4'>
                    Experiences
                </h1>
            </div>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h4 className='pl-0'>Frontend Development</h4>

                    <div className='experience__content'>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >HTML5</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >CSS3</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >JavaScript</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >React</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >Bootstrap</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0'>jQuery</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </ div>
                    </div>
                </div>


                <div className='experience__backend'>
                    <h4 className='pl-0'>Backend Development</h4>
                    <div className='experience__content'>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >Node JS</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >MongoDB</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >MySQL</h5>
                                <small className='text-light'>Basic</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >Python</h5>
                                <small className='text-light'>Basic</small>
                            </div>
                        </ div>
                        < div className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5 className='pl-0' >GraphQL</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </ div>
                    </div>
                </div>
            </div>
            {/* <Container>
                <div className='mt-1 about-img'>
                    <Row className=''>
                        <div className='about-text'>
                            <p className='d-flex flex-column justify-center about-para pl-0'>
                                👋 Hi, I'm Amir, a passionate Software Developer specializing in fullstack software development. With 2+ years of coding experience, I've crafted solutions for projects like Venture Villa. I'm on a constant quest for clean code and elegant solutions. Let's turn your ideas into functional reality together!
                            </p>
                        </div>
                    </Row>
                </div>
            </Container> */}



            <Container fluid secondary="true" className="d-flex flex-wrap justify-center mt-20 p-10">
                {/* <Accordion style={{ width: '100%' }}>
                    <Card className='projects'>
                        <Card.Header className='projects-header mb-10'> */}
                            <div className='header-content pb-2'>
                                {/* <ContextAwareToggle eventKey="1" className='icon-small' /> */}
                                <h4 id="category-title" className="category-title text-center align-center">
                                    Experience the Live Deployments of My Latest Projects
                                </h4>
                            </div>
                            <div className='header-content'>
                            <p className='text-light text-small justify-center align-center'>(hover for description)</p>
                            </div>
                        {/* </Card.Header> */}
                        {/* <Accordion.Collapse eventKey="1" className="m-auto" style={{ width: '100%' }}>
                            <Card.Body className=" projects-card-body m-auto blur2" style={{ width: '100%' }}> */}
                                <div className='slider-body blur2 mt-10'>
                                    <Slider {...settings} >
                                        {projects.map((project, key) => (
                                            <a href={project.more} target="_blank" rel="noreferrer" className="btn1" >
                                                   <Card key={key} className="project-card" >
                                                    <Card.Body className='w-100'>
                                                        <Image src={process.env.PUBLIC_URL + project.screenShot} />
                                                        <Card.Subtitle className="mb-2 project-text">
                                                            <h4 className='pl-0 text-black'>
                                                            {project.name}</h4>
                                                            <span>{project.subtitle}</span>
                                                            </Card.Subtitle>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        ))}
                                    </Slider>
                                </div>
                            {/* </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion> */}
            </Container>
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

export default Experiences 