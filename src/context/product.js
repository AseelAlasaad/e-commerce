import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import cookie from "react-cookies";

export const productContext = React.createContext();

export default function ProductProvider(props) {
  const [product, setproduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [items, setproductfav] = useState([]);
  const [itemIncart, setItemincart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setquantity] = useState(1);
  const [wishlist,setWishlist]=useState([])

  const userload = cookie.load("user");

  // get product
  const getProduct = async () => {
    await axios
      .get("http://localhost:5000/Product")
      .then((res) => {
        // console.log('product',res.data);
        setproduct(res.data);
      })
      .catch((e) => console.log(e));
  };



  const checkCart = (productId) => {
    console.log("pid", productId);
    return cart.some((item) => item.productId === productId);
  };

// handle Whishlist 

  const handleWhishlist=(product)=>{
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let result= storedWishlist.some((item) => item._id === product._id);
    console.log(result);
     if(!result)
     {

      console.log(product);
       const wish=[...storedWishlist,product]
      localStorage.setItem('wishlist', JSON.stringify(wish));
      setWishlist([...wishlist,product])
     }
     
    else console.log('item exist');
    
  }
 // add product in cart
  const addToCart = (product) => {
    const usertoken=cookie.load('auth')
    const headers = {
      'Authorization': `Bearer ${usertoken}`,
      'Content-Type': 'application/json', // Set the content type for JSON data
    };
  
    console.log(usertoken);
    const obj = {
      userId: userload._id,
      productId: product._id,
      quantity: quantity,
    };
    //  console.log('obj quantity',obj.quantity);
    const result = !checkCart(product._id);
    if (result) {

      axios
        .post("http://localhost:5000/Cart", obj,{headers})
        .then((res) => {
          setCart(res.data);
          setquantity(()=>quantity+1)
        })
        .catch((error) => console.log(error));

        setquantity(1);
    } 

    else {
     console.log('item exist ');

      //update the quantity in db
      // const itemToUpdate = cart.find(item => item.productId);
      //  console.log(itemToUpdate);
 
      // const updatedObj = {
      //   userId: userload._id,
      //   productId: product._id,
      //   quantity:quantity+1, 
      // };
      // // console.log(updatedObj);
      // axios
      //   .put(`http://localhost:5000/Cart/${product._id}`,updatedObj )
      //   .then((res) => {
      //     console.log(res);
      //     // setCart(res.data)
      //   })
      //   .catch((error) => console.log(error));
    }
  
  }


  const getCart = () => {
    axios
      .get("http://localhost:5000/Cart")
      .then((res) => {
        // console.log('product in cart=>>>>>',res.data);
        setCart(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductbyId = (id) => {

    axios.get(`http://localhost:5000/Product/${id}`)
      .then((res) => {
      
   
        setItemincart(res.data);
      })
      .catch((e) => console.log(e));


  };
  useEffect(() => {
    getCart();
  }, []);

  const state = {
    product,
    getProduct,
    items,
    setproductfav,
    getCart,
    cart,
    addToCart,
    itemIncart,
    getProductbyId,
    handleWhishlist,
    wishlist
    
  };
  return (
    <productContext.Provider value={state}>
      {props.children}
    </productContext.Provider>
  );
}

