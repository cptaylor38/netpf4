import React from 'react';
import { Container, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../../Contact/Contact';

const ContactMobile = () => {
  return (
    <div>
      <Col className='mobileContactContent'>
        <Container fluid='xl socialLinksCont'>
          <a
            href='https://www.facebook.com/cptaylor38/'
            target='_blank'
            rel='noopener noreferrer'
            className='tip'
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </a>
          <a
            href='https://github.com/cptaylor38'
            target='_blank'
            rel='noopener noreferrer'
            className='tip'
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>Github</span>
          </a>
          <a
            href='https://www.linkedin.com/in/corbin-taylor-419a8a188/'
            target='_blank'
            rel='noopener noreferrer'
            className='tip'
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          <a
            href='https://www.instagram.com/cptaylo2/'
            target='_blank'
            rel='noopener noreferrer'
            className='tip'
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </a>
          <a
            href='mailto: cylor.dev@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='tip'
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email Me</span>
          </a>
          <a
            href='https://docs.google.com/document/d/1oPcbN59DI1ZDNFx9t0PCiJnB9MI_5TlFAu0ekCZANuc/export?format=pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='tip'
          >
            <FontAwesomeIcon icon={faFileAlt} />
            <span>My Resume</span>
          </a>
        </Container>
        <ContactForm />
      </Col>
    </div>
  );
};

export default ContactMobile;
