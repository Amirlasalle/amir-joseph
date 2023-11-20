import React, { useState } from 'react';
import '../App.css'
import '../index.css'
import projectsData from "../components/Jsons/projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Card, Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPatchCheckFill } from "react-icons/bs";


const Experiences = () => {

    const [projects] = useState(projectsData);


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
                <h4 className='primary-text text-center'>
                    My Skills <span className='text-white'>&</span>
                </h4>
                <h1 className='text-center'>
                    Experiences
                </h1>
            </div>

            <div className='container experience__container  p-10'>
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



            <Container fluid secondary="true" className="d-flex flex-wrap justify-center mt-20 p-10">

                <div className='header-content pb-2'>

                    <h4 id="category-title" className="category-title text-center align-center">
                        Experience the Live Deployments of My Latest Projects
                    </h4>
                </div>
                <div className='header-content'>
                    <p className='text-light text-small justify-center align-center'>(hover for description)</p>
                </div>
                <div className='slider-body-projects blur2 mt-10 '>
                    <Slider {...settings} >
                        {projects.map((project, id) => (
                            <a key={id} href={project.more} target="_blank" rel="noreferrer" className="btn1" >
                                <Card className="project-card" >
                                    <Card.Body className=''>
                                        <Image src={process.env.PUBLIC_URL + project.screenShot}  className='img-border'/>
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