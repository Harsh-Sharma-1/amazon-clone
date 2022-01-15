import React from 'react'
import './style.css'
import { useStateValue } from '../../StateProvider'

function Product({id,title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () =>{
        //dispatch the itme into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        }
        );
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                   {Array(rating)
                   .fill()
                   .map((_ ,i)=>(
                    <p key = {i}>⭐</p>
                   )
                   )
                   }
                </div>
            </div>

                <img 
                src={image}
                alt="" 
                />

                <button onClick = {addToBasket}>
                    Add to basket
                </button>
            
        </div>
    )
}

export default Product
