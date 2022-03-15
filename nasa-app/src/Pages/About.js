import React from "react";
import Navbar from '../Components/Navbar';

export default function About() {
  return (
    <div>
        <Navbar/>
        <h1>About</h1>
        <h2>Creator</h2>
        <p>Monika Szucs</p>
        <p>Developer and Designer</p>
        <p>Tools used: Heroku, GitHub, HTML, CSS, React, Express, Node.js, NASA API</p>
        <p>Photoshop and Illustrator</p>
        <h2>Links</h2>
        <div><a href="">GitHub</a></div>
        <div><a href="">LinkedIn</a></div>
        <div><a href="">Behance</a></div>
        <div><a href="">Portfolio</a></div>
    </div>
  );
}
// About