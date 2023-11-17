import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

import { Container, Col, Card  } from 'react-bootstrap';
import '../App.css'
import '../index.css'
import servicesData from "../components/Jsons/services.json";
// import { Col, Image, Row, Carousel, Tab, Tabs, Button, Modal } from 'react-bootstrap/Col';
import { BiCheck } from 'react-icons/bi'

function Home() {
  // const [listings, setListings] = useState([]);
  const [services] = useState(servicesData);

  // const nextIconStyle = {
  //   fontSize: '4rem',
  //   fontWeight: 'bolder',
  // };
  // const nextIconStyleTwo = {
  //   fontSize: '2rem',
  //   fontWeight: 'bolder',
  // };

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




  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);





  return (
    <div className="container header_container justify-center">
      <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around p-10">

{/* <div className='mt-5 mb-5 pb-5'> */}
          <h5 className='pl-5 text-primary'>
            Explore My Expertise
          </h5>
          <h2 className='pl-5'>
            Professional Services
          </h2>
          <div id="ServicesCards" className="d-flex flex-wrap justify-content-center services__container">
            {services.map((service, key) =>
              <Col size={12} sm={12} md={12}>
                <Card key={key} className="m-2 service " style={{ maxWidth: '80vw' }}>
                  <Card.Header className='service__head text-center'>{service.header}</Card.Header>
                  <Card.Body className='w-100 mt-2 ml-0 mr-0 '>
                    <Card.Subtitle className="mb-2 mr-1 service__list-txt ">  <BiCheck className=' service__list-icon' /> {service.listOne}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 mr-1 service__list-txt">  <BiCheck className=' service__list-icon' /> {service.listTwo}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 mr-1 service__list-txt">  <BiCheck className=' service__list-icon' /> {service.listThree}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 mr-1 service__list-txt">  <BiCheck className=' service__list-icon' /> {service.listFour}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 mr-1 service__list-txt">  <BiCheck className=' service__list-icon' /> {service.listFive}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 mr-1 service__list-txt">  <BiCheck className=' service__list-icon' /> {service.listSix}</Card.Subtitle>
                  </Card.Body>

                </Card>
              </Col>
            )}
          </div>




      </Container>
</div>
  );
}



export default Home;