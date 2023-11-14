import React from 'react'
import '../App.css'
import '../index.css'
import ME from '../components/assets/Images/picwitcoffee.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faAward, faListCheck  } from '@fortawesome/free-solid-svg-icons';
// import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="home">
          <div className='mt-5 mb-5 pb-5'>
                <h5>
                    Get To Know
                </h5>
                <h2>
                    About Me
                </h2>
            </div>
            <div className='about__container pt-5'>   
           
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='me' className='mt-5' />
                    </div>
                </div>



                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about-card'>
                            <FontAwesomeIcon icon={faAward} className='about-icon' />
                            <h4 className='pl-0'>
                                Experience
                            </h4>
                            <small>
                                4+ Years of Work Experience
                            </small>
                        </article>
                        <article className='about-card'>
                            <FontAwesomeIcon icon={faUsers} className='about-icon' />
                            <h4 className='pl-0'>
                                Clients
                            </h4>
                            <small>
                                +2 Very Satisfied Clients
                            </small>
                        </article>
                        <article className='about-card'>
                            <FontAwesomeIcon icon={faListCheck} className='about-icon' />
                            <h4 className='pl-0'>
                                Projects
                            </h4>
                            <small>
                                30+ Completed Projects
                            </small>
                        </article>
                    </div>


                    <Link to='/contact'>
                        <a href="#contact"className='btn btn-primary'>
                            Lets Talk
                        </a>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default AboutMe 