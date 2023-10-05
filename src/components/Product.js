import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React,{useContext,useState,useEffect} from "react";
import styled from "styled-components";
import {Routes, Route,useNavigate} from 'react-router-dom'
import ProductInfo from "./ProductInfo";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { productContext } from "../context/product";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
function Product({ item }) {

  
 const {id}=useParams()
  const {addToCart}=useContext(productContext)
  //  console.log('url=======>',`http://localhost:5000/Product/${id}`);
  const [items, setItem] = useState(null);
  useEffect(() => {
  
    async function fetchItem() {
      if(id){
        try {
          const response = await axios.get(`http://localhost:5000/Product/${id}`);
          const itemData = response.data;
          // console.log('itemData',itemData);
          setItem(itemData);
        } catch (error) {
          console.error(error);
        }
      }
     
   
    }
 
      
      fetchItem();

    
  }, [id]);

// console.log('product id',id);

  return (

  
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
           <Link to='/cart'>
           
          <ShoppingCartOutlined onClick={()=>addToCart(item)} />
          </Link>
        </Icon>
        <Icon>
          
          <Link to={`/product/${item._id}`} productfav={items}>
          <SearchOutlined/>
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
   
    
  
  );
}

export default Product;
