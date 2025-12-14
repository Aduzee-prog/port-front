import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Experience.css';

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="experience" className={`experience ${darkMode ? 'dark' : 'light'}`}>
      <div className="experience-container">
        <h2 className="section-title">My Journey in Tech</h2>
        
        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Started Tech Journey</h3>
              <p className="timeline-date">Last Year</p>
              <p className="timeline-description">
                Began my exploration into web development with initial learning and experimentation. 
                During this period, I balanced my growth with my national service year, which limited my consistency.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Intensive Learning & Growth</h3>
              <p className="timeline-date">Beginning of This Year - Present</p>
              <p className="timeline-description">
                Transitioned to consistent, focused learning and skill development. Completed comprehensive training at SQI College of ICT, 
                where I acquired expertise in multiple technologies and best practices.
              </p>
            </div>
          </div>

          <div className="timeline-item full-width">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">SQI College of ICT - My Learning Foundation</h3>
              <p className="timeline-date">Comprehensive Training Program</p>
              
              <div className="school-details">
                <p className="school-intro">
                  At SQI College of ICT, I received professional training that significantly impacted my career trajectory. 
                  The institution provided me with a strong foundation in web development and modern technologies.
                </p>

                <div className="key-highlights">
                  <h4>Key Skills & Highlights:</h4>
                  <ul>
                    <li><strong>Frontend Development:</strong> Mastered HTML5, CSS3, and Bootstrap for creating responsive, 
                    professional web interfaces with semantic structure and modern design principles.</li>
                    
                    <li><strong>JavaScript Proficiency:</strong> Gained deep understanding of core JavaScript concepts, 
                    ES6+ features, asynchronous programming, and DOM manipulation for dynamic user interactions.</li>
                    
                    <li><strong>React Framework:</strong> Learned component-based architecture, state management, hooks, 
                    and best practices for building scalable, maintainable applications.</li>
                    
                    <li><strong>Backend Development:</strong> Acquired skills in Node.js and Express.js for building robust server-side applications, 
                    API design, and middleware implementation.</li>
                    
                    <li><strong>Database Management:</strong> Studied MongoDB and database design principles for efficient data storage and retrieval. 
                    Learned Mongoose for object modeling and schema validation.</li>
                    
                    <li><strong>Full-Stack Integration:</strong> Developed the ability to build complete web applications from database to user interface, 
                    implementing authentication, validation, and error handling.</li>
                    
                    <li><strong>Modern Development Practices:</strong> Learned Git version control, API testing, debugging techniques, 
                    and software development best practices for professional environments.</li>
                  </ul>
                </div>

                <p className="school-impact">
                  <strong>The Impact:</strong> SQI College of ICT transformed my approach to web development. 
                  Beyond technical skills, the institution taught me problem-solving methodologies, how to architect scalable solutions, 
                  and the importance of continuous learning in tech. The structured curriculum, hands-on projects, and mentorship 
                  accelerated my growth exponentially and prepared me to build real-world applications that solve meaningful problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
