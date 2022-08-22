import React, { useState } from "react";
import "../App.css"

const AddNotice = (props) => {
  const [textTodo, setTextTodo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(textTodo);
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="input-bar" onChange={(e) => setTextTodo(e.target.value)} />
        <button className="btn-addTask">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddNotice;
