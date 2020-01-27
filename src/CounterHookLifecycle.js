import React, { useState, useEffect } from 'react'

export default function CounterHookLifecycle() {

    const [counter, setCounter] = useState(0)

    useEffect(
        () => {
            document.title = `You clicked ${counter}`
        }
        , [counter])

    return (
        <div>
            <h2>CounterHookLifeCycle</h2>
            <p>Your Counter {counter}</p>
            <button onClick={() => setCounter(prevState => prevState + 1)}> Increment </button>
        </div>
    )
}
