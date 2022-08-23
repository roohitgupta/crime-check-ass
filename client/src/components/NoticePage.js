import React, { useState, useEffect } from "react";
import AddNotice from "./AddNotice";
import "../App.css";

const NoticePage = () => {
  const [text, setText] = useState([]);

  const url = "http://localhost:5000/api/get-notices";
  const username = localStorage.getItem('Name');

  const setData = (todo) => {
    setText([{ notice: todo, createdAt: new Date(), user_Id: {username: username} }, ...text]);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setText(data);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <div>
      <h1>Notice Board</h1>
      <AddNotice setDataProps={setData} />

      {text.map((e, _id) => (
        <div key={_id} className="notice-container">
            <div className="notice-one">{e.notice}</div>
            <div className="notice-second">
              <div className="username-task">{e.user_Id.username}</div>
              <div className="date-task">{new Date(e.createdAt).toLocaleDateString()} {new Date(e.createdAt).toLocaleTimeString()}</div>
            </div> 
        </div>
      ))}
    </div>
  );
};

export default NoticePage;
