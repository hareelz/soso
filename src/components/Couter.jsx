import React, { useContext } from 'react'
import { counterContext } from '../contexts/CounterContextProvider'

const Couter = () => {
    const {increment, counter, decr} = useContext(counterContext)
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={decr}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Couter