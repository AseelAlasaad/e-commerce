import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import axios from "axios";
import base64 from "base-64";
export const authContext = React.createContext();

export default function AuthProvider(props) {
  const [loggedIn, setLoggedin] = useState(false);
  const [user, setuser] = useState({});
  const [username, setusername] = useState("");
  const [hasuser, sethasuser]=useState(false)
  //
  
  const logout = () => {
    setLoggedin(false);
    setuser({});
    cookie.remove("auth");
  };

  const handelSignup =  (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
    };

     axios
      .post("http://localhost:5000/signup", data)
      .then((res) => {
        setLoggedin(true);
        console.log("sign up res:", res);
     
      })
      .catch((e) => console.log(e));
  };

  const login = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log("user Res", data);
    try {
      const userRes = await axios.post(
        "http://localhost:5000/signin",
        {},
        {
          headers: {
            Authorization: `Basic ${base64.encode(
              `${data.username}:${data.password}`
            )}`,
          },
        }
      );

      setLoggedin(true);
      setuser(userRes.data);
      setusername(userRes.data.username);
      sethasuser(true)
      cookie.save("user", userRes.data);
      vaildToken(userRes.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const vaildToken = (token) => {
    try {
      let validtoken = jwtDecode(token);
      if (validtoken) {
        setLoggedin(true);
        cookie.save("auth", token);
      
      } else {
        setLoggedin(false);
        setuser({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const state = {
    login,
    logout,
    handelSignup,
    loggedIn,
    vaildToken,
    hasuser
    
  };
  return (
    <authContext.Provider value={state}>
      {props.children}
    </authContext.Provider>
  );
}
