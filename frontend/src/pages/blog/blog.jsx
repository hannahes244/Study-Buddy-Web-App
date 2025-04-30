import React, { useState } from "react";
import "./blog.css";

const Blog = () => {
  const [showMore, setShowMore] = useState(Array(12).fill(false));

  const handleShowMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  const blogEntries = [
    `Project Initiation:
  In the first week, we were tasked to create a web application that addresses a challenge experienced by a specific group or demographic. When evaluating this task, our first step was to develop our problem statement. During this process, numerous ideas were brought up for our project, such as:
  
  - study buddy application
  - news tracker application
  - group scheduling application
  - homeless shelter locator
  
  These discussions ultimately led us to our final decision: a study buddy web application designed to help Delaware State University students match to enhance their education and studying skills. Overall, this week served as a great introduction, allowing us to break the ice between members and get to know our project scope.`,
  
    `Planning & Ideation:
  This week, our project manager, Jeremiah, helped manage our meetings using LettuceMeet, a scheduling tool. We could all share our schedules and find a comfortable and available meeting time for each member. With the ability to schedule group meetings, we were able to come together and brainstorm additional ideas to refine our future presentation. We further developed our Study Buddy Website by creating initial user stories as a group while Hannah finalized our official problem statement:
  
  "Delaware State University students need a web application that allows them to coordinate with like-minded students to form study groups because they need an easier and more effective method of connecting with each other."
  
  Javon and Saniyah also contributed valuable ideas to enhance our overall project presentation and align it with the rubric given to Group 5. Saniyah proposed the idea of incorporating a leaderboard with challenges and quests to encourage engagement, while Javon suggested implementing restricted access based on a “close friend” feature that would allow users to control their connections within the application. Week 2 provided our group with a significant boost in morale and a clearer understanding of our professor’s expectations for the project.`,
  
    `Role Assignment & Initial Development:
  In the third week, we came together to finalize our tasks for the upcoming week. We also redefined our roles:
  
  - Jeremiah Whitehurst - Backend Developer & Project Manager
  - Hannah Sanders - UI/UX Designer
  - Saniyah Bullock - Frontend Developer
  - Javon Edmunds - Frontend Developer & Documentation
  
  Moving forward as a group, we created our initial ideation board and generated at least 15 to 20 ideas that we wanted to implement into our overall Study Buddy presentation. As Hannah continued working on the sign-in and profile creation, Jeremiah began developing the initial database for our project, while Javon started working on our group blog presentation. Meanwhile, Saniyah focused on expanding our ideation board.`,
  
    `Development Progress:
  In Week Four, we got into our rhythm, assigning a set group meeting time, which would be primarily 4:15 Mondays and Wednesdays. Our sprint this week included:
  
  - Hannah starting the user authentication (sign-up/sign-in)
  - Saniyah starting the navigation bar
  - Jeremiah developing the database
  - Javon starting the study resources page
  
  Overall, this week was very productive, with the group meeting twice and overall having consistent communication throughout Discord and in-person. We established group roles and displayed positive progress toward the final project.`,
  
    `Technology Shift:
  In Week Five, we completed our sprint backlog, where all of our tasks as a group are managed. With this, we moved forward to other tasks, such as Hannah transitioning our code from HTML/CSS to React.js, which would give our overall presentation a smoother look. The group then decided to merge everything into React.js. This week, the group discussed ideas and transferred our JavaScript and HTML codes to the React.js format. The group had a very productive week, with us meeting twice and having a lot of communication in Discord.`,
  
    `React Challenges:
  In Week Six, we struggled with being able to transfer all of our code to React.js due to its differences from JavaScript. With this, we researched and obtained knowledge from Intro to Web Development, which helped us develop a React.js app and properly structure our web application. This week wasn’t as productive due to the struggle with transferring the code, but overall, we still met up twice as planned and had conversations about the project to make sure our final presentation would be up to par.`,
  
    `Creating the User Interface:
  While still in the process of translating everything to React.js, we focused on our tasks. Jeremiah kept working on the backend to make sure everything would run smoothly during integration. As a team, we met up twice to go over future ideas and improvements, and we made sure to stay in sync about our strengths and challenges. After making some solid progress, we reassigned tasks:
  
  - Saniyah started working on the dashboard and homepage
  - Hannah focused on the sign-up/sign-in features
  - Jeremiah continued building out the database for both the front-end and back-end
  - Javon focused on implementing our blog page
  
  Overall, this week was productive and full of momentum.`,
  
    `Integrating our Backend:
  We went full steam ahead toward our final goal this week. We met several times, had a bunch of great discussions, and focused a lot on styling and overall presentation. At this point, everyone had finished converting their parts of the code to React.js, and our professor gave us a crash course to make sure we were on the right track with the database and app flow. Jeremiah continued handling the back-end while Hannah, Javon, and Saniyah put in a lot of work on the front-end. By the end of the week, we had implemented the navigation bar, account settings, database models, migrations, and even our group blog. All of that gave us a big morale boost. This was one of our most successful weeks so far.`,
  
    `Engaging our Study Buddy Users:
  With everyone’s tasks wrapped up, we finally pushed all our changes to GitHub so our scrum master could review everything and make sure we didn’t run into any conflicts. Once that was done, we felt confident in our project’s structure and algorithm. We kept improving the look and feel of the site, adding small but fun features like a confetti animation for friend requests. We also started preparing for the final presentation by designing it to revolve around the site itself. We added the following to our footer:
  
  - Source Code
  - Frequently Asked Questions
  - Product Backlog
  - About Us
  
  These tied our project design and requirements for the course together in one page. This was a really important week for locking everything in.`,
  
    `React Progress & Reassigned Tasks:
  We reassigned tasks based on updated priorities and finalized the HTML-to-React conversion. Saniyah refined the dashboard and homepage, Hannah polished the sign-in and sign-up pages, Jeremiah focused on backend and database logic, and Javon continued to work on integrating the blog page. We met twice this week and continued to collaborate consistently. After a few slower weeks, we regained momentum and made significant progress.`,
  
    `Feature Implementation & Styling:
  This week marked a turning point in the project. We made major progress by completing several key components, including the navigation bar, account settings, database models and migrations, and the group blog. Our professor gave us a crash course on proper app flow, which helped us finalize the front-end and back-end connections. The team felt energized and confident heading into the final stretch of the project.`,
  
    `Final Push & GitHub Integration:
  We pushed all updates to GitHub, resolved merge conflicts, and reviewed the app’s functionality as a team. We began preparing for our final presentation and polished the UI. Final additions to the platform included a confetti animation for friend requests, a source code section, an FAQ page, a product backlog, and an About Us section. Everything began coming together smoothly, and the platform started to look complete and professional.`,
  
    `Final Touches & Team Sync:
  We met both in person and online to test the integration between the front-end and back-end. GitHub syncing worked flawlessly. Dr. Rasamny reviewed our app and confirmed that both the back-end and front-end were correctly implemented. We conducted final tests on authentication, dashboard flows, and navigation. This week felt smooth and fulfilling—it confirmed that all of our hard work throughout the semester was paying off.`,
  
    `Crunch Time & Presentation Completion:
  In our final week, we wrapped up all remaining tasks. Jeremiah finalized backend integrations, Hannah and Saniyah completed the database and gamification features while styling UI elements, and Javon created the slide deck for our final presentation. We met twice and worked individually to finish the product and prepare our demo. The pressure was high, but we pulled together and hit every milestone. The project was completed on time and was ready to present.`
  ];
  

  return (
    <article className="blog-container">
      <h1 className="blog-title">GROUP BLOG</h1>
      <div className="blog-grid">
        {blogEntries.map((text, index) => (
          <div key={index} className="blog-card">
            <h2 className="week-title">Week {index + 1}</h2>
            <div className="blog-content">
              <p className="blog-text">
                {showMore[index] ? text : `${text.slice(0, 150)}...`}
              </p>
              <button 
                className="toggle-btn"
                onClick={() => handleShowMore(index)}
              >
                {showMore[index] ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Blog;