import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li><Link to="../Footer/about.html">About Us</Link></li>
          <li><a href="../Footer/faq.html">FAQ</a></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="https://github.com/hannahes244/Study-Buddy-Web-App">Source Code</a></li>
          <li><a href="https://github.com/users/hannahes244/projects/1">Product Backlog</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
