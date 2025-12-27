import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/sosna-modified.png';

const About = () => {
  return (
    <div id="about" className="about">

      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" style={{ width: '75%', height: 'auto' }} />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Sosna, a passionate software developer with a knack for creating
              dynamic and user-friendly web applications.
            </p>
            <p>
              My journey in software development began several years ago, and since then,
              I've honed my skills in various programming languages and frameworks.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <h3>Technical Skills</h3>

              <div className="skill-item">
                <span className="skill-title">Programming Languages:</span>
                <span className="skill-content">
                  Python, C#, Java, JavaScript, TypeScript, SQL, NoSQL
                </span>
              </div>

              <div className="skill-item">
                <span className="skill-title">Backend:</span>
                <span className="skill-content">
                  ASP.NET Core, Node.js, Express.js, FastAPI, PostgreSQL, MySQL, MongoDB
                </span>
              </div>

              <div className="skill-item">
                <span className="skill-title">Frontend:</span>
                <span className="skill-content">
                  React.js, Next.js, Tailwind CSS, HTML, CSS
                </span>
              </div>

              <div className="skill-item">
                <span className="skill-title">Machine Learning:</span>
                <span className="skill-content">
                  PyTorch, TensorFlow, OpenCV, Deep Learning
                </span>
              </div>

              <div className="skill-item">
                <span className="skill-title">Tools & Platforms:</span>
                <span className="skill-content">
                  Git, GitHub, Linux, Jira, GitHub Actions (CI/CD), SDLC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>90+</h1>
          <p>Students Mentored</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years Experience</p>
        </div>
      </div>

    </div>
  );
};

export default About;
