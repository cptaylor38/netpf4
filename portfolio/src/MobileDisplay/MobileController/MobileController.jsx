import React, { useState } from 'react';
import About from '../About/AboutMobile';
import Contact from '../Contact/ContactMobile';
import Portfolio from '../../Portfolio/Portfolio';
import { Button, Container, Row } from 'reactstrap';
import './MobileController.css';

const MobileController = () => {
  const [navState, setNavState] = useState('About');

  const navSwitch = () => {
    switch (navState) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio isMobile={true} />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <Container fluid='xl mobileContainer'>
      <Row xs='12' id='mobileNav'>
        <Button className='navBtn' onClick={() => setNavState('About')}>
          About
        </Button>
        <Button className='navBtn' onClick={() => setNavState('Portfolio')}>
          Portfolio
        </Button>
        <Button className='navBtn' onClick={() => setNavState('Contact')}>
          Contact
        </Button>
      </Row>
      <Row xl='12'>
        <Container fluid='xl mobileContent'>{navSwitch()}</Container>
      </Row>
    </Container>
  );
};

export default MobileController;
