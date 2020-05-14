import React from 'react';
import { Container } from 'reactstrap';
const svgSelfie = require('../../assets/images/selfietestimg4.svg');

const AboutMobile = () => {
  return (
    <div>
      <Container fluid='xl mobileAbout'>
        <Container className='mobileBackground'>
          <img src={svgSelfie} alt='selfie' id='mobileSelfie'></img>
        </Container>
        <Container id='mobileBio'>
          <p className='mobileBioP'>
            Hello, my name is Corbin. From an early age, creating has always
            been a passion and outlet. Whether it was creating clay replicas of
            video game characters, painting and building props as promotional
            material at my local movie theater, or sketching a passing thought,
            creativity has always helped bring out the best in me. I obtained an
            Associates in Simulation and Game Design that inspired interest in a
            new kind of medium, programming and software development. I decied
            to pursue my curiousity further and found a program at a local
            university focusing on full stack development that showed me a new
            way to be creative. A creative outlet that can be practical and
            impactful.
          </p>
        </Container>
      </Container>
    </div>
  );
};

export default AboutMobile;
