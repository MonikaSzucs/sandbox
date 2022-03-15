import React, { useState, useEffect } from 'react';

export default function SingleEvent() {
    const uniqueKey = "QXZVV5YLQXbyG4vAq7eDNPtyUWAMc1KO6JceCFUi"
    const url =`https://api.nasa.gov/planetary/apod?api_key=${uniqueKey}`

    const axios = require('axios').default;
    const [userData, setUserData] = useState({});

    const getGiHubUserWithAxios = async () => {
        const response = await axios.get(url);
        setUserData(response.data);
        //console.log(setUserData())
    };

    useEffect(() => {
        console.log("useEffect on Home Page")
        getGiHubUserWithAxios();
    },[])

    return (
    <div>
        {userData.date ? <p>{userData.date}</p> : null}
        {userData.explanation ? <p>{userData.explanation}</p> : null}
        {userData.hdurl ? <p>{userData.hdurl}</p> : null}
        {userData.title ? <p>{userData.title}</p> : null}
        {userData.url ? <p>{userData.url}</p> : null}
        {userData.title ? <img src={userData.url}/> : null}
    </div>
    );
}
// SingleEvent