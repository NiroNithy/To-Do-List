import React from 'react'
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
const Content = () => {
  const [Items,setItems]=useState([
    {
      id:1,
      checked:true,
      item:"Practice Code"
    },
    {
      id:2,
      checked:true,
      item:"Learn English"
    },
    {
      id:3,
      checked:true,
      item:"Watch movie"
    }
  ]);

  const handleClick=(id)=>{
    const listItem=Items.map((item)=>item.id===id?{...item,checked:!item.checked}:item);
    setItems(listItem);
    localStorage.setItem("to-do list",JSON.stringify(listItem));
  }
  const handleDelete=(id)=>{
    const listItem=Items.filter((item)=>item.id!==id);
    setItems(listItem);
    localStorage.setItem("to-do list",JSON.stringify(listItem));
  }
  
  return (
    <main>
         {(Items.length)?(
        <ul>
          {Items.map((itemss)=>(
            <li className='item' key={itemss.id}>
              <input type="checkbox"
              onChange={()=>handleClick(itemss.id)}
              checked={itemss.checked}/>

              <label
              style={(itemss.checked)?{textDecoration:"line-through"}:null}
              onDoubleClick={()=>handleClick(itemss.id)}
              >{itemss.item}</label>
              <FaTrash
                role="button"
                tabIndex="0"
                onClick={()=>handleDelete(itemss.id)}
              />
            </li>
          ))}
        </ul>
         ):(
          <p style={{color:'red'}}>Your List is Empty</p>
         )
}
    </main>
  )
}

export default Content