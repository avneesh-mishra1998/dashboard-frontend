import React from 'react'
import {Link,useNavigate} from "react-router-dom"

function Nav() {
  const navigate= useNavigate();
  const auth= localStorage.getItem("user")
  const Logout= ()=>{
    localStorage.clear();
    navigate("/signup")
  }
  return (
    <div>
      <img className='logo' src="https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg" alt="LOGO" />
      { auth ?
        <ul className='nav-ul'>
            <li> <Link to='/'>Products</Link> </li>
            <li> <Link to='/add'>Add Product</Link> </li>
            <li> <Link to='/profile'>Profile</Link> </li>
            <li>
              <div className='dropdown'>
                <span className="dropbtn "> {JSON.parse(auth).name} </span>
                <div className="dropdown-content">
                <Link onClick={Logout} to='/signup'>Logout</Link>
                </div>
                </div>
            </li>
        </ul>
        :
        <ul className='nav-ul nav-right'>
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      }
    </div>
  )
}

export default Nav