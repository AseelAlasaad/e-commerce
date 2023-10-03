import React,{useContext} from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product';
import { productContext } from '../context/product';

const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;


function Products() {
  const {product}=useContext(productContext)

  return (
    <Container>
      {product.map(item=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
