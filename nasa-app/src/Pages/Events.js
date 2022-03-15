import React, { useState, useEffect } from "react";
import Navbar from '../Components/Navbar';

export default function Events() {
    const uniqueKey = "DM12M4VycikCDlRcRX07RcLqgVePSZbdcephhNc8"
    const limit = "100"
    const days = "14"
    const url =`https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=${uniqueKey}&limit=${limit}&days=${days}`

    const axios = require('axios').default;
    const [eventsData, setEventsData] = useState({});

    const getGiHubUserWithAxios = async () => {
        const response = await axios.get(url);
        console.log(response.data)
        setEventsData(response.data);
        //console.log(setUserData())
    };

    useEffect(() => {
        console.log("useEffect on Events Page")
        getGiHubUserWithAxios();
    },[])
    return (
        <div>
            <Navbar/>
            {
                eventsData.events?.map((event, indexKey) => {
                    return (
                        <div key={indexKey} style={{ padding: "20px" }}>
                            <p>{event.id}</p>
                            <h2>{event.title}</h2>
                            <p>{event.link}</p>
                            <p>{event.categories[0].title}</p> 
                            <p>{event.sources[0].id}</p> 
                        </div>
                    )
                })
            }
        </div>
    );
}
// Events