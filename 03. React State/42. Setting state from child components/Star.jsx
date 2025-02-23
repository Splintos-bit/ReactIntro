import React from 'react'
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"
const Star = ({isFilled}) => {
    console.log( "isFilled"+ isFilled)
  return (
    <>
     <img
                            src={isFilled ? starFilled : starEmpty }
                            alt={isFilled ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
    </>
    
  )
}

export default Star