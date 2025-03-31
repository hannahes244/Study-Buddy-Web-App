import React, { useState } from "react";
import "./dashboard.css"
import MatchList from "../../components/matchcard/matchlist";


const DashBoard = () => {

    const courseList = ["Math", "Science", "History1"]
    const interestsList = ["Crochet", "Puzzles", "Baking", "Legos", "Money", "Volleyball"]


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
                    <MatchList />
                </div>
            </div>
        </article>
    )
}

export default DashBoard;
