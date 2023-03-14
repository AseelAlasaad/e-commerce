import React from 'react'
import './Product.css'
function Product() {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>The Lean startup</p>
        <p className='product_price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>

        <div className='product_rating'>
        <p>The Lean startup</p>
        </div>
      </div>
    </div>
  )
}

export default Product
