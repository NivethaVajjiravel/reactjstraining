import React, { useState } from 'react';
import Child from './childProps';


export function Parent()
{
   const [initialValue,setInitialValue]=useState("");

  return (
    <div>
      <Child initial={initialValue} setter={setInitialValue}/>
    </div>
  );
}

