import { React, useState, useRef, useEffect } from 'react'
import emailjs from 'emailjs-com'
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

  const form = useRef();



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



  const sendEmailAndSubmit = async (e) => {
    e.preventDefault();

    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setStatus({ success: false, message: 'Please fill in all required fields.' });
      return;
    }

    setButtonText('Sending...');

    try {
      await emailjs.sendForm('service_3zrel1a', 'template_9cxik6p', form.current, 'paM4quWISkiQCnu1j');


      e.target.reset();
      setFormDetails(formInitialDetails);

      setButtonText('Send');
      setStatus({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error:', error);
      setButtonText('Send');
      setStatus({ success: false, message: 'An error occurred while sending the message.' });
    }
  };


  const clearStatus = () => {
    setStatus({});
  };

  useEffect(() => {
    const timer = setTimeout(clearStatus, 5000);
    return () => clearTimeout(timer);
  }, [status]);


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

  const [hoveredIndex, setHoveredIndex] = useState(null);

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


      <Row className='m-10 show-it-1024'>
        <Container fluid secondary="true" className=" justify-around d-flex flex-wrap w-100 blur">
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
        <Row className='m-10 mb-25 hide-it-1024'>
          <Container fluid secondary="true" className=" justify-around d-flex flex-wrap w-100 mb-20">
            <div className="card-circle-container">
              {socialmedia.map((social, id) => (
                <div className='a'>
                  <a key={id} href={social.more}
                    target="_blank"
                    rel="noreferrer"
                    className="btn1"
                    onMouseEnter={() => setHoveredIndex(id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="card-circles">
                      <Image
                        src={process.env.PUBLIC_URL + social.screenshot}
                        className='circles-image'
                        alt={`Social Media Icon ${id}`} />
                    </div>
                  </a>

                  <div className={`contact-text-card ${hoveredIndex === id ? 'show' : ''}`}>
                    <div className="contact-text-card-text">
                      <h4 className='pl-0 text-black'>
                        {social.name}</h4>
                      <p>{social.subtitle}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </Container>
        </Row>


        <Container fluid secondary="true" className="p-3 mb-25 justify-around form-container">
          <h3 className='text-center text-primary'>
            Reach Out to Me Directly!
          </h3>

          {status.success &&
            <p className='text-center' style={{ color: 'white' }}>
              {status.message}
            </p>
          }
          {!status.success &&
            status.message &&
            <p className='text-center' style={{ color: 'red' }}>
              {status.message}
            </p>
          }


          <div className='div-form px-3 py-1'>
            <form
              ref={form}
              onSubmit={sendEmailAndSubmit}
            >
              <Row>
                <Col sm={6} className='px-1 py-1'>
                  <input
                    type="text" name="user_name"
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
                    type="email" name="user_email"
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
                <Button type="submit" value="Send"
                  className='btn-block btn8 btn-bg px-1 py-1'>
                  <span>{buttonText}</span>
                </Button>
              </Row>


            </form>
          </div>
        </Container>
      </div>


      <Row className='mb-10 mt-5 show-it-315'>
        <Container fluid secondary="true" className="pb-15 p-3 d-flex flex-wrap justify-center  portfolio-cards__container">
          <div className='justify-center '>
            {socialmedia.map((social, id) => (
              <a key={id}
                href={social.more}
                target="_blank"
                rel="noreferrer"
                className="btn1">
                <Card className="contact-card" >
                  <Image src={process.env.PUBLIC_URL + social.screenshot}
                    className='contact-img img-fluid d-flex flex-wrap justify-content-around cards-image'
                  />
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