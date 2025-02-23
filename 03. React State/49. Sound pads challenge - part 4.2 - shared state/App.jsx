import React from "react"
import pads from "./pads"
import Pad from "./Pad"
import { useState } from "react";

export default function App() {
    const [on, setOn] = useState("on");

    // Modify toggle to log "clicked!" to the console
    const toggle = () => {
        console.log("clicked!"); // Log the message when clicked
        setOn(on === "on" ? "off" : "on"); // Toggle between on and off
    };

    const buttonElements = pads.map(pad => (
        <Pad 
            key={pad.id} 
            color={pad.color} 
            on={pad.on} 
            toggle={toggle}  // Pass the toggle function to Pad
        />
    ));

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    );
}
