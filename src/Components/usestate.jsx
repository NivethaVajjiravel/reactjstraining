import React, { useState } from 'react';

export function Color() {  

    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}> Blue </button>
      </>
    )
  }
// export default CountApp;  

// export function Choose() {

//     const [count,setCount]=useState(0);

// const add=()=>{
//     setCount(count+1);
// }  
//     return (
//       <>

//       {count}
//       <button onClick={add}>+</button>
        
//       </>
//     )
//   }

