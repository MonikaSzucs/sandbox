import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  const uniqueKey = "QXZVV5YLQXbyG4vAq7eDNPtyUWAMc1KO6JceCFUi"
  const url =`https://api.nasa.gov/planetary/apod?api_key=${uniqueKey}`

  console.log(url)

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    axios.get(url)
      .then((response) => {setData(response.data)
      console.log(response.data)

      let contentInfo = {
        "date": response.data.date, 
        "explanation": response.data.explanation,
        "hdurl": response.data.hdurl,
        "title": response.data.title,
        "url": response.data.url
      }
      console.log(contentInfo)
      .catch(error => {
        alert(error)
      });
    })
  }

  useEffect(() => {
    console.log("outside")
    searchLocation()
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        {data.date ? <p>{data.date}</p> : null}
        {data.explanation ? <p>{data.explanation}</p> : null}
        {data.hdurl ? <p>{data.hdurl}</p> : null}
        {data.title ? <p>{data.title}</p> : null}
        {data.url ? <p>{data.url}</p> : null}
        {data.title ? <img src={data.url}/> : null}
        </div>
      </header>
    </div>
  );
}

export default App;
