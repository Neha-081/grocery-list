import React, { useState } from 'react';

function GroceryInput({handleClick}) {
    const [text,setText]=useState("")

  return <div>
      <input type='text' 
      placeholder="Enter Something"
      onChange={(e)=>{
          setText(e.target.value)
      }}
      
      />
      <button onClick={()=>{
          handleClick(text)

         
      }}>Add Todo</button>
  </div>;
}

export default GroceryInput;
