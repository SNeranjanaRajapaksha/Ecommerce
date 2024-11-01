import React from 'react'
import "./Product.scss"
import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {

  const [selectedImg,setSelectedImg]=useState(1)
  const [quantity,setQuantity]=useState(0)

  const images=[
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",       
    "https://w7.pngwing.com/pngs/525/70/png-transparent-dress-fashion-topshop-lace-formal-wear-red-dress-fashion-magenta-formal-wear-thumbnail.png",
    
  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt=""  onClick={e=>setSelectedImg(0)}/> 
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>            
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="quantity">
        <button onClick={()=>setQuantity((prev)=>(prev===1?1:prev-1))}>-</button>
        {quantity}
        <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className="add"><AddShoppingCartIcon/> ADD TO CART</button>
        <div className="info">
          <div className="item"><FavoriteBorderIcon/>ADD TO WHISHLIST</div>
          <div className="item"><BalanceIcon/>ADD TO COMPARE</div>
        </div>
      
      <div className="info">
        <span>Vendor: Polo</span>
        <span>Product Type: T-Shirt</span>
        <span>Tag: T-Shirt, Women, Top</span>
      </div>
      <hr/>
      <div className="info">
        <span>DESCRIPTION</span>
        <hr/>
        <span>ADDITIONAL INFORMATION</span>
        <hr/>
        <span>FAQ</span>
      </div>
      </div>
      </div>
    
  )
}
