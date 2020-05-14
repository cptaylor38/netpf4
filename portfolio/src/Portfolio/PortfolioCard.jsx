import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const PortfolioCard = ({ project }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    setHoveredImage(`${project.images[0]}`);
  }, [project]);

  const imageControl = (img) => {
    setHoveredImage(img.toString());
  };

  return (
    <div>
      {project && hoveredImage ? (
        <Container fluid='xl portfolioFullCont'>
          <Row id='portfolioTopR'>
            <Col xl='6' className='pTopCol'>
              <Container fluid='xl pTopLImgs'>
                <Row>
                  <Container id='focusedImgCont'>
                    <img
                      src={require(`../assets/portfolioAssets/projectImages/${hoveredImage}`)}
                      alt={project.title}
                      className='portImgMain'
                    ></img>
                  </Container>
                </Row>
                <Row id='subImgSelectRow'>
                  {project.images.map((image, index) => (
                    <Container
                      className='subImgCont'
                      key={'subImgCont' + index}
                    >
                      <img
                        src={require(`../assets/portfolioAssets/projectImages/${image}`)}
                        alt={project.title}
                        onMouseEnter={() => imageControl(image)}
                        className='portImgSub'
                        key={`subImg${index}`}
                      ></img>
                    </Container>
                  ))}
                </Row>
              </Container>
            </Col>
            <Col xl='6' className='pTopCol'>
              <Row id='descriptionRow'>
                <Container>
                  <Row>
                    <h4>{project.title}</h4>
                    <p>{project.body}</p>
                  </Row>
                  <Row id='linksRow'>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Repo
                    </a>
                    <a
                      href={project.deployedLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Live
                    </a>
                  </Row>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default PortfolioCard;
