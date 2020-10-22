import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem, ItemProps } from '../../global';
import { addItem } from "../cart/cartSlice";
import '../Features.css'

var uniqid = require('uniqid');


export const Item = ({name,price,pic,id}:ItemProps) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state);
  const cartItemSubmitEventHandler = (e:any, cartItem:CartItem) => {
      e.preventDefault();
      //console.log(cartItem)
      dispatch(addItem(cartItem));
      //console.log(cart)

  }

 
  return (
    <>
    <div className="column">
    <div className="card">
        <img src={pic} alt='shoes' className='product-pic' />
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button
      onClick={(event => cartItemSubmitEventHandler(event, {id,name,price,cartId:uniqid()}))}
      className='btn'>Add to cart</button>
      {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={addToCart}><i className="material-icons">add</i></span> */}

    </div>
    </div>
    </>

  )
}