import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Skills.css';

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Responsive Design'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'Authentication'],
    },
    {
      category: 'Tools and Technologies',
      skills: ['Firebase', 'Git', 'REST APIs', 'JWT', 'Axios'],
    },
  ];

  return (
    <section id="skills" className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-intro">
          I've developed a diverse skill set through continuous learning and practical project experience. 
          My expertise spans both frontend and backend technologies, enabling me to build complete, scalable web solutions that deliver real value to users and businesses.
        </p>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category">
              <h3>{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
