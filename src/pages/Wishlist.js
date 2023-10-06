import React, {useContext,useEffect, useState}from 'react'
import { productContext } from '../context/product'
function Wishlist() {
    const {wishlist}=useContext(productContext)
    // console.log('wishlist:=>>>>',wishlist);
    const [wishlistitems,setwishlistitems]=useState([])
    useEffect(()=>{
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) ;
        setwishlistitems(storedWishlist);
    },[])
  return (
    <div>
     {
        wishlistitems&&wishlistitems.map(item=>
            <h1>
                {
                    item.title
                }
            </h1>)
     }
    </div>
  )
}

export default Wishlist
