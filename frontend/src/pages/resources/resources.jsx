import React, { useState } from "react";
import "./resources.css"

const Resources = () => {
    return (
      <article className="resourcesContainer">
        <h2 className="resources-offer-title">Study Resources</h2>
        <div className="resources-offer-contents">
          
          <table>
            <tbody><tr>
                <th>Name </th>
                <th>Link</th>
              </tr>
              <tr>
                <td>Textbooks:</td>
                <td><a href="https://lib.de.us/emedia/?gad_source=1"> Dsu Education</a></td>
              </tr>
              <tr>
                <td>Study Resources:</td>
                <td><a href="https://www.desu.edu/student-life/athletics/academic-services/study-tips-strategies">Dsu Resources</a></td>
              </tr>
              <tr>
                <td>Campus Map:</td>
                <td><a href="https://www.desu.edu/about/location-directions">Campus Map</a></td>
              </tr>
              <tr>
                <td>Discord Study Lounges :</td>
                <td><a href="https://discord.com/app">Discord</a></td>
              </tr>
              <tr>
                <td>Dsu Hub:</td>
                <td><a href="https://www.desu.edu/news/2022/08/university-launches-all-inclusive-campus-app-dsu-hub">  Campus Hub</a></td>
              </tr>
            </tbody>
            </table>
        </div>
      </article>
    )
}

export default Resources;