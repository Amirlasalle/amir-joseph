import { React, useState } from 'react'
import '../App.css'
import '../index.css'
import socialmediaData from "../components/Jsons/socialmedia.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Row, Button, Col, Card, Container, Image } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {

  const [socialmedia] = useState(socialmediaData);

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (catergory, value) => {
    setFormDetails({
      ...formDetails,
      [catergory]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
  
      let result = await response.json(); 
  
      setButtonText("Send");
      setFormDetails(formInitialDetails);
  
      if (result.code === 200) {
        setStatus({ success: true, message: ' Message sent successfully!' });
      } else {
        setStatus({ success: false, message: ' Something went wrong, please try again later.' });
      }
    } catch (error) {
      console.error('Error in fetch:', error);
      setStatus({ success: false, message: ' An error occurred while sending the message.' });
    }
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



  return (
    <div className="container header__container justify-center">
      <div className='mt-5 mb-5 pb-5'>
        <h4 className='pl-5 primary-text'>
          Get In Touch
        </h4>
        <h1 className='pl-5'>
          With Me
        </h1>
      </div>
      <Row className='m-10 show-it-800'>
        <Container fluid secondary="true" className=" justify-around d-flex flex-wrap w-100 show-it-800 blur">
          <div className='contact-slider-body mt-5 '>
            <Slider {...settings} >
              {socialmedia.map((social, id) => (
                <a key={id} href={social.more} target="_blank" rel="noreferrer" className="btn1" >
                  <Card className="contact-card" >   <Image src={process.env.PUBLIC_URL + social.screenshot} className='contact-img img-fluid d-flex flex-wrap justify-content-around cards-image' />
                    <Card.Body className=''>

                      <Card.Subtitle className="mb-2 contact-text">
                        <h4 className='pl-0 text-black'>
                          {social.name}</h4>
                        <span>{social.subtitle}</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </Slider>
          </div>
        </Container>
      </Row>
      <div className='contact__container p-5'>
        <Container fluid secondary="true" className=" mr-2 justify-around d-flex flex-wrap w-100 hide-it-800 blur">
          <div className='contact-slider-body mt-5 '>
            <Slider {...settings} >
              {socialmedia.map((social, id) => (
                <a key={id} href={social.more} target="_blank" rel="noreferrer" className="btn1" >
                  <Card className="contact-card" >   <Image src={process.env.PUBLIC_URL + social.screenshot} className='contact-img img-fluid d-flex flex-wrap justify-content-around cards-image' />
                    <Card.Body className=''>

                      <Card.Subtitle className="mb-2 contact-text">
                        <h4 className='pl-0 text-black'>
                          {social.name}</h4>
                        <span>{social.subtitle}</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </Slider>
          </div>
        </Container>



        <Container fluid secondary="true" className="p-3 mb-20 justify-around form-container">
          <h3 className='text-center text-primary'>
          Reach Out to Me Directly!
          </h3>
          <div className='div-form px-3 py-1'>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className='px-1 py-1'>
                <input
                  type='text'
                  value={formDetails.firstName}
                  placeholder='First Name'
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                />
              </Col>
              <Col sm={6} className='px-1 py-1'>
                <input
                  type='text'
                  value={formDetails.lastName}
                  placeholder='Last Name'
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                />
              </Col>
              <Col sm={6} className='px-1 py-1'>
                <input
                  type='text'
                  value={formDetails.email}
                  placeholder='Email Address'
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                />
              </Col>
              <Col sm={6} className='px-1 py-1'>
                <input
                  type='text'
                  value={formDetails.phone}
                  placeholder='Phone #'
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                />
              </Col>
              <Col className='w-100 px-1 py-1'>
                <textarea rows='6'
                  value={formDetails.message}
                  placeholder="Type your questions or inquiries here, and I'll get back to you promptly!"
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                />
              </Col>
              <Button type='submit' className=' btn-block btn8 btn-bg px-1 py-1'>
                <span>{buttonText}</span>
              </Button>
           
                <div className=''>
                   {status.message && (
                
                  <p className={`success-status justify-center ${status.success === false ? "danger" : "success"}`}>
                    {status.message}
                  </p>
              )}
                </div>
            </Row>
          </form>
          </div>
        </Container>
      </div>

      <div className='mt-5 justify-center d-flex flex-wrap'>
          
                <h5 className='pl-0 text-center '>
                    Hello I'm
                </h5>
                <h1 className='pl-0 text-center'>
                    Amir Mohamed
                </h1>
                <h5 className='pl-0 text-light text-center'>
                    Fullstack Software Developer
                </h5>


            </div>
      {/* <Row className='mt-20 mb-25 show-it-800'>
        <Container fluid secondary="true" className=" justify-around d-flex flex-wrap w-100 show-it-800 blur">
          <div className='contact-slider-body mt-5 '>
            <Slider {...settings} >
              {socialmedia.map((social, id) => (
                <a key={id} href={social.more} target="_blank" rel="noreferrer" className="btn1" >
                  <Card className="contact-card" >   <Image src={process.env.PUBLIC_URL + social.screenshot} className='contact-img img-fluid d-flex flex-wrap justify-content-around cards-image' />
                    <Card.Body className=''>

                      <Card.Subtitle className="mb-2 contact-text">
                        <h4 className='pl-0 text-black'>
                          {social.name}</h4>
                        <span>{social.subtitle}</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </Slider>
          </div>
        </Container>
      </Row> */}


      <Row className='mb-10 mt-5 show-it-315'>
        <Container fluid secondary="true" className="pb-15 p-3 d-flex flex-wrap justify-center  portfolio-cards__container">
          <div className='justify-center '>
              {socialmedia.map((social, id) => (
                <a key={id} href={social.more} target="_blank" rel="noreferrer" className="btn1" >
                  <Card className="contact-card" >   <Image src={process.env.PUBLIC_URL + social.screenshot} className='contact-img img-fluid d-flex flex-wrap justify-content-around cards-image' />
                    <Card.Body className=''>

                      <Card.Subtitle className="mb-2 project-text">
                        <h4 className='pl-0 text-black'>
                          {social.name}</h4>
                        <span>{social.subtitle}</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </a>
              ))}
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

export default Contact