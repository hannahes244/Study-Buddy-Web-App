import React, { useState } from "react";
import "./dashboard.css"
import matchpic from "../../assets/saniyahprofilepic.jpeg"
import no from "../../assets/no.png"
import yes from "../../assets/yes.png"

const DashBoard = () => {
    return (
        <article className="dbContainer">

            {/* <div className="dbFilterContainer">
                <input type="select" name="filter" id="filter"></input>
            </div> */}

            <div className="dbMatchRequestsBox">
                <div className="dbMatchRequests">
                    <div className="dbMatchRequestsExample">
                    Requests Here
                    </div>
                </div>
            </div>

            <div className = "dbMatchBoxBackground">

                <div className="dbMatchBoxContainer">
                    <div className="dbMatchBox">

                        <div className="dbMatchImgBox">
                                <img className ="dbCurrentMatch" src={matchpic} alt="Current Match"></img>
                                <h1 className="dbMatchName">Saniyah</h1>
                                <p className="dbMatchYear">Sophomore</p>
                        </div>

                        <div className="dbMatchInfo">
                            <div className="dbBio">
                                <div className="dbTitle">
                                    About Me
                                </div>

                                <div className="dbBioTitle">
                                    blah blah blah
                                </div>
                            </div>

                            <div className="dbCourses">
                                <div className="dbTitle">
                                    Courses
                                </div>

                                <div className="dbCoursesTitle">
                                    blah blah blah
                                </div>
                            </div>

                            <div className="dbInterests">
                                <div className="dbTitle">
                                    Interests
                                </div>

                                <div className="dbInterestsTitle">
                                    blah blah blah
                                </div>
                            </div>
                        </div>

                        <div className="dbButtons">
                            <img className="dbyesButton" src={yes} alt="Yes Button"></img>
                            <img className="dbnoButton" src={no} alt="No Button"></img>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default DashBoard;
