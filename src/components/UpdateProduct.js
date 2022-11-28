import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from "react-router-dom";

function UpdateProduct() {
  const [name,setName]= useState("");
  const [price,setPrice]= useState("");
  const [brand,setBrand]= useState("");
  const [category,setCategory]= useState("");
  const params= useParams();
  const navigate= useNavigate();
  useEffect(()=>{
    getProductDetails();
  },[])

  const getProductDetails=async()=>{
    let result= await fetch(`http://localhost:5000/product/${params.id}`,{
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    result= await result.json()
    setName(result.name);
    setPrice(result.price);
    setBrand(result.brand);
    setCategory(result.category);
  }

  const updateHandler= async()=>{
    console.log(name,price,brand,category);
    let result= await fetch(`http://localhost:5000/product/${params.id}`,{
      method: "Put",
      body: JSON.stringify({name,price,brand,category}),
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json"
      }
    })
    result= await result.json()
    console.log(result);
    navigate("/")
  }
  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Product Name' className='text-area' /> <br />
      <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Price' className='text-area'/> <br /> 

      <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder='Enter Product Brand' className='text-area'/><br /> 

      <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Product Category' className='text-area'/><br />

      <button onClick={updateHandler} className='add-btn'> Update </button>
    </div>
  )
}

export default UpdateProduct