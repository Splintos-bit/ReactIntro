import React from 'react'
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */


const Page = () => {
  return (
    <>
    
    <ul>
        <li>I am excited about learning react because its more than an amazing library and its most demanded </li>
        
    </ul>
    
    </>
   
  )
}

export default Page


root.render(
    <Page />
)
