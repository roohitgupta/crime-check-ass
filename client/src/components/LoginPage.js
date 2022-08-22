import React from 'react'
import "../App.css";


const LoginPage = () => {

  return (
    <div>
      <div className='login-container'>
       <h2 style={{textDecoration:"underline"}}>Login Page</h2>
       <form className='login-form' action="">
            <input className='login-input' type="text" placeholder='Enter Username' />
            <input 
                type="submit" 
                style={{ backgroundColor:"orange", fontSize:"17px", borderRadius:"9px" }} 
            />
       </form>
       
      </div>
    </div>
  )
}

export default LoginPage;
