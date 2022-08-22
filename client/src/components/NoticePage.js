import React, { useState, useEffect } from "react";
import AddNotice from "./AddNotice";
import "../App.css";

const NoticePage = () => {
  
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState([]);

  
  const url = "http://localhost:5000/api/get-notices"
  
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

  const fetchTasks = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setText(data)
      console.log(data)
    } catch (error) {
      console.log("error:", error)
    }
  }

  useEffect(()=>{
    fetchTasks()
  },[])


  return (
    <div>
      
      <h1>Notice Board</h1>
      <AddNotice addTodo={addTodo} />

      {
        text.map((e)=>(
          
           <div className="notice-container" key={e.id}>
            <div>{e.tasks}</div>
           </div>
         
           
        ))
      }
      
    </div>
  );
};

export default NoticePage;
