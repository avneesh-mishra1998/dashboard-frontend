import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(()=>{
    const auth= localStorage.getItem("user")
    if(auth){
        navigate("/")
    }
  }, [])

  const Signup = async () => {
    let data = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    
    if(data.result.name !==null){
        localStorage.setItem("user", JSON.stringify(data.result));
        localStorage.setItem("token", JSON.stringify(data.auth));
    }
    else{
        alert("pls provide the legal Info")
    }
    navigate('/')
  };
  return (
    <div className="register-user">
      <h1>Register</h1>
      <input
        type="text"
        className="text-area"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
      />{" "}
      <br />
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
      <button className="register-btn" onClick={Signup}>
        SignUp
      </button>
      <Link to="/login" className="login-btn">Login Here</Link>

    </div>
  );
};
export default SignUp;
