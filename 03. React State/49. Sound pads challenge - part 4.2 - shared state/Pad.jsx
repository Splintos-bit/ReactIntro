import React from "react";

export default function Pad({ on, color, toggle }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={on === "on" ? "on" : undefined} // Apply "on" class if true, "off" otherwise
      onClick={toggle} // Call toggle function when button is clicked
    >
     
    </button>
  );
}
