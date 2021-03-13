import React from 'react'
import { useStateValue } from '../provider/StateProvider';
import '../style/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__products">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Ads"/>
                <div className="checkout__list">
                    <h3>{user?.email}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    
                    {basket.map(item => 
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )}
                </div>
            </div>
            <div className="checkout__subtotal">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
