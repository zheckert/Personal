import React, { useState } from 'react';
 
export const Counter = () => {
    const [num, setNum] = useState(0)

     const add = () => {
        setNum(prevCount => prevCount +1)
    }

     const subtract = () => {
        setNum(prevCount => prevCount -1)
    }

    const mult = () => {
        setNum(prevState => prevState *2)
    }

    const div = () => {
        setNum(prevState => Math.floor(prevState /2))
    }

    const random = () => {
        
        setNum(prevState => Math.floor(Math.pow(prevState, 2)))
    }

    const reset = () => {
        setNum(0)
    }

    return(
        <div>
            {num}
            <button onClick={add}>+1</button>
            <button onClick={subtract}>-1</button>
            <button onClick={mult}>x2</button>
            <button onClick={div}>halvsies</button>
            <button onClick={random}>square</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}