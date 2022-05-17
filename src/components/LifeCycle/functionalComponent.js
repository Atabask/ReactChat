import React, { useState } from "react"


export const FunctionalComponent = () => {
    
    const [count, setCount] = useState(10)
    const [cars, setCars] = useState(["Audi","BMW"])
    
    const addCar = () => {
        const car = "WV"

        setCars([...cars, car]);
    }
    
    return (
        <div>
            <h1>FunctionalComponent</h1>
            <h2>Count: <span>{count}</span></h2>
            <button onClick={() => setCount((s) => s +1)}>Increment</button>
            <button onClick={() => setCount((s) => s -1)}>Decrement</button>
            <hr></hr>
            <button onClick={addCar} >Add Car</button>
            <div>{cars.map((car) => (
                <div>{car}</div>
            ) )}</div>
        </div>
    )
    
}