import React from "react"

export default function App() {
    
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    
    let result = React.useState("Hello")
    function handelClick (){
        result = React.useState("No")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button  onClick={handelClick} className="value">{result}</button>
        </main>
    )
}
