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
  const [total, setTotal] = useState(1);
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
  // const addToCart = (product) => {
  //   const usertoken=cookie.load('auth')
  //   const headers = {
  //     'Authorization': `Bearer ${usertoken}`,
  //     'Content-Type': 'application/json', // Set the content type for JSON data
  //   };
  
  //   console.log(usertoken);
  
  //   const obj = {
  //     userId: userload._id,
  //     productId: product._id,
  //     quantity: 1,
  //   };
  //   // console.log(quantity);
  //   //  console.log('obj quantity',obj.quantity);
  //   const result = checkCart(product._id);
  //   if (result) {
  //     setCart([...cart, obj]); 
  //     axios
  //       .post("http://localhost:5000/Cart", obj,{headers})
  //       .then((res) => {
  //         setCart(res.data);
  //         setquantity(()=>quantity+1)
  //       })
  //       .catch((error) => console.log(error));

    
  //   } 
  //     // update the quantity in db

  //   else {
  //    console.log('item exist ');

  //     const itemToUpdate = cart.find(item => item.productId);
  //     console.log(itemToUpdate);
  //     itemToUpdate.quantity +=1;
  //     console.log( itemToUpdate.quantity );

  //       setCart([...cart])
  //     const updatedObj = {
  //       userId: userload._id,
  //       productId: product._id,
  //       quantity:quantity, 
  //     };
  //     // console.log(updatedObj);
  //     axios
  //       .put(`http://localhost:5000/Cart/${product._id}`,itemToUpdate )
  //       .then((res) => {
  //         console.log(res);
  //         // setCart(res.data)
  //       })
  //       .catch((error) => console.log(error));
  //   }
  
  // }


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


  const addToCart = (product) => {
    const existingItem = cart.find(item => item.productId === product._id);

    // console.log(existingItem);
    if (existingItem) {

      // If the item exists, increment its quantity in the cart state
      existingItem.quantity += 1;
      // console.log(existingItem.quantity);
      setCart([...cart]); // Trigger a re-render
      //  console.log(existingItem);
      // Send an Axios PUT request to update the quantity in the database
      console.log(existingItem._id);
      axios.put(`http://localhost:5000/cart/${existingItem._id}`, existingItem) // Replace with your API endpoint
        .then((response) => {
          console.log('Item quantity updated in the database:', response.data);
        })
        .catch((error) => {
          console.error('Error updating item quantity in the database:', error);
        });
    } else {
      // If the item doesn't exist, create a new entry with quantity 1 in the cart state
      const newItem = {
      userId: userload._id,
      productId: product._id,
      quantity: 1,
    };
    
      setCart([...cart, newItem]); // Trigger a re-render

      // Send an Axios POST request to add the item to the database
      axios.post('http://localhost:5000/cart', newItem) // Replace with your API endpoint
        .then((response) => {
          console.log('Item added to the database:', response.data);
        })
        .catch((error) => {
          console.error('Error adding item to the database:', error);
        });
    }
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

