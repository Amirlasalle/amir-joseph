import React, { useState, useEffect } from 'react';
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

  // var dnone = window.matchMedia("(max-width: 650px)")
  // myFunction(dnone) 
  // dnone.addListener(myFunction)
  // function myFunction(tprops) {
  //   if (tprops.matches) {
  //     document.body.style.display = "none";
  //   } else {
  //     document.body.style.display = "block";
  //   }
  // }

  useEffect(() => {
    const handleResize = () => {
      const nextArrow = document.querySelector('.t-slider_arrow-next');
      const prevArrow = document.querySelector('.t-slider_arrow-prev');

      if (window.innerWidth <= 650) {
        nextArrow.style.display = 'none';
        prevArrow.style.display = 'none';
      } else {
        nextArrow.style.display = 'block';
        prevArrow.style.display = 'block';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dotsClass: "button__bar",
    nextArrow: <TeNextArrow />,
    prevArrow: <TePrevArrow />
  };

  return (
    <div className="home mb-25 justify-center">
      <div className='mt-5 pb-5'>
        <h4 className='primary-text text-center'>
          What Others Have to Say
        </h4>
        <h1 className='text-center'>
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
                  <Card.Body className='pl-0'>
                    <Image src={process.env.PUBLIC_URL + testimonial.avatar} className='avatar'/>
                    <Card.Subtitle className="mb-2 p-2 testimonial-text">
                      <h4 className='pl-0'>
                        {testimonial.name}</h4>
                      <span className='pl-0'>{testimonial.review}</span> 
                      <br></br>
                      <span className='pl-0'>{testimonial.more}</span>
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

function TeNextArrow(tprops) {
  const { className, style, onClick } = tprops;
  return (
    <FontAwesomeIcon icon={faChevronCircleRight} size="lg"
      className={`t-slider_arrow-next ${className}`}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function TePrevArrow(tprops) {
  const { className, style, onClick } = tprops;
  return (
    <FontAwesomeIcon icon={faChevronCircleLeft} size="lg"
      className={`t-slider_arrow-prev ${className}`}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );

  

};

export default Testimonials 