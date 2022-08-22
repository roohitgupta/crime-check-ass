// import React, { useState } from "react";
// import "../App.css"

// const AddNotice = (props) => {
//   const [textTodo, setTextTodo] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.addTodo(textTodo);
//   };



//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input className="input-bar" onChange={(e) => setTextTodo(e.target.value)} />
//         <button className="btn-addTask">SUBMIT</button>
//       </form>
//     </div>
//   );
// };

// export default AddNotice;


import React, { useState } from "react";
import "../App.css"

const AddNotice = (props) => {

  const [text, setText] = useState("");

  const AddNoticeInList = async (event)=> {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",        
      },
      body: JSON.stringify({
        text,
      }),
    });

    const textData = await response.json()
    if(textData) props.setDataProps(text);
  }

  return (
    <div>
      <form onSubmit={AddNoticeInList}>
        <input
          type="text"
          placeholder="Enter Notices" 
          className="input-bar" 
          onChange={(e) => setText(e.target.value)} />
        <button 
          type="submit"
          className="btn-addTask">SUBMIT</button>
       </form>
    </div>
  )
}

export default AddNotice;
