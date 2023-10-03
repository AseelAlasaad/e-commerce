import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import cookie from "react-cookies";



export const productContext=React.createContext();

export default  function ProductProvider(props){

  const [product, setproduct]=useState([])
  const [cart,setCart]=useState([])
  const [items, setproductfav]=useState([])
  const [itemIncart,setItemincart]=useState("")
  const [total,setTotal]=useState(0)
  const userload=cookie.load('user')
  // console.log('user',userload);
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


const addToCart=(productId)=>{
 const obj={
     userId:userload._id,
     productId:productId,
     quantity:total+1
  }

  console.log('obj',obj.productId);

  // axios.post('http://localhost:5000/Cart',{
  //   obj
  // }).then(
  //   (res) => {
  //   console.log(res);
   
  // })
  // .catch((error)=>console.log(error))

  setTotal(()=>total+1)
}
console.log('total=>>',total);

const getCart= ()=>{
   axios.get('http://localhost:5000/Cart').then(
    (res) => {
      // console.log('product in cart=>>>>>',res.data);
    setCart(res.data)
  })
  .catch((error)=>console.log(error))

}

const getProductbyId=  (id)=>{
   axios.get(`http://localhost:5000/Product/${id}`).then((res) => {
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
  getProductbyId,
  addToCart
  
}
    return(
      <productContext.Provider value={state}>
         {props.children}

      </productContext.Provider>
    )
}