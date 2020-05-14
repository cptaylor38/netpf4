import React from 'react';
import './landing.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Portfolio from '../Portfolio/Portfolio';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Contact from '../Contact/Contact';
import MobileController from '../MobileDisplay/MobileController/MobileController';
const svgselfie = require('../assets/images/selfietestimg4.svg');

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };

    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.updateView();
    window.addEventListener('resize', this.updateView);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateView);
  }

  updateView() {
    this.setState({ isDesktop: window.innerWidth > 1024 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div>
        {isDesktop ? (
          <Row xl='12' id='fullPageDt'>
            <Col xl='3' lg='4' id='bcSection'>
              <Container id='bcContent'>
                <Row className='bioR'>
                  <Container className='socialLinksCont'>
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
                    <a href='mailto: cylor.dev@gmail.com' className='tip'>
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
                </Row>
                <Row className='bioR' id='picRow'>
                  <Container id='picCont'>
                    <img src={svgselfie} alt='selfie' id='selfie'></img>
                  </Container>
                </Row>
                <Row className='bioR'>
                  <Container id='bioCont'>
                    <p className='bioSummary'>
                      Hello, my name is Corbin. From an early age, creating has
                      always been a passion and outlet. Whether it was creating
                      clay replicas of video game characters, painting and
                      building props as promotional material at my local movie
                      theater, or sketching a passing thought, creativity has
                      always helped bring out the best in me.
                    </p>
                    <p className='bioSummary'>
                      I obtained an Associates in Simulation and Game Design
                      that inspired interest in a new kind of medium,
                      programming and software development. I decied to pursue
                      my curiousity further and found a program at a local
                      university focusing on full stack development that showed
                      me a new way to be creative. A creative outlet that can be
                      practical and impactful.
                    </p>
                  </Container>
                </Row>
                <Row className='bioR'>
                  <Container className='contactCont'>
                    <Contact />
                  </Container>
                </Row>
              </Container>
            </Col>
            <Col xl='9' lg='8' id='pSection'>
              <Portfolio isMobile={false} />
            </Col>
          </Row>
        ) : (
          <MobileController />
        )}
      </div>
    );
  }
}

export default Welcome;
