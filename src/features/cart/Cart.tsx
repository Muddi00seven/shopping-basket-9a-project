import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from "../../global"

export function Cart() {
    // const dispatch = useDispatch();
    // @ts-ignore
    const myCart:CartItem[] = useSelector((state:CartItem[]) => state.cart);
    console.log(myCart)
    // @ts-ignore
    const totalPrice =  myCart.reduce((prev, next) => prev + next.price,0); 
    return (
        <div className='cart-box'>
            <h1>Cart Details</h1>

            {myCart.map(cartItem => {
                return <div key={`${cartItem.cartId}`}>{cartItem.id}: {cartItem.name}</div>
            })}
            <h4>Total Pirce: {totalPrice}</h4>
        </div>
    )
}