import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Social</h3>
            <ul>
              <li><a href="https://github.com/WAVY91" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/tomisin-samuel" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li><a href="mailto:timetomisin@gmail.com">Email: timetomisin@gmail.com</a></li>
              <li><a href="tel:+2347039692720">Phone: +234 7039692720</a></li>
              <li>📍 Location: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Ajakaiye Oluwatomisin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
