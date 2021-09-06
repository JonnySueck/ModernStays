import './title.css'
import React, { useState } from 'react';

export default function Title() {
    // const [location, setLocation] = useState(0);

    const current_location = "California"
    return (
        <div id="home_Title">Stays in {current_location}</div>
    );
  }