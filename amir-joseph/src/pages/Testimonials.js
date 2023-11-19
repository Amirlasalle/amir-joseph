import React, { useState } from 'react';
import '../App.css'
import '../index.css'
import testimonialsData from "../components/Jsons/testimonials.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Card, Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {

  const [testimonials] = useState(testimonialsData);


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
      <div className='mt-5 pb-5'>
        <h4 className='pl-10 primary-text'>
          What Others Have to Say
        </h4>
        <h1 className='pl-10'>
          Testimonials
        </h1>
      </div>


      <Container fluid secondary="true" className="d-flex flex-wrap justify-center mt-10 p-5">

        <div className='header-content pb-2'>

          <h4 id="category-title" className="category-title text-center align-center text-primary">
            Meet My Network
          </h4>
        </div>

        <div className='t-slider w-100 blur mt-15'>
          <Slider {...settings} >
            {testimonials.map((testimonial, id) => (
                <Card key={id}className="testimonial-card" >
                  <Card.Body className=''>
                    <Image src={process.env.PUBLIC_URL + testimonial.avatar} className='avatar'/>
                    <Card.Subtitle className="mb-2 p-1 testimonial-text">
                      <h4 className='pl-0'>
                        {testimonial.name}</h4>
                      <span>{testimonial.review}</span>
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
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

export default Testimonials 