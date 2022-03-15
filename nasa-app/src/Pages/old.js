import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import Navbar from '../Components/Navbar';
import axios from 'axios';




function Home() {
  const uniqueKey = "QXZVV5YLQXbyG4vAq7eDNPtyUWAMc1KO6JceCFUi"
  const url =`https://api.nasa.gov/planetary/apod?api_key=${uniqueKey}`

  const axios = require('axios').default;

  //console.log(url)

  //const [data,setData] = useState([])
  const [userData, setUserData] = useState({});
  //const [location, setLocation] = useState('')

  //const contentInfo = {};

  // const searchLocation = async () => {
  //   await axios.get(url)
  //     .then((response) => {

  //     for(const val in response.data){
  //       contentInfo[val] = response.data[val];
  //       console.log(val, response.data[val]);
  //       console.log("LOOP")
  //     }
      
  //     console.log(contentInfo)
  //     setData(contentInfo)
  //     console.log(response.data)
  //     console.log(data)

  //     console.log(typeof(data))
  //     console.log(typeof(response.data))
  //     console.log(typeof(contentInfo))
  //     //console.log(response.data.length())
  //     //console.log(event)

      

  //     // let contentInfo = {
  //     //   "date": response.data.date, 
  //     //   "explanation": response.data.explanation,
  //     //   "hdurl": response.data.hdurl,
  //     //   "title": response.data.title,
  //     //   "url": response.data.url
  //     // }
  //     // console.log(contentInfo)
      
  //   }).catch(error => {
  //     alert(error)
  //   });
  // }

  

  // const searchingData = async () => {
  //   try {
  //     console.log("Inside Try")
  //     const resp = await axios.get(url);
  //     console.log(resp.data)

  //     console.log(typeof(resp.data))
  //     console.log(setData)
  //     Object.keys(resp.data).map(function(keyName, keyIndex){
  //       <div key={keyIndex}>{keyName} : {contentInfo[keyName]}</div>
  //     })
  //     //setData(resp.data)
  //     //console.log(setData())
  //     //console.log(setData)
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(url);
    setUserData(response.data);
    //console.log(setUserData())
  };

  useEffect(() => {
    console.log("outside")
    //searchLocation()
    //searchingData()
    getGiHubUserWithAxios();
  },[])
  
  // const [profile, setProfile] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getProfile = async () => {
  //   setLoading(true);
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProfile(data.data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getProfile();
  // }, []);

  return (
    <div className="App">
        <Navbar/>
        <Link to="Events">Events</Link>
        
      {/* <header className="App-header">
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
        <div> */}

        {/* {
          Object.keys(contentInfo).map(function(keyName, keyIndex){
            <div key={keyIndex}>{keyName} : {contentInfo[keyName]}</div>
          })
        } */}
        
        {/* {Object.keys().map((addressKey, index) => (
          <span className="d-block" key={index}>
            {typeof contentInfo[addressKey] === "object"
              ? Object.keys(contentInfo[addressKey]).map(e => (
                <span>{contentInfo[addressKey][e]}</span>
              ))
            : data[0].features[index]}
          </span>
        ))}  */}

        {/* {
          Object.keys(contentInfo).map(function(keyName, keyIndex){
            <div key={keyIndex}>{keyName} : {contentInfo[keyName]}</div>
          })
        } */}

        {/* {loading ? (
            <span>loading..</span>
          ) : (
            profile.map(i => {
              <span>
                <ul>
                  <li>{i.date}</li>
                  <li>{i.explanation}</li>
                  <li>{i.hdurl}</li>
                  <li>{i.media_type}</li>
                  <li>{i.version}</li>
                  <li>{i.title}</li>
                  <li>
                    <image src={i.url} />
                  </li>
                </ul>
              </span>;
            })
          )
        } */}

        {/* {contentInfo.map((eventImage) => (
          <img src={eventImage.url} alt={eventImage.url}/>
        ))} */}
        
        {/* {data.map((event) => (
          <div>
            <div>{event.date}</div>
            <div>{event.explanation}</div>
            <div>{event.hdurl}</div>
            <div>{event.media_type}</div>
            <div>{event.version}</div>
            <div>{event.title}</div>
            <div>{event.url}</div>
          </div>
        ))} */}

        {userData.date ? <p>{userData.date}</p> : null}
        {userData.explanation ? <p>{userData.explanation}</p> : null}
        {userData.hdurl ? <p>{userData.hdurl}</p> : null}
        {userData.title ? <p>{userData.title}</p> : null}
        {userData.url ? <p>{userData.url}</p> : null}
        {userData.title ? <img src={userData.url}/> : null}
        {/* </div>
       </header> */}
    </div>
  );
}

export default Home;
