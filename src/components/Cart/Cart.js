import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const Cart = () => {
    const data=[
       
        { id:1,
        img:"https://w7.pngwing.com/pngs/639/359/png-transparent-dress-clothing-red-dress-fashion-vintage-clothing-desktop-wallpaper-thumbnail.png",
        img2:"https://w7.pngwing.com/pngs/594/611/png-transparent-say-yes-to-the-dress-prom-party-dress-gown-dress-fashion-party-dress-shoe-thumbnail.png",
        title:"Long Sleeve",
        desc:'Long Sleeve',
        isNew:true,
        oldPrice:19,
        price:12 
        },
        {
         id:2,
         img: "https://w7.pngwing.com/pngs/525/70/png-transparent-dress-fashion-topshop-lace-formal-wear-red-dress-fashion-magenta-formal-wear-thumbnail.png",
         title:"Long Sleeve",
         desc:'Long Sleeve',
         isNew:true,
         oldPrice:19,
         price:12 
        }
    ]
  return (
    <div className="cart">
     <h1>Product in your cart</h1>
     {data?.map(item=>(
         <div className="item" key={item.id}>
             <img src={item.img} alt="" />
             <div className="details">
                 <h1>{item.title}</h1>
                 <p>{item.desc.substring(0,100)}</p>
                 <div className="price">1*${item.price} </div>
             </div>
             <DeleteOutlinedIcon className="delete"/>
         </div>
     ))}
    <div className="total">
        <span>Subtotal</span>
        <span>$200</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">Reset Cart</span>            
      
    </div>
  )
}
