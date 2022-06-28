import React ,{useState} from 'react';

export function Join() {

    const [name,setName]=useState("Nivetha");
   
    const addString = () => setName(name +  "Vajjiravel");

return (
    <div>
        {name}
      <button onClick={addString}> Click </button>
    </div>
    
    
);
}

