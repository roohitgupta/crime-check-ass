import React, { useState } from "react";
import styled from "styled-components";
import AddNotice from "./AddNotice";

const NoticePage = () => {
    
 const [todos, setTodos] = useState([]);

 const addTodo = (text)=> {
    let id = 1;
    if(todos.length > 0) id = todos[0].id + 1;
    
    const newTodo = {
        text: text,
        id: id,
        key: id,
        
    }
    setTodos(()=>[newTodo, ...todos])
}

//   const Input = styled.input`
//     margin-bottom: 15px;
//     font-size: 20px;
//     font-weight: 600;
//     border: 2px solid black;
//   `;

  return (
    <div>
      
      <h1>Notice Board</h1>
      <AddNotice addTodo={addTodo} />

      {
        todos.map((e)=>(
           <div key={e.id}>
            <div>{e.text}</div>
           </div>
           
        ))
      }
      
    </div>
  );
};

export default NoticePage;
