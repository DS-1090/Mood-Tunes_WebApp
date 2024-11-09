import "./mt_style.css";
import React from 'react';

function AboutPage() {
  return (
    <div className="a" id="about">
      <br></br>
      <br></br>
      <h2>About</h2>
      <br></br><br></br>
      <div className="about" id="about">

      <div className="boxes">
        <div className="one">
        <strong>Tech Stack:</strong><br></br><br></br>
       
         Welcome to our web application crafted with React.js, a powerful JavaScript library utilizing JSX (JavaScript XML).<br></br>
 
          </div>
        <div className="two">
          <strong>Artist and Song Search:</strong> <br></br><br></br> Easily find songs and Explore the top 5 hits of your selected artist, featuring their duration and genre. 
        <br></br>
         </div>
        <div className="three">
          <strong>Spotify Integration:</strong><br></br> <br></br>With a single click, listen to your selected song directly on Spotify.
           Immerse yourself in the music without any hassle. 
        </div>
       </div>
       </div>
     </div>
  );
}
export default AboutPage;
