import React from 'react';
import './about.css';


const About = () =>  {
    return (
        <div className="about-us-container">
          <section className="team-section">
            <h2>Our Team</h2>
            <div className="Meet the team">
              <div className="Meet the team">
                <img src="IMG_2928.jpg" alt="Hanna Sanders" />
                <p>Bio:A third-year student passionate about scalable web architecture and backend systems. Enjoys solving complex problems with Django and PostgreSQL while keeping the user in mind..</p>
              </div>
              <div className="team-member">
                <img src="placeholder-image2.jpg" alt="Saniyah budlock" />
                <p>Bio: A driven second-year student who enjoys crafting interactive websites and exploring front-end frameworks like React and Vue. Passionate about making clean, user-friendly interfaces.</p>
              </div>
              <div className="team-member">
                <img src="placeholder-image3.jpg" alt="Jermiyah witehurst" />
                <p>Bio:Enthusiastic about web technologies, especially full-stack development. Loves building web apps from scratch and constantly learning new tools like Node.js and Express.</p>
              </div>
              <div className="team-member">
                <img src="placeholder-image4.jpg" alt="Javon Edmunds" />
                <p>Bio:Focused on the design and performance of modern websites. Passionate about CSS animations, responsive layouts, and improving user experience.</p>
              </div>
            </div>
          </section>
    
          <section className="Problem statement">
            <h2>Probelm statement</h2>
            <p>
            An app that matches students based on similar study goals, learning styles, or course schedules. Users could create profiles with their courses, study preferences, and availability. This app would take the stress out of finding someone who makes studying more productive and enjoyable.
            </p>
            <p>
              Feel free to add more details about your history, values, or any other relevant information.
            </p>
            
            
          </section>
          <section className="User Stories">
            <h2>User Stories</h2>
            <ul style={{ listStyleType: 'square'}}>
              <p>As a new user:</p>
              <li>I can sign up using my email, Google, or social media so that I can quickly access the platform.</li>
              <p>new </p>
              <li>Item 2</li>
              <p>new </p>
              <li>Item 3</li>
              </ul>
            
            
          </section>
          
        </div>
        
        



    



      );
    
}

export default About;