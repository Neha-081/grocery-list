
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
const handleDelete=(id)=>{
   const removeItem= todos.filter(item=>{
        return item.id!==id
    })
    setTodos(removeItem)
    
}



  return <div>
   <GroceryInput handleClick={handleClick}/>
   {todos.map((e)=>{
       return <GroceryList handleDelete={handleDelete} id={e.id} key={e.id} title={e.title} status={e.staus}/>
   })}
  </div>;
}

export default Grocery;
