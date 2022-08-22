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

  return (
    <div>
      <Container>
       <h2 style={{textDecoration:"underline"}}>Login Page</h2>
       <Form action="">
            <input style={{ marginBottom:"15px", fontSize:"20px", fontBold:"600", border:"2px solid black" }} type="text" placeholder='Enter Username' />
            <input style={{ backgroundColor:"orange", fontSize:"17px", borderRadius:"9px" }} type="submit" />
       </Form>
       
      </Container>
    </div>
  )
}

export default LoginPage;
