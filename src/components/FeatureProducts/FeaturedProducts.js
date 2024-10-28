import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card"


export const FeaturedProducts = ({type}) => {

const data=[
    {
        id:1,
        img:"https://w7.pngwing.com/pngs/639/359/png-transparent-dress-clothing-red-dress-fashion-vintage-clothing-desktop-wallpaper-thumbnail.png",
        img2:"https://w7.pngwing.com/pngs/594/611/png-transparent-say-yes-to-the-dress-prom-party-dress-gown-dress-fashion-party-dress-shoe-thumbnail.png",
        title:"Long Sleeve",
        isNew:true,
        oldPrice:19,
        price:12
    },
    {
        id:2,
        img:"https://w7.pngwing.com/pngs/9/1001/png-transparent-black-dress-shirt-t-shirt-dress-shirt-clothing-black-dress-shirt-tshirt-black-formal-wear-thumbnail.png",
        img2:"https://w7.pngwing.com/pngs/683/282/png-transparent-tuxedo-dress-clothing-formal-wear-dress-white-clothes-hanger-formal-wear-thumbnail.png",
        title:"Coat",
        isNew:true,
        oldPrice:19,
        price:12
    },
    {
        id:3,
        img:"https://w7.pngwing.com/pngs/583/203/png-transparent-pair-of-black-leather-dress-shoes-art-dress-shoe-black-men-shoes-leather-fashion-outdoor-shoe-thumbnail.png",
        img2:"https://w7.pngwing.com/pngs/583/203/png-transparent-pair-of-black-leather-dress-shoes-art-dress-shoe-black-men-shoes-leather-fashion-outdoor-shoe-thumbnail.png",
        title:"Skirt",
        isNew:true,
        oldPrice:19,
        price:12
    },
    {
        id:4,
        img:"https://w7.pngwing.com/pngs/428/902/png-transparent-children-s-clothing-infant-baby-toddler-one-pieces-dress-dress-shirt-tshirt-childrens-clothing-child-thumbnail.png",
        img2:"https://w7.pngwing.com/pngs/525/70/png-transparent-dress-fashion-topshop-lace-formal-wear-red-dress-fashion-magenta-formal-wear-thumbnail.png",
        title:"Hat",
        isNew:true,
        oldPrice:19,
        price:12
    }
]
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
        </div>
        <div className="bottom">
            {data.map((item)=>(
                <Card item={item} key={item.id}/>
                
            ))}
          
        </div>
    </div>
  )
}
