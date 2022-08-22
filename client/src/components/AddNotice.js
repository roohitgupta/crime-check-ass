import React, { useState } from "react";
import styled from "styled-components"

const AddNotice = (props) => {
  const [text, setText] = useState("");

  const Input = styled.input`
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 600;
        border: 2px solid black;
    `

  return (
    <div>
      <Input
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.setDataProps(text);
          }
        }}
        onChange={(e) => {
          setText(e.Target.value);
        }}
      />
      <button 
        style={{ backgroundColor:"orange", fontSize:"17px", borderRadius:"9px" }}
        onClick={() => {
          props.setDataProps(text);
        }}
      >SUBMIT</button>
    </div>
  );
};


export default AddNotice;
