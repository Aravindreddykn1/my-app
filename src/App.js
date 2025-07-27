import React from "react";
import "./App.css";
import profileImage from "./images/image.png"

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="App-nav">
        <ul style={{ listStyle: "none" }}>
          <li className="active"><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="App-header" id="home">
        <div className="hero-content">
          <img src={profileImage} alt="Aravind Reddy K N" className="profile-image" />
          <h1 className="name">Aravind Reddy K N</h1>
          <p className="role">Supplier Master Data Analyst @ Baker Hughes | AI/ML Engineer</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aravind-reddy-k-n-471162344/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:aranarayanareddy@gmail.com">Email</a>
          </div>
        </div>
      </header>

      <main className="App-content">
        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Data Analytics professional with expertise in Master Data Management, ETL, and AI/ML.
            Experienced in HICX, Informatica, and automation tools. Passionate about building scalable,
            data-driven solutions with strong governance and quality processes.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3>Supplier Master Data Analyst</h3>
              <span className="company">Baker Hughes</span>
              <span className="duration">Jul 2025 – Present</span>
              <ul className="experience-list">
                <li>Manage supplier master data using HICX.</li>
                <li>Implement data governance & quality frameworks.</li>
                <li>Data integration using Informatica CDI, CAI & S360.</li>
                <li>Automation of manual workflows.</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Digital Technology Intern</h3>
              <span className="company">Baker Hughes</span>
              <span className="duration">Jan 2025 – Jun 2025</span>
              <ul>
                <li>Built automation solutions using Power Platform.</li>
                <li>Supported ETL processes with Informatica.</li>
                <li>Worked on global digital transformation initiatives.</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Machine Learning Intern</h3>
              <span className="company">Vercos Technologies</span>
              <span className="duration">2023</span>
              <ul>
                <li>Implemented ML models using Python.</li>
                <li>Developed predictive analytics solutions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>
              <h3>Data Management</h3>
              <p>HICX, Informatica CDI/CAI/S360, SQL, MDM</p>
            </div>
            <div>
              <h3>Programming</h3>
              <p>Python, Java, Servlets/JDBC, HTML/CSS/JS</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>Power Apps, Power Automate, Postman, CI/CD, XQuery/XPath</p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section" >
          <h2>Certifications</h2>
          <ul className="certifications1">
            <li>Power Apps & Power Automate (Advanced)</li>
            <li>Informatica IICS</li>
            <li>Postman API Testing</li>
            <li>XQuery / XPath</li>
            <li>CI/CD Fundamentals</li>
          </ul>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <h2>Education</h2>
          <p><strong>B.E. in AI & ML</strong>, SEA College of Engineering Technology (VTU), 2020 – 2024</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Bangalore, Karnataka, India</p>
          <a href="mailto:aranarayanareddy@gmail.com" className="email-link">
            aranarayanareddy@gmail.com
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Aravind Reddy K N</p>
      </footer>
    </div>
  );
}

export default App;
