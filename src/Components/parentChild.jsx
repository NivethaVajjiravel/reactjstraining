import React, {useState} from "react";

function Component() {
    const [count, setCount] = useState(0);
      const add=()=>{
        setCount(count+1);
    }
  
    return (
      <div >
        <Child onClick={add} count={count} />         
        <h1>Count{count}</h1>
      </div>
    );
  }
  
  const Child = ({ onClick, count }) => {
    return (
      <button onClick={onClick}>
         Click me {count}
      </button>
    )
  };
   

  export default Component;
  