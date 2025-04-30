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
        autoplay: 1, // Set to 1 to autoplay the video
      },
    };

    return (
        <article className="reqsArticle">
            <YouTube className="vibeVideo" videoId={videoId} opts={opts} />
        </article>
    )
}

export default Vibe;