import React, { useState } from 'react';
import { motion } from "framer-motion";
import './faq.css';

const faqData = [
  {
    question: 'What is Study Buddy?',
    answer: 'Study Buddy is a web application designed to connect Delaware State University students with study partners, enhancing collaborative learning and academic success through shared knowledge and resources.'
  },
  {
    question: 'How do I find a study partner?',
    answer: 'You can search for study partners by navigating to the "Find Matches" section. Filter by courses, study preferences and availability to find the perfect match for your study needs.'
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Currently, Study Buddy is optimized for web browsers on all devices. We are actively developing a mobile application that will be available on iOS and Android in the near future. Stay tuned for updates!'
  },
  {
    question: 'Is Study Buddy free to use?',
    answer: 'Yes! Study Buddy is completely free for all Delaware State University students. We believe in accessible education and collaborative learning without financial barriers.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-title">
        <motion.h1 
          className="faq-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="highlight">Frequently Asked Questions</span>
        </motion.h1>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
            </button>
            <div 
              id={`faq-answer-${index}`}
              className={`faq-answer ${openIndex === index ? 'active' : ''}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-submit-box">
        <h3 className="faq-submit-title">💬 Leave Us a Question</h3>
        <form 
          action="https://formspree.io/f/mwpovryb" 
          method="POST" 
          className="faq-form"
        >
          <label htmlFor="user-question" className="faq-label">Your Question:</label>
          <textarea 
            id="user-question" 
            name="question" 
            rows="4" 
            required 
            placeholder="Type your question here..."
          ></textarea>
          <button type="submit" className="faq-submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Faq;
