import './title.css'
import React, { useState } from 'react';

export default function Title() {
    // const [location, setLocation] = useState(0);
    let current_location = document.getElementById('location');
    if (current_location == null || current_location == ""){
        current_location = "Charleston"
    }
    
    console.log(current_location)
    return (
        <div id="home_Title">Stays in {current_location}</div>
    );
  }