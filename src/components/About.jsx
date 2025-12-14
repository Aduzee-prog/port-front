import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './About.css';

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="about" className={`about ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-intro">
          Technology has always fascinated me and inspired my journey into web development.
          I'm driven by the challenge of creating innovative solutions that make a real impact.
        </p>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a keen interest in building scalable, user-friendly web applications.
              With expertise in both frontend and backend technologies, I bring ideas to life with clean, efficient code.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work on the internet,
              and it has evolved into a professional pursuit of creating amazing digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge with the developer community.
            </p>
            <div className="about-attributes">
              <div className="attribute-btn problem-solver">Problem Solver</div>
              <div className="attribute-btn team-player">Team Player</div>
              <div className="attribute-btn continuous-learner">Continuous Learner</div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>8+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat">
              <h3>85%</h3>
              <p>Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
