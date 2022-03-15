import React from 'react';
import { Route , BrowserRouter, Routes, Switch} from "react-router-dom";

import Home from './Pages/Home';
import Events from './Pages/Events';
import About from './Pages/About';


export default function Main() {
    return (
      <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Events" element={ <Events/> } />
        <Route path="/About" element={ <About/> } />
      </Routes>
    </div>
    )
}