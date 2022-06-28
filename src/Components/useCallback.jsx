import React, { useState, useCallback } from 'react'

export const CallBack = () => {
 
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
 
const incrementCount = useCallback(() => {
  setCount(count + 1)
}, [count])
const incrementNumber = useCallback(() => {
  setNumber(number + 1)
}, [number])
   
  return (
    <div>
      Count: {count}
      <button onClick={incrementCount}>Increase count</button>
      Number: {number}
      <button onClick={incrementNumber}>increase number</button>
    
    </div>
  )
}
 
 
