import { useState ,useEffect} from "react";

export function Timer() {
  const [count, setCount] = useState(0);
   const [msgDisplay, setmsgDisplay] = useState('Initial message');

  useEffect(() => {
    console.log('component mounted');
    console.log(msgDisplay);
    console.log('count is increased to',count);
  });

  return (
    <div>
      
      <button onClick={() => {setCount(count + 1)}}>Increase count</button>
      <p>count value is:{count}</p>
      <button onClick={() => {setmsgDisplay("msgDisplay has been updated on click event")}}>Update Message</button>
    </div>
  )
}
