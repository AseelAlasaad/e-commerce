import './App.css';
import Home from "./pages/Home";
import Product from './components/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import React,{useContext, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { authContext } from './context/auth'
import cookie from "react-cookies";
import {productContext} from './context/product'
import { When } from 'react-if';
import ProductInfo from './components/ProductInfo';
function App() {

  const {vaildToken, loggedIn}=useContext(authContext)
  const {product,getProduct}=useContext(productContext)
  useEffect(()=>{

    const lodedtoken=cookie.load('auth')
    console.log(lodedtoken);
    vaildToken(lodedtoken)

    getProduct()
  },[])

  return (
    
    <div>
        <Header/>

        {/* <Home/> */}
  
        {/* <When condition={loggedIn}>

      <Route  path="/" element={<Home/>}/>

    </When> */}
    {/* {loggedIn ? <Home/>:<Login/>}  */}
    <Routes>
    <Route  path="/" exact element={<Home/>}/>
      <Route  path="/register" element={<Register/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route  exact path='/product/:id' element={<ProductInfo/>}/>
      <Route  exact path='/cart' element={<Cart/>}/>

   
    </Routes>
    </div>
  );
}

export default App;
