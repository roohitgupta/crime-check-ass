import React, { useState } from 'react'
import "../App.css";
import { useNavigate } from "react-router-dom"


const LoginPage = () => {

    const [name, setName] = useState("");

    const navigate = useNavigate();


    const LoginUser = async (event)=>{
      event.preventDefault();
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
        }),
      });

      const data = await response.json()
      console.log(data.username)
      
      if(data.username) {
        localStorage.setItem('Name', data.username)
        alert("Login Successful!!")
        navigate("/noticepage")
      } 

    };


  return (
    <div>
      <div className='login-container'>
       <h2 style={{textDecoration:"underline"}}>Login Page</h2>
       <form className='login-form' onSubmit={LoginUser}>
            <input 
                className='login-input' 
                type="text" 
                placeholder='Enter Username'
                value={name}
                onChange={(e)=>setName(e.target.value)} />

            <button 
                type='submit'
                style={{ backgroundColor:"orange", fontSize:"17px", borderRadius:"9px" }}
                >
                  Submit 
            </button>
       </form>
       
      </div>
    </div>
  )
}

export default LoginPage;
