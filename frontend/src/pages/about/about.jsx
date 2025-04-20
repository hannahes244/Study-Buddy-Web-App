import React, { useState } from "react";
import "./about.css";
import saniyah from "../../assets/saniyahprofilepic.jpeg";
import hannah from "../../assets/hannahpfp.jpg";
import jeremiah from "../../assets/jeremiah_whitehurst-headshot.jpg";
import javon from "../../assets/javonpfp.jpeg";
import { motion } from "framer-motion";
import linkedinIcon from "../../assets/linkedin-icon.jpeg";
import githubIcon from "../../assets/github-icon.jpeg";

const About = () => {
  const [members] = useState([
    {
      name: "Jeremiah Whitehurst",
      role: "Backend Developer",
      bio: "Jeremiah is a Sophomore, majoring in Computer Science, from the first state, Delaware.",
      picture: jeremiah,
      color: "#4f46e5",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/jeremiahwhitehurst/",
        github: "https://github.com/Jeremiah-A-WV"      }
    },
    {
      name: "Hannah Sanders",
      role: "UI/UX Specialist",
      bio: "Hannah is a Sophomore, majoring in Computer Science, hailing from the Peach State, Georgia.",
      picture: hannah,
      color: "#ec4899",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/hannah-sanders-31b289230/",
        github: "https://github.com/hannahes244"      }
    },
    {
      name: "Saniyah Bullock",
      role: "UI/UX Specialist",
      bio: "Saniyah is a Sophomore, majoring in Computer Science, hailing from the Garden State, New Jersey.",
      picture: saniyah,
      color: "#10b981",
      socialLinks: {
        linkedin: "https://linkedin.com/in/sbullock23",
        github: "https://github.com/slbullock23"      }
    },
    {
      name: "Javon Edmunds",
      role: "Frontend Developer",
      bio: "Javon is a Sophomore, majoring in Computer Science, from Philadelphia, Pennsylvania.",
      picture: javon,
      color: "#f59e0b",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/javon-edmunds-017ab2279/",
        github: "https://github.com/Justjavon2"      }
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const memberVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="developers-section"> {/* New wrapper div */}
        <motion.h1 
          className="page-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="highlight">Meet The Developers</span>
        </motion.h1>
        
        <p className="page-subtitle">The Creative Minds behind Study Buddy!</p>
        
        <motion.div className="team-members">
          {members.map((member, index) => (
            <motion.div 
              key={index} 
              className="team-member"
              variants={memberVariants}
              whileHover={{ y: -5 }}
            >
            <div 
              className="member-picture-container"
              style={{ borderColor: member.color }}
            >
              <img 
                src={member.picture} 
                alt={`${member.name}'s picture`} 
                className="member-picture" 
              />
              <div 
                className="role-badge"
                style={{ backgroundColor: member.color }}
              >
                {member.role}
              </div>
            </div>
            <div className="member-info">
              <h2 className="member-name" style={{ color: member.color }}>
                {member.name}
              </h2>
              <p className="member-bio">{member.bio}</p>
              <div className="social-links">
          <a 
            href={member.socialLinks.linkedin} 
              className="social-icon" 
              aria-label={`${member.name} LinkedIn`}
              target="_blank"
              rel="noopener noreferrer">

            <img src={linkedinIcon} alt="LinkedIn" className="social-img" />
            </a>
            <a href={member.socialLinks.github} 
              className="social-icon" 
              aria-label={`${member.name} GitHub`}
              target="_blank"
              rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-img" />
            </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </motion.div>
  );
};

export default About;