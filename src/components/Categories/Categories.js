import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <div className="categories">
     <div className="col">
        <div className="row">
            <img src="https://w7.pngwing.com/pngs/88/467/png-transparent-woman-wearing-pink-anarkali-dress-while-holding-pink-dupatta-scarf-anarkali-salwar-suit-party-dress-georgette-dress-thumbnail.png" alt="" />
            <button><Link className="link" to="/products/1">Sale</Link></button>
        </div>
        <div className="row">
            <img src="https://w7.pngwing.com/pngs/441/161/png-transparent-suit-clothing-formal-wear-dress-suit-template-resume-men-suit-thumbnail.png" alt=""/> 
            <button><Link className="link" to="/products/1">Sale</Link></button>
            </div>
     </div>
     <div className="col">
        <div className="row">
        <img src="https://w7.pngwing.com/pngs/714/464/png-transparent-evening-gown-dress-formal-wear-prom-dress-fashion-bride-magenta-thumbnail.png" alt=""/>
            <button><Link className="link" to="/products/1">Sale</Link></button>
            </div>	
     </div>
     <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                    <img src="https://w7.pngwing.com/pngs/227/179/png-transparent-girl-dress-child-girl-children-dress-fashion-girl-baby-children-thumbnail.png" alt=""/>
                    <button><Link className="link" to="/products/1">Sale</Link></button>
                    </div>
            </div> 
            <div className="col">
                <div className="row">
                    <img src="https://w7.pngwing.com/pngs/203/634/png-transparent-kurta-clothing-blouse-dress-design-top-formal-wear-shalwar-kameez-thumbnail.png" alt=""/>
                    <button><Link className="link" to="/products/1">Sale</Link></button>
                    </div>
            </div>       
        </div>
        <div className="row">
            <img src="https://w7.pngwing.com/pngs/665/962/png-transparent-t-shirt-dress-shirt-necktie-suit-t-shirt-thumbnail.png" alt=""/>
            <button><Link className="link" to="/products/1">Sale</Link></button>
            </div>
     </div>
    </div>
  )
}
