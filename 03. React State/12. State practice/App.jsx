import React, { useState } from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    const [counter,setCounter]=useState(0)
    function add (){
        setCounter(counter+1)
    }
    function sub (){
        setCounter(counter-1)
    }




    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={sub} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count"> {counter} </h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
