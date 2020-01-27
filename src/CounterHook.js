import React,{useState} from 'react'

export default function CounterHook() {

   const [counter,setCounter] = useState(10)
   // we will have a state called counter
   // we will have a function to increment it
   

    return (
        <div>
            <h2>HookCounter</h2>
            <p>Your counter is {counter}</p>
            <button onClick={ ()=> setCounter(prevState=> prevState + 1)}> Increment</button>
        </div>
    )
}
