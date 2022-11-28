import React, { useState } from 'react'

function AddProduct() {
  const [name,setName]= useState("");
  const [price,setPrice]= useState("");
  const [brand,setBrand]= useState("");
  const [category,setCategory]= useState("");
  const [error, setError]= useState(false)
  const productHandler= async()=>{
    if(!name || !price || !brand || !category){
      setError(true)
      return false;
    }
    const userId= JSON.parse(localStorage.getItem("user"))._id
    let result= await fetch("http://localhost:5000/add-product",{
      method: "post",
      body: JSON.stringify({name,price,brand,category,userId}),
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json"
      }
    })
    result= await result.json();
    setName("");
    setPrice("");
    setBrand("");
    setCategory("");
  }
  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Product Name' className='text-area' /> <br />
      {error && !name && <span style={{"color":"red","marginLeft":"-130px"}}>Enter valid name...</span> }<br />
      <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Price' className='text-area'/> <br /> 
      {error && !price && <span style={{"color":"red","marginLeft":"-130px"}}>Enter valid Price...</span> }<br />

      <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder='Enter Product Brand' className='text-area'/><br /> 
      {error && !brand && <span style={{"color":"red","marginLeft":"-130px"}}>Enter valid brand...</span> }<br />

      <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Product Category' className='text-area'/><br />
      {error && !category && <span style={{"color":"red","marginLeft":"-130px"}}>Enter valid category...</span> }<br />

      <button onClick={productHandler} className='add-btn'> Add </button>
    </div>
  )
}

export default AddProduct