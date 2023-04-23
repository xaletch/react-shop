import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartItem, addProduct, selectCartItemById } from '../../redux/slices/cartSlice'
import { Link } from "react-router-dom";

type ProductBlockProps = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    weight: number;
};

export const ProductBlock:React.FC<ProductBlockProps> = ({ id, name, imageUrl, price, weight }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));
    const addedCount = cartItem ? cartItem.count : 0; 
    
    const onclickAdd = () => {
        const item: CartItem = {
            id,
            name,
            price,
            imageUrl,
            weight,
            count: 0,
        }
        dispatch(addProduct(item))
    }

    return (
        <div className="product-block-wrapper">
            {/* <h2 className="content_title">{obj.category}</h2> */}
            <div className="card-burger card-block">
                <div className="burger-content card-content">
                    <Link to={`/product/${id}`}>
                        <img 
                            className="burger-block_image tovar-block_image"
                            src={imageUrl}
                            alt=""/>
                        <h3 className="burger-price price">{price} ₽</h3>
                    </Link>
                        <p className="burger-name name">{name}</p>
                    <span className="burger-weight weight">{weight} г</span>
                    <button onClick={onclickAdd} className="button-add_basket">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
                    </svg>
                    <span>Добавить</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div>
    )
}