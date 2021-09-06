import './title.css'
import React, { useState } from 'react';
// https://www.better.dev/displaying-lists-in-react-jsx

export default function Stays(props) {
    // const [location, setLocation] = useState(0);
    const places = [
        {place : "Calie's House"},
        {place : "Dan's Condo"},
        {place : "Randy's House"},
        {place : "Moe's Apartment"}

        // CaliesPlace: ['$100', '1 bed', 'Whole Apartment'],
        // DansPlace: ['$175', '2 bed', 'Whole Apartment'],
        // JosesPlace: ['$75', '1 bed', 'Shared Apartment'],
        // MiguelsPlace: ['$250', '3 bed', 'Whole House'],
    ]
    return (
        <div>
        {places.map(house => (
            <p>{house.place}</p>
          ))}
        </div>
    );
  }