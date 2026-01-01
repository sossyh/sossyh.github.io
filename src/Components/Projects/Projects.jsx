import React from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import projectsData from './data.jsx';

const Projects = () => {
  return (
    <div id="projects" className="mywork">

      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>

      <div className="mywork-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h2>{project.title}</h2>
              <span className="project-duration">{project.duration}</span>

              <ul>
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live
                <img src={arrow_icon} alt="arrow" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;
