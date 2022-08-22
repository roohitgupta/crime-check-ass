import React from 'react'
import styled from "styled-components"


const LoginPage = () => {

    const Container = styled.div`
        border: 2px solid black;
        width: 50%;
        height: 300px;
        margin: auto;
        background-color: aliceblue;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    `

    const Form = styled.form`
        padding: 12px;
        width: 50%;
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top: 45px;
    `
    const Input = styled.input`
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 600;
        border: 2px solid black;
    `

  return (
    <div>
      <Container>
       <h2 style={{textDecoration:"underline"}}>Login Page</h2>
       <Form action="">
            <Input type="text" placeholder='Enter Username' />
            <input 
                type="submit" 
                style={{ backgroundColor:"orange", fontSize:"17px", borderRadius:"9px" }} 
            />
       </Form>
       
      </Container>
    </div>
  )
}

export default LoginPage;
