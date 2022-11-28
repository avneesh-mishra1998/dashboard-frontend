import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function Products() {
const [product, setProduct]= useState([]);
useEffect(()=>{
  getProducts();
},[])
  const getProducts= async()=>{
    let  data= await fetch("http://localhost:5000/products",{
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    data= await data.json();
    setProduct(data)
  }
  console.log(product);
  const deleteProduct= async(id)=>
  {
    let result= await fetch(`http://localhost:5000/product/${id}`,{
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result= await result.json();
    if(result){
      alert("Record is Deleted")
      getProducts();  //For refreshing page after deleting
    }
  }
  const searchHandle= async(e)=>{
    let key= e.target.value;
    if(key){
      let result= await fetch(`http://localhost:5000/search/${key}`,{
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
    result= await result.json();
    if(result){
      setProduct(result)
    }
    }else{
      getProducts();
    }
  }
  return (
    <div className='products-list'>
      <h2>Products Listing</h2>
      <input onChange={searchHandle} className='search-bar' type="text" placeholder='Search Products here' />
      <ul>
        <li className='atri'>S.No</li>
        <li className='atri'>Name</li>
        <li className='atri'>Price</li>
        <li className='atri'>Brand</li>
        <li className='atri'>Category</li>
        <li className='atri'>Operation</li>
      </ul>
      {
        product.length>0 ?
          product.map((item,index)=>
          <ul key={index}>
            <li>{index}</li>
            <li>{item.name}</li>
            <li>$ {item.price}</li>
            <li>{item.brand}</li>
            <li>{item.category}</li>
            <li><button className='delete-btn' onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link className='update-link' to={"/update/"+item._id}>Update</Link></li>
          </ul>
          ) : <h1>No Product Found...</h1>
      }
    </div>
  )
}

export default Products