import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false)

    function toggle() {
        setIsShown(prev => !prev)  // Fixed: removed .isShown
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            {/* Fixed typo in button text */}
            <button onClick={toggle}>Toggle Punchline</button>
            <hr />
        </div>
    )
}