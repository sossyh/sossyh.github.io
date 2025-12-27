import React from 'react';
import './Experience.css';
import experienceData from './data';
import theme_pattern from '../../assets/theme_pattern.svg';


const Experience = () => {
  return (
    <section id="experience" className="experience">
     <div className="about-title">
             <h1>Experience</h1>
             <img src={theme_pattern} alt="" />
           </div>

      <div className="experience-container">
        {experienceData.map((item) => (
          <div key={item.id} className="experience-card">
            <div className="experience-header">
              <h3>{item.role}</h3>
              <span className="experience-period">{item.period}</span>
            </div>

            <p className="experience-company">{item.company}</p>

            <ul className="experience-points">
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
