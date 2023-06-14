import React from 'react'
import { useDispatch } from "react-redux";
import { CartItem, addProduct, itemPrice, removeItem } from '../redux/slices/cartSlice';

type CartItemProps = {
  id: string;
  imageUrl: string;
  name: string;
  weight: number;
  count: number;
  price: number;
}

export const CartItemBlock: React.FC<CartItemProps> = ({ id, imageUrl, name, weight, count, price }) => {
  const dispatch = useDispatch();
  
  const onClickMinus = () => {
      dispatch(itemPrice(id))
  }
  
  const onClickPlus = () => {
    dispatch(addProduct({id} as CartItem))
  }

  const onClickRemove = () => {
    if(window.confirm('Вы точно хотите удалить этот товар из корзины')) {
      dispatch(removeItem(id));
    }
  }

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="product-block_image" src={imageUrl} alt="" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>{weight} г</p>
      </div>
      <div className="cart__item-count">
        <button disabled={count === 1} onClick={onClickMinus} className="button--outline button--circle cart__item-count-minus">
        <svg className="svg-icon-minus" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.666667 554.666667H213.333333c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666667h597.333334c25.6 0 42.666667 17.066667 42.666666 42.666667s-17.066667 42.666667-42.666666 42.666667z"/></svg>
        </button>
          <b>{count}</b>
        <button disabled={count === 99} onClick={onClickPlus} className="button--outline button--circle cart__item-count-plus">
        <svg className="svg-icon-plus" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.666667 469.333333h-256V213.333333a42.666667 42.666667 0 0 0-85.333334 0v256H213.333333a42.666667 42.666667 0 0 0 0 85.333334h256v256a42.666667 42.666667 0 0 0 85.333334 0v-256h256a42.666667 42.666667 0 0 0 0-85.333334z"/></svg>
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <button onClick={onClickRemove} className="button-outlet button--circle button-remove">
          <svg className="svg-icon-remove" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/></svg>
        </button>
      </div>
    </div>
  )
}