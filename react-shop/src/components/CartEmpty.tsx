import React from 'react';
import { Link } from 'react-router-dom'
import cartEmptyImage from '../assets/img/cartEmpty.png';

export const CartEmpty: React.FC = () => {
  return (
    <div className='cart cart--empty'>
      <h2>В вашей корзине пока пусто</h2>
      <p>Вероятней всего, вы ещё ничего не заказывали. <br/> Для того, чтобы заказать еду, перейдите на главную страницу</p>
      <img src={cartEmptyImage} alt=""></img>
      <Link to="/prosto-burger" className='button button--black'>
        <span>Вернуться назад</span>
      </Link>
    </div>
  )
}
