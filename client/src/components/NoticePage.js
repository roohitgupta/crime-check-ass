import React, { useState } from "react";
import AddNotice from "./AddNotice";
import "../App.css";

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



  return (
    <div>
      
      <h1>Notice Board</h1>
      <AddNotice addTodo={addTodo} />

      {
        todos.map((e)=>(
           <div className="notice-container" key={e.id}>
            <div>{e.text}</div>
           
           </div>
           
        ))
      }
      
    </div>
  );
};

export default NoticePage;
