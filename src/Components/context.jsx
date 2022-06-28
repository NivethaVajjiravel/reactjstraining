import React,{useState} from 'react';
  
var studentDetailContext = React.createContext(null);

export default function StudentComponent() {
  var [studentDetails] = useState({
    name: "Nivetha",
    age: 24
  });

  return (
    <studentDetailContext.Provider value={studentDetails}>
      <h1>This is the Parent Component</h1>
      <hr/>
      <ChildComponent studentDetails={studentDetails} />
    </studentDetailContext.Provider>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent(props) {
  var contextData = React.useContext(studentDetailContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  );
}


// const NumberContext = React.createContext();
// export function Component() {
  
//   return (
//     <NumberContext.Provider value={42}>
//       <div>
//         <Display />
//       </div>
//     </NumberContext.Provider>
//   );
//   }

// function Display() {
  
//   return (
//     <NumberContext.Consumer>
//       {value => <div>The answer is {value}.</div>}
//     </NumberContext.Consumer>
//   );
// }

// function Component() {
    
//     const [count, setCount] = useState(0);
    
//     useEffect(() => {
//       alert(`You clicked ${count} times`)
//     });
    
//     const handleUpdate = ()=> {
//       setCount (count + 1)
//     }
      
//     return (
//       <div>  
//         <div>You have clicked {count} times</div>
//         <button onClick={ handleUpdate} >
//           Click me
//         </button>
//       </div>
//     );
//   }
    
//   export default Component;

//   function Component1() {
//     return (
//       <div>
//         <Component2 />
//       </div>
//     );
//   }
  
//   function Component2() {
//     return (
//       <div>
//         <Component3 />
//       </div>
//     );
//   }
  
//   function Component3() {
    
//     return (
//       <div>
//         Learning React JS!
//       </div>
//     );
//   }

//   export default Component1;

