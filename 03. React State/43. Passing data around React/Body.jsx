import React from "react"

export default function Body({userName}) {
    return (
        <section>
            <h1>{"Welcome Back "+userName+"!"}</h1>
        </section>
    )
}
