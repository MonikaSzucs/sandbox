import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import SingleEvent from '../Components/SingleEvent.js';


function Home() {
    return (
        <div className="App">
            <Navbar/>
            <SingleEvent/>
        </div>
    );
}

export default Home;
