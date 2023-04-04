import React from 'react'
import "./productList.css";
import Product from "../product/Product";



const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & Develop !</h1>
            <p className="pl-desc">Some projects I've developed</p>
        </div>
        <div className="pl-list">
          <Product/>
        </div>
    </div>
  )
}

export default ProductList