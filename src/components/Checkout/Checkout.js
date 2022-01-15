import React from 'react'
import './style.css'
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../../StateProvider'

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad"
                src="https://i.ibb.co/hDmzRCy/amazonadbanner.jpg" 
                alt=""/>
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className="checkout-title">
                        Your Shopping Basket
                    </h2>
                </div>

                {basket.map((val)=>(
                    <CheckoutProduct 
                    id={val.id} 
                    title={val.title}
                    image={val.image}
                    price={val.price}
                    rating={val.rating}
                    />
                ))}
                
            </div>

            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
