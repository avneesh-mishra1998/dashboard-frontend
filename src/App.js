import './App.css';
import Nav from './Nav'
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Profile from "./components/Profile";
import Footer from './Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route element= {<PrivateRoute/>}>
        <Route path='/' element= {<Products/>} />
        <Route path='/add' element= {<AddProduct/>} />
        <Route path='/update/:id' element= {<UpdateProduct/>} />
        <Route path='/profile' element= {<Profile/>} />
        <Route path='/logout' element= {<h1>LogOut</h1>} />
        </Route>
        <Route path='/signup' element= {<SignUp/>} />
        <Route path='/login' element= {<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
