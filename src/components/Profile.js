import React from 'react';
import {Link} from "react-router-dom"

function Profile() {
  const auth= localStorage.getItem("user")
  return (
    <div className='main-div'>
      <div className='main-profile-div'>
      <img src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="#" className='profile-img' />
      </div>
      <h2>Name : {JSON.parse(auth).name} </h2>
      <h5>Email : {JSON.parse(auth).email}</h5>
      <div className='about-div'>
      <h5>About : </h5>
      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, tenetur recusandae. Dolor ullam consectetur aliquam? Ducimus distinctio, quaerat deserunt cupiditate explicabo impedit iste nisi molestias quos recusandae obcaecati eius in voluptatibus alias enim quia at natus iure praesentium expedita dolor velit! Quae minima fugiat tenetur repellendus autem fugit veniam consequuntur, nemo, dolores deleniti dolor in eveniet?
      </p>
      </div>
      <Link to='/about' className='link-1'>About</Link>
      <Link to='/help' className='link-1'>Help</Link>
      <Link to='/logout' className='link-1'>Logout</Link>
    </div>
  )
}

export default Profile