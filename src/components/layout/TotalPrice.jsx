import React from 'react'
import { useSelector } from 'react-redux';


function TotalPrice() {

    const cartItems = useSelector((state) => state.cart.items);


    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    return (
        <div>
            <div className='total-price-container'>
                <div>Toplam</div>
                <div>{totalPrice.toFixed(2)} TL</div>
            </div>
        </div>
    )
}

export default TotalPrice