import React from 'react';

const Child = ({initial,setter}) => {
  
    const update=(e)=>{setter(e.target.value)

    }
    return (
      <>
      {initial}
        <input type="text" onChange={update} />
      </>
    );
  }
  
  export default Child;