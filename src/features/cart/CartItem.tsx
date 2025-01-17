import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from "./cartSlice";
import { CartItem,ProductItem } from "../../global"

 const CartItems = () => {
       // @ts-ignore

  const myCartItem:CartItem[] = useSelector((state:CartItem[]) => state.cart);
  console.log(myCartItem)
  const dispatch = useDispatch();

  
    

  return (
    <div className='cart-box'>
      <h3>Your Items</h3>
      <table>
        <thead>
          <tr className="t-headings">
            <th>Products</th>
            <th>price</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
        {myCartItem.map((item,index)=>{
            return (
              <tr key={item.cartId} className='item-row'>
                <td className='product'>{item.name}</td>
                <td>{item.price}</td>
                <td><button 
                onClick={() => dispatch(removeItem({ cartId: item.cartId }))}
                >
                  x
                </button></td>
                </tr>)
        })
        }
        </tbody></table>
    </div>
  )
}
export default CartItems;