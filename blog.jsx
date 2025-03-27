import React, { useState } from "react";
import "./blog.css";

const Blog = () => {
  // Function to toggle showing more or less content
  const [showMore, setShowMore] = useState(Array(12).fill(false)); // Store show more state for each item

  const handleShowMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  // Sample blog entries
  const blogEntries = [
    "In Week 1 of our semester-long group project, we, as Group 5—consisting of Hannah Sanders, Jeremiah Whitehurst, Saniyah Bullock, and Javon Edmunds—came together in our Intro to Web Development class to create a web application that addresses a challenge experienced by a specific group or demographic. When facing this initial challenge, our first task was to create our problem statement. During this process, various ideas were brought up for our project, such as a study buddy application, a news tracker application, a group scheduling application, a homeless shelter locator, and many more. These discussions ultimately led us to our final decision: a study buddies web application designed to help Delaware State University students connect randomly to enhance their education and studying skills while incorporating student administration and additional features. Overall, this week served as a great introduction, allowing us to break the ice and get to know each other as a group.",
    "In Week 2, our project manager, Jeremiah Whitehurst, helped manage our meetings using a web application called Let Us Meet, where we were all able to share our schedules and find a comfortable and available meeting time for each individual member. With this tool, we were able to come together and brainstorm additional ideas to refine our future presentation. We further developed our Study Buddy web application by creating initial user stories as a group, while Hannah Sanders finalized our official problem statement: Delaware State University students need a web application that allows them to coordinate with like-minded students to form study groups because they need an easier and more effective method of connecting with each other. Team members Javon Edmunds and Saniyah Bullock also contributed valuable ideas to enhance our overall project presentation and align it with the rubric given to Group 5. Saniyah proposed the idea of incorporating a leaderboard with challenges and quests to encourage engagement, while Javon suggested implementing restricted access based on a “close friend” feature that would allow users to control their connections within the application. Week 2 provided our group with a significant boost in morale and a clearer understanding of our professor’s expectations for the project.",
    "In Week 3, Group 5 came together to finalize our roles for the upcoming week. Our project manager remained Jeremiah Whitehurst, with Hannah Sanders as our designer, Javon Edmunds as our blogger, and Saniyah Bullock as a contributing team member. Moving forward as a group, we created our initial ideation board and generated at least 15 to 20 ideas that we wanted to implement into our overall Study Buddy presentation. As Hannah continued working on the sign-in and profile creation, Jeremiah began developing the initial database for our project, while Javon started working on our group blog presentation. Meanwhile, Saniyah focused on expanding our ideation board, further advancing our project’s progress.",
    "In Week 4, we got into our rhythm assigning a set group meeting time where we all came together and talked about what we did the week prior, and this week we backlog where Hannah started the user authentication, Saniyah started the navigation bar, Jeremiah did the database modeling, and Javon did the study resources. This week was very productive with the group meeting twice and overall a lot of communication throughout Discord and in-person. Group roles were dished out, but everyone played a major part in continuing the group project, furthering our basement for our final presentation.",
    "Week 5, we completed our sprint backlog where all of our tasks as a group were completed, and with this, we were able to move forward to other tasks. Such as Hannah drafting the initial idea to move our code from JavaScript to React, which would give our overall presentation a better, smoother look, and with that, the group decided to change everything to React to help our final presentation look more professional. The group took the week to understand and transfer our JavaScript and HTML codes to React's template. This group was also very productive with us meeting twice and having a lot of communication in Discord.",
    "In week 6, we struggled with being able to transfer all of our code to React due to its uniqueness being vastly different from our JavaScript code. Our professor decided to give us a class to help better our knowledge on React, and with this, we were able to transfer more code to React’s template and continue to move forward as a group. This week wasn’t as productive as the other weeks due to the struggle with transferring the code, but overall we still met up twice and had conversations pertaining to the project to make sure our final presentation would be up to par.",
    "Box 7 Info",
    "Box 8 Info",
    "Box 9 Info",
    "Box 10 Info",
    "Box 11 Info",
    "Box 12 Info"
  ];

  return (
    <article>
      <h1>GROUP BLOG</h1>
      <div className="flex-container">
        {blogEntries.map((text, index) => (
          <div key={index} className="flex-item">
            <h2>Week {index + 1}</h2> {/* Header showing Week number */}
            <p className="blogtextinfo">
              {showMore[index] ? text : text.slice(0, 150) + "..."}{" "}
              <button onClick={() => handleShowMore(index)}>
                {showMore[index] ? "Show less" : "Show more"}
              </button>
            </p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Blog;
