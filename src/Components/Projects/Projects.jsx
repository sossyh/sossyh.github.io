import React from 'react';
import './projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Projects = () => {
  return (
    <div id="projects" className="mywork">
<div  className="mywork-title">
        <h1>My Projects</h1>
       <img src={theme_pattern} alt="Theme pattern" /> 
        {/* <p>Here are some of the projects I've worked on in the past.</p> */}
      </div>
      <div className="mywork-container">
{mywork_data.map((work, index) => (
  <img key={index} src={work.w_img} alt={work.title} className="mywork-image" />
))}
        </div>
    
    <div className="mywork-showmore">
      <p>Show More</p>
      <img src={arrow_icon} alt="Arrow icon" />
    </div>
    </div>
  );
};

export default Projects;
