import React from 'react'
import "./product.css";
import Hola from "../../img/hola-chat.jpg"
import Fit from "../../img/befit.png"


const Product = () => {
  return (
  <div className='p'>
    <div className='p1'>
      <div className='p-con'>
        <img src={Hola} alt="" className='p-img'/>
      </div>
     </div>
     <div className='p1'>
      <div className='p-con'>
        <img src={Fit} alt="" className='p-img'/>
      </div>
     </div>
  </div>
    
  )
}

export default Product