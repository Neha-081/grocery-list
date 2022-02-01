import React from 'react';

function GroceryList({title,handleDelete,id,status}) {
  return <div>{title} - {status?'done':'not done'}
  <button onClick={()=>handleDelete(id)}>Delete</button>
  </div>

}

export default GroceryList;
