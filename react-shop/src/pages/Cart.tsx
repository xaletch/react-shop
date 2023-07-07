import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {CartItemBlock} from "../components"
import { clearItem, selectCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { CartEmpty } from '../components';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart)

  const totalCount = items.reduce((sum: number, items: any) => sum + items.count, 0)

  const onClickClear = () => {
    if(window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearItem())
    }
  }

  if (items.length === 0) {
    return <CartEmpty />
  }

  return (
    <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
              <svg className="feather feather-shopping-cart" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                Корзина
              </h2>
              <div onClick={onClickClear} className="cart__clear">
                <span>
                <svg className='clear-svg' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"/></svg>  
                  Очистить корзину
                </span>
              </div>
            </div>
            <div className="content__items">
              {
                items.map((item: any) => <CartItemBlock key={item.id} {...item} />)
              }
            </div>
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>Всего товаров: <b>{totalCount} шт.</b></span>
                <span>Сумма заказа: <b className='price'>{totalPrice} ₽</b></span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/" className="button-cart button--outline button--add go-back-btn">
                  <span>
                  <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>
                    <b>Вернуться назад</b>
                  </span>
                </Link>
                <button className="button-cart pay-btn">
                  <span>Оплатить сейчас</span>
                </button>
              </div>
            </div>
          </div>
  )
}

export default Cart;