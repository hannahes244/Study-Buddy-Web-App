import React, { useState } from "react";
import "./vibe.css"
import YouTube from 'react-youtube';

const Vibe = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=oGtH8v0qVBc';//'http://www.youtube.com/watch?v=Xs7aWVP1k64'; // Use the URL from the metadata
    const videoId = 'oGtH8v0qVBc'; // Extract the video ID from the URL
  
    const opts = {
      height: '800', // Adjust as needed
      width: '1480',   // Adjust as needed
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1, // Set to 1 to autoplay the video
      },
    };
  
    const onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo(); // Optionally pause the video when it's ready
    }
    
    return (
        <article className="reqsArticle">
            {/* <div>
                <p className="vibeHeading">Pick a vibe...</p>
            </div>
            <div className="vibeChoices">
                <button className="vibeButton">Starlit</button>
                <button className="vibeButton">Cottage</button>
                <button className="vibeButton">Vintage</button>
                <button className="vibeButton">Cafe</button>
                <button className="vibeButton">Library</button>
            </div> */}
            <YouTube className="vibeVideo" videoId={videoId} opts={opts} onReady={onReady} />
        </article>
    )
}

export default Vibe;