import './nav.css';
import React, { useState } from 'react';

export default function Nav() {
  // const [location, setLocation] = useState(0);
  // onChange={setLocation()} onChange={setLocation(location)} value={useState(location)}
    return (
        <header id="nav">
          <img id="windbnb_logo" src="logo.png" alt="logo"/>
          <input id="location"  type="text" placeholder="Helinski, Finland"/>
          <input type="number" placeholder="Add Guests"/>
          <button>search</button>
        </header>
    );
  }