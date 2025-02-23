import { useState } from "react";

export default function Pad({ onOff, color }) {
  /**
   * Challenge: Create state controlling whether
   * this pad is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   * 
   * Create an event listener so when the pad is clicked,
   * it toggles from "on" to "off".
   * 
   * Goal: clicking each pad should toggle it on and off.
   */
  const [onOffState, setOnOffState] = useState(onOff);

  function toggleOnOff() {
    setOnOffState(onOffState === "on" ? "off" : "on");
  }

  return (
    <button
      onClick={toggleOnOff}
      style={{ backgroundColor: color }}
      className={onOffState === "on" ? "on" : undefined}
    ></button>
  );
}
