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
    "In the first week, we were tasked to create a web application that addresses a challenge experienced by a specific group or demographic. When evaluating this task, our first step was to develop our problem statement. During this process, numerous ideas were brought up for our project, such as a study buddy application, a news tracker application, a group scheduling application, and a homeless shelter locator, among others. These discussions ultimately led us to our final decision: a study buddy web application designed to help Delaware State University students connect to enhance their education and studying skills. Overall, this week served as a great introduction, allowing us to break the ice between members and get to know our project scope.",
    "This week, our project manager, Jeremiah, helped manage our meetings using LettuceMeet, a scheduling tool. We could all share our schedules and find a comfortable and available meeting time for each member. With the ability to schedule group meetings, we were able to come together and brainstorm additional ideas to refine our future presentation. We further developed our Study Buddy Website by creating initial user stories as a group while Hannah finalized our official problem statement: Delaware State University students need a web application that allows them to coordinate with like-minded students to form study groups because they need an easier and more effective method of connecting with each other. Javon and Saniyah also contributed valuable ideas to enhance our overall project presentation and align it with the rubric given to Group 5. Saniyah proposed the idea of incorporating a leaderboard with challenges and quests to encourage engagement, while Javon suggested implementing restricted access based on a “close friend” feature that would allow users to control their connections within the application. Week 2 provided our group with a significant boost in morale and a clearer understanding of our professor’s expectations for the project.",
    "In the third week, we came together to finalize our tasks for the upcoming week. We also redefined our roles: Jeremiah as our Product/Backlog Manager and Hannah, Saniyah, and Javon as Front-End Developers. Moving forward as a group, we created our initial ideation board and generated at least 15 to 20 ideas that we wanted to implement into our overall Study Buddy presentation. As Hannah continued working on the sign-in and profile creation, Jeremiah began developing the initial database for our project, while Javon started working on our group blog presentation. Meanwhile, Saniyah focused on expanding our ideation board.",
    "In Week Four, we got into our rhythm, assigning a set group meeting time, which would be primarily 4:15 Mondays and Wednesdays. Our sprint this week included, Hannah starting the user authentication (sign-up/sign-in), Saniyah starting the navigation bar, Jeremiah developing the database, and Javon creating the study resources page. Overall, this week was very productive, with the group meeting twice and overall having consistent communication throughout Discord and in-person. We established group roles and displayed positive progress toward the final project.",
    "In Week Five, we completed our sprint backlog, where all of our tasks as a group are managed. With this, we moved forward to other tasks, such as Hannah transitioning our code from HTML/CSS to React.js, which would give our overall presentation a smoother look. The group then decided to merge everything into React.js. This week, the group discussed ideas and transferred our JavaScript and HTML codes to the React.js format. The group had a very productive week, with us meeting twice and having a lot of communication in Discord.",
    "In Week Six, we struggled with being able to transfer all of our code to React.js due to its differences from JavaScript. With this, we researched and obtained knowledge from Intro to Web Development, which helped us develop a React.js app and properly structure our web application. This week wasn’t as productive due to the struggle with transferring the code, but overall, we still met up twice as planned and had conversations about the project to make sure our final presentation would be up to par.",
    "While still in the process of translating everything to React.js, we focused on our tasks. Jeremiah kept working on the backend to make sure everything would run smoothly during integration. As a team, we met up twice to go over future ideas and improvements, and we made sure to stay in sync about our strengths and challenges. After making some solid progress, we reassigned tasks: Saniyah started working on the dashboard and homepage, Hannah focused on the sign-up/sign-in features, and Jeremiah continued building out the database for both the front-end and back-end. and Javon focused on implementing our blog page into the project. Overall, this week was productive and full of momentum.",
    "We went full steam ahead toward our final goal this week. We met several times, had a bunch of great discussions, and focused a lot on styling and overall presentation. At this point, everyone had finished converting their parts of the code to React.js, and our professor gave us a crash course to make sure we were on the right track with the database and app flow. Jeremiah continued handling the back-end while Hannah, Javon, and Saniyah put in a lot of work on the front-end. By the end of the week, we had implemented the navigation bar, account settings, database models, migrations, and even our group blog. All of that gave us a big morale boost. This was one of our most successful weeks so far.",
    "With everyone’s tasks wrapped up, we finally pushed all our changes to GitHub so our scrum master could review everything and make sure we didn’t run into any conflicts. Once that was done, we felt confident in our project’s structure and algorithm. We kept improving the look and feel of the site—adding small but fun features like a confetti animation for friend requests. We also started preparing for the final presentation by designing it to revolve around the site itself. We added a source code section, FAQ,  product backlog, and an About Us page to tie everything together. This was a really important week for locking everything in.",
    "By Week 10, we all felt confident about the presentation. We added an About page that described our roles and the journey we took as a group to bring everything together. We met twice—once in person and once online—to make sure everyone’s code and databases were working. GitHub worked perfectly, and everything ran without a hitch. We also met with Dr. Rasamny to double-check that our back-end and front-end were correctly implemented. Overall, this week was laid-back but rewarding. It felt like everything was finally coming together.",
   
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
