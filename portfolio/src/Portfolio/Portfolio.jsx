import React from 'react';
import PortfolioCard from './PortfolioCard';
import projectData from '../assets/portfolioAssets/projects.json';
import './Portfolio.css';

const Portfolio = ({ isMobile, project }) => {
  return (
    <div>
      {isMobile === false ? (
        <div>
          {projectData.map((project) => {
            return <PortfolioCard project={project} key={project.id} />;
          })}
        </div>
      ) : (
        <div>
          {projectData.map((project) => {
            return <PortfolioCard project={project} key={project.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
