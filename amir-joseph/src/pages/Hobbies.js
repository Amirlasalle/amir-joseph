import { React} from 'react'
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Hobbies = () => {



  return (
    <div className="container header_container justify-center">
      <div className='mt-5 mb-5 pb-5'>
        <h4 className='pl-5 primary-text'>
          See what I Like To Do On My Free
        </h4>
        <h1 className='pl-5'>
          Hobbies
        </h1>

      </div>

      <div className='about__container p-5'>
        <a href="https://www.instagram.com/ichigo23__/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size='lg' />
        </a>

      </div>

      <div className='p-5'>
          <Row className='mt-3'>

            <h4 className="mb-2 pl-5 pr-5 justify-content-center">
              Explore my hobbies get to know who I am outside of my profession
            </h4>
            <p className="mt-1 pl-5 mb-auto pr-5 justify-content-center text-light text-small">
              Currently, there are no available hobbies listed. Please check again later for updates.
            </p>
         
          </Row>   
      </div>


    </div>
  );
};



export default Hobbies