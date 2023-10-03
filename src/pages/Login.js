import styled from "styled-components";
import {mobile} from "../responsive";
import React ,{useContext} from "react";
import { authContext } from "../context/auth";

import { Link } from 'react-router-dom';
import Register from "./Register";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Linka = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const {login,loggedIn,hasuser}=useContext(authContext)

  console.log(loggedIn);
  return (
<Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={login}>
          <Input placeholder="username" name="username" />
          <Input placeholder="password" name="password"/>
            <Button  >LOGIN</Button>
            <Linka>DO NOT YOU REMEMBER THE PASSWORD?</Linka>
           <Link  style={{
              color:'black',
              textDecoration: 'none',
           
            
          }} to='/register' > <Linka> CREATE A NEW ACCOUNT </Linka></Link>
         
   
   
       
          </Form>
        </Wrapper>
      </Container>

    
      // hasuser?(
        
      // ) : (
      //   <Register/>
      // )

  
  )
};

export default Login;