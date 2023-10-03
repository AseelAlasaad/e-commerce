import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';



export const productContext=React.createContext();

export default  function ProductProvider(props){

  const [product, setproduct]=useState([])
  const [cart,setCart]=useState([])
  const [items, setproductfav]=useState([])
  const [itemIncart,setItemincart]=useState("")
//add to cart
const addTocart=()=>{

}
// get product 
const getProduct= async()=>{
await axios.get('http://localhost:5000/Product').then((res) => {
  // console.log('product',res.data);
  setproduct(res.data)

})
.catch((e) => console.log(e));

}
//render based on catrgory 

//filiter items

//sort product

//admin dashboard

// detail handler
// const {id}=useParams()

const addToCart=()=>{

}

const getCart= async ()=>{
  await axios.get('http://localhost:5000/Cart').then(
    (res) => {
      // console.log('product in cart=>>>>>',res.data);
    setCart(res.data)
  })
  .catch((error)=>console.log(error))

}

const getProductbyId= async (id)=>{
  await axios.get(`http://localhost:5000/Product/${id}`).then((res) => {
    setItemincart(res.data)
  
  })
  .catch((e) => console.log(e));
}
useEffect(()=>{
  getCart()
  
},[])


const state={
  product,
  getProduct,
  items,
  setproductfav,
  getCart,
  cart,
  getProductbyId
  
}
    return(
      <productContext.Provider value={state}>
         {props.children}

      </productContext.Provider>
    )
}