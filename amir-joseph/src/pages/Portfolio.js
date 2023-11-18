import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import '../index.css'
import projectsData from "../components/Jsons/projects.json";
import { Image, Container, Col, Card, Row, Carousel, Tab, Tabs, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight, faExternalLinkAlt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {


  const chevIconStyle = {
    fontSize: '2.5rem',
  };
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
  };

  const [projects] = useState(projectsData);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div className="home">
      <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around ">
        <div className='p-10'>
          <h2 className='pl-0 '>
            Browse Through My Work
          </h2>
          <h5 className='pl-0 text-primary'>
            A Showcase of Passion & Precision
          </h5>

        </div>


          {/* <div className='header-content pb-2 pt-10'>

            <h4 id="category-title" className="category-title text-center align-center">
              Experience the Live Deployments of My Latest Projects
            </h4>
          </div> */}
          <div className='header-content pt-5'>
            <p className='text-light text-small justify-center align-center'>(hover for description)</p>
          </div>


        <Container fluid secondary="true" className="pb-15 d-flex flex-wrap justify-center  portfolio-cards__container">



          {projects.map((project, key) => (
            <div key={key} className=' justify-center p-2'>
              <Card className="project-card mx-auto" >
                <Card.Body className='w-100'>
                  <Image src={process.env.PUBLIC_URL + project.screenShot} />
                  <Card.Subtitle className="mb-2 project-text">
                    <h4 className='pl-0 text-black'>
                      {project.name}</h4>
                    <span>{project.subtitle}</span>
                  </Card.Subtitle>

                </Card.Body>

              </Card>
          
              <a href={project.github} target="_blank" rel="noreferrer" className="" >
                        <Button className='justify-center btn7 btn-bg m-1 mx-auto'>

                        Github <br></br>Repository

                        </Button>
                    </a>
                    <a href={project.deployment} target="_blank" rel="noreferrer" className="" >
                        <Button className='btn7 ml-1 mx-auto btn-primary '>

                        Live <br></br>Deployment

                        </Button>
                    </a>
            </div>
          ))}
        </Container>



      </Container>
    </div>
  );
}



export default Portfolio;