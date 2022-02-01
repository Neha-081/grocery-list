
import React, { useState } from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';
import {v4 as uuid} from 'uuid'

function Grocery() {
const [todos,setTodos]=useState([])

const handleClick=(text)=>{
    const payload={
        title:text,
        id:uuid(),
        status:false
    }
    setTodos([...todos,payload])
}


  return <div>
   <GroceryInput handleClick={handleClick}/>
   {todos.map((e)=>{
       return <GroceryList key={e.id} title={e.title}/>
   })}
  </div>;
}

export default Grocery;
