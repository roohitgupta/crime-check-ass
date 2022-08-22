import React from 'react'
import "../App.css";
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmitandRedirect = (event)=>{
        event.preventDefault();
        navigate("/noticepage")
    }


  return (
    <div>
      <div className='login-container'>
       <h2 style={{textDecoration:"underline"}}>Login Page</h2>
       <form className='login-form' onSubmit={handleSubmitandRedirect}>
            <input className='login-input' type="text" placeholder='Enter Username' />
            <button type='submit'
                style={{ backgroundColor:"orange", fontSize:"17px", borderRadius:"9px" }}> Submit 
            </button>
       </form>
       
      </div>
    </div>
  )
}

export default LoginPage;
