import React from "react"

export default function Pad({on,color,id,toggle}) {
    
    
    return (
        <button 
            style={{backgroundColor:color}}
            className={on ? "on" : undefined}
            onClick={() =>toggle(id)}
        ></button>
    )
}