import React, { useState } from 'react';
import '../App.css'
import '../index.css'
import projectspageData from "../components/Jsons/projectspage.json";
import { Image, Container, Button, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight, faExternalLinkAlt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {


  // const chevIconStyle = {
  //   fontSize: '2.5rem',
  // };
  // const navigate = useNavigate();

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'auto',
  //   });
  // };


  // const handleNavLinkClick = (url) => {
  //   scrollToTop();
  //   navigate(url);
  // };

  const [projectspage] = useState(projectspageData);



  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);




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



          <div className='header-content pt-5'>
            <p className='text-light text-small justify-center align-center'>(hover for description)</p>
          </div>


        <Container fluid secondary="true" className="pb-15 p-3 d-flex flex-wrap justify-center  portfolio-cards__container">



          {projectspage.map((projects, key) => (
            <div key={key} className='card-body-bg justify-center '>
              <Card className="project-page-card mx-auto" >
                <Card.Body className='w-100'>
                  <Image src={process.env.PUBLIC_URL + projects.screenShot} className='img-border'/>
                  <Card.Subtitle className="mb-2 project-text">
                    <h4 className='pl-0 text-black'>
                      {projects.name}</h4>
                    <span>{projects.subtitle}</span>
                  </Card.Subtitle>

                </Card.Body>

              </Card>
          
              <a href={projects.github} target="_blank" rel="noreferrer" className="" >
                        <Button className='justify-center btn7 btn-bg m-1 mx-auto'>

                        Github<br></br>Repository

                        </Button>
                    </a>
                    <a href={projects.deployment} target="_blank" rel="noreferrer" className="" >
                        <Button className='btn7 ml-1 mx-auto btn-primary '>

                        Live<br></br>Deployment

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