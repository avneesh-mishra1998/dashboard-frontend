import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  useEffect(()=>{
    const auth= localStorage.getItem("user")
    if(auth){
        navigate("/")
    }
  },[])
  const loginHandle= async()=>{
    let result= await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json"
        }
    });
    result= await result.json();
    if(result.data){
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate("/");
    }
    else{
        alert("Pls Enter a Correct user")
    }
  }
  
  return (
    <div className="register-user">
      <h1>Login Account</h1>
      
      <br />
      <input
        type="text"
        className="text-area"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
      />{" "}
      <br />
      <br />
      <input
        type="password"
        className="text-area"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
      />{" "}
      <br />
      <br />
      <button onClick={loginHandle} className="register-btn">
        Login
      </button>
    </div>
  );
};
export default Login;
