import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement form validation here (optional)

    setFormSubmitted(true);

    // Simulate form submission (replace with your actual submission logic)
    setTimeout(() => {
      setFormSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000); // Adjust timeout as needed
  };



  const handleNavigation = (section) => {
    setActiveSection(section);
    // Scroll to the corresponding section smoothly
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  



  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand name1" href="#">
            SasiKumar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="right-nav collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'home' && 'active'}`}
                  onClick={() => handleNavigation('home')}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'about' && 'active'}`}
                  onClick={() => handleNavigation('about')}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'skills' && 'active'}`}
                  onClick={() => handleNavigation('skills')}
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'projects' && 'active'}`}
                  onClick={() => handleNavigation('projects')}
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === 'hireme' && 'active'}`}
                  onClick={() => handleNavigation('hireme')}
                  href="#hireme"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="main">
        <section className="home" id="home">
          <div className='home-container'>

          
        <div className='h-container'>
            <h1 className="animate__animated animate__zoomIn head1">Hello  </h1>
            <h2 className='head2'>I'm a Web <br/> Developer</h2>
            <h3 className='head3'>I build things for web</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sasikumar1301/" className="icon animate__animated animate__pulse">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/sasikumar1301" className="icon animate__animated animate__pulse">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/sasikumar_k_" className="icon animate__animated animate__pulse">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:karikutisasikumar1301@gmail.com" className="icon animate__animated animate__pulse">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            </div> 
            <div className="cardp">
              
                
                <img src ="./images/pic.jpg" className='pic' alt="dp" /> 
            </div>
            </div>
          </section>
        <section className="about" id="about">
        <h1>About Me</h1>
            <p>As A Web Developer, I Am Responsible For Developing Web Pages.
              My Primary Focus Is TO Create Responsive, User-Friendly Experiences That Meet The
              Needs Of A Diverse Online Audience.
            </p>
        </section>
        <section className="skills" id="skills">
          <div className='skill-c'>
            <h1>My Skills</h1>
            <p>Techonologies i've been working with recently</p>
        <div className='s-icons'>
        <img src="./Logos/HTML.png" alt= "html" className='s-icon' />
        <img src="./Logos/css.png" alt= "html" className='s-icon' />
        <img src="./Logos/JS.png" alt= "html" className='s-icon' />
        <img src="./Logos/React.png" alt= "html" className='s-icon' />
        <img src="./Logos/Python.png" alt= "html" className='s-icon' />
        <img src="./Logos/SQL.png" alt= "html" className='s-icon' />
        <img src="./Logos/VScode.png" alt= "html" className='s-icon' />
        </div>
        </div>

        </section>
        <section className="projects" id="projects">
        <h1 className='ph'>Projects</h1>


            <p className='pp'>Some Things I've built so far</p>
      <div className='project-section'>

      <div className="project-card">
      <a href="https://ntap.ccbp.tech/login" className=""><img src={isHovered ? "./images/nxt trenz.gif" : "./images/nxt trenz.gif"}
       className="project-image" alt="Nxt Trenz App" /></a>
      <h1 className="project-title">Nxt Trenz App</h1>
      <a href="https://github.com/sasikumar1301/nxt-trenz-app" className="project-link">
        View Code
        <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </a>
    </div>
  
  

      <div className="project-card">
      <a href="https://rapo.ccbp.tech/" className="project-link"><img src={isHovered ? "./images/appointments.gif" : "./images/appointments.gif"}
       className="project-image" alt="Appointments App" /></a>
      <h1 className="project-title">Appointments App</h1>
      <a href="https://github.com/sasikumar1301/AppointmentsApp" className="project-link">
        View Code
        <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </a>
    </div>

    

      <div className="project-card">
      <a href="https://ap03.ccbp.tech/" className="project-link"><img src={isHovered ? "./images/appstore.gif" : "./images/appstore.gif"}
       className="project-image" alt="App Store" /></a>
      <h1 className="project-title">App Store</h1>
      <a href="https://github.com/sasikumar1301/App-Store" className="project-link">
        View Code
        <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </a>
    </div>
    <div className="project-card">
    <a href="https://rbal.ccbp.tech/" className="project-link">
      <img src={isHovered ? "./images/money manager.gif" : "./images/money manager.gif"}
       className="project-image" alt="Money manager App" /></a>
      <h1 className="project-title">Money manager App</h1>
      <a href="https://github.com/sasikumar1301/Money-Manager" className="project-link">
        View Code
        <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </a>
    </div>
    <div className="project-card">
    <a href="https://rejg.ccbp.tech/" className="project-link"><img src={isHovered ? "./images/emoji game.gif" : "./images/emoji game.gif"}
       className="project-image" alt="Non-Veg Starters" /></a>
      <h1 className="project-title">Emoji Game App</h1>
      <a href="https://github.com/sasikumar1301/emojigame" className="project-link">
        View Code
        <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </a>
    </div>
    </div>
 
    
                
   
        </section>
        <section className="hireme" id="hireme">
        <div className="contact-form-container">
      <div className="left-side">
        <h1>Let's discuss on something <span className='cool'>cool</span> together</h1>
      </div>
      <div className="right-side">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {formSubmitted ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="social-media-icons">
          {/* Add your social media links here (replace with placeholders) */}
          <a href="https://www.instagram.com/sasikumar__k__/" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/sasikumar_k_" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/sasikumar1301/" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

        </section>
      </main>
      <footer className='footer'>
        <h1 className='name1'>SasiKumar</h1>
        <p>Design and Built by <span className='name'>Sasikumar</span> with <span className='love'>love</span> & <span className='coffee'>coffee</span></p>
      </footer>
    </div>
  );
}

export default App;
