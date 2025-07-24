import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="App-header" id="home">
        <div className="hero-content">
          <h1>ARAVIND REDDY K N</h1>
          <p className="title">Supplier Master Data Analyst at Baker Hughes | AI/ML Engineer</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aravind-reddy-k-n-471162344/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:aranarayanareddy@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </div>
      </header>

      <div className="App-content">
        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Data Analytics professional with expertise in Master Data Management, ETL processes, and AI/ML technologies. 
                 Skilled in HICX, Informatica, and various data management tools. Passionate about implementing data-driven solutions 
                 and process automation.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Professional Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3>Supplier Master Data Analyst</h3>
              <h4>Baker Hughes</h4>
              <p className="duration">July 2025 - Present</p>
              <ul>
                <li>Managing supplier master data using HICX platform</li>
                <li>Implementing data quality and governance processes</li>
                <li>Working with Informatica CDI, CAI, and S360</li>
                <li>Data integration and process automation</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Digital Technology Intern</h3>
              <h4>Baker Hughes</h4>
              <p className="duration">January 2025 - June 2025</p>
              <ul>
                <li>Managing supplier master data using HICX platform</li>
                <li>Implementing ETL processes with Informatica CDI/CAI</li>
                <li>Developing automation solutions using Power Platform</li>
                <li>Supporting data quality and governance initiatives</li>
                <li>Collaborating with global teams on digital transformation projects</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Machine Learning Intern</h3>
              <h4>Vercos Technologies</h4>
              <p className="duration">2023</p>
              <ul>
                <li>Implemented ML algorithms using Python</li>
                <li>Worked on data analysis projects</li>
                <li>Developed predictive models</li>
                <li>Applied AI/ML concepts to real-world problems</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Data Management</h3>
              <ul>
                <li>HICX Platform</li>
                <li>Informatica CDI/CAI/S360</li>
                <li>SQL</li>
                <li>Master Data Management</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Programming</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>Servlets & JDBC</li>
                <li>HTML/CSS/JavaScript</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Power Apps</li>
                <li>Power Automate</li>
                <li>Postman</li>
                <li>XQuery/XPath</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            <div className="cert-card">
              <h3>Power Platform Certifications</h3>
              <ul>
                <li>Power Apps (Basic & Advanced)</li>
                <li>Power Automate (Basic & Advanced)</li>
              </ul>
            </div>
            <div className="cert-card">
              <h3>Technical Certifications</h3>
              <ul>
                <li>Informatica IICS</li>
                <li>Postman API Testing</li>
                <li>XQuery and XPath</li>
                <li>CI/CD Fundamentals</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-card">
            <h3>Bachelor of Engineering in AI & ML</h3>
            <p>SEA College of Engineering Technology, VTU</p>
            <p>2020 - 2024</p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <div className="contact-content">
            
            <p>Location: Bangalore, Karnataka, India</p>
          </div>
        </section>
        <div className="contact-section">
          <div className="contact-content">
            <h2>Contact Me</h2>
            <a href="mailto:aranarayanareddy@gmail.com" className="email-link">
              <i className="fas fa-envelope"></i>
              aranarayanareddy@gmail.com
            </a>
          </div>
        </div>
      </div>

      <footer className="App-footer">
        <p>© 2025 Aravind Reddy K N. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
