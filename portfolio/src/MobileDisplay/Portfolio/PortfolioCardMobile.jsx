import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const PortfolioCardMobile = ({ project }) => {
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
        <Container>
          <Row>
            <Col>
              <Container>
                <Row>
                  <Container>
                    <img
                      src={require(`../../assets/portfolioAssets/projectImages/${hoveredImage}`)}
                      alt={project.title}
                    ></img>
                  </Container>
                </Row>
                <Row>
                  {project.images.map((image, index) => (
                    <Container key={'subImgCont' + index}>
                      <img
                        src={require(`../../assets/portfolioAssets/projectImages/${image}`)}
                        alt={project.title}
                        onMouseEnter={() => imageControl(image)}
                        key={`subImg${index}`}
                      ></img>
                    </Container>
                  ))}
                </Row>
              </Container>
            </Col>
            <Col>
              <Row>
                <Container>
                  <Row>
                    <h4>{project.title}</h4>
                    <p>{project.body}</p>
                  </Row>
                  <Row>
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

export default PortfolioCardMobile;
