import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FullProducts: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<{
        imageUrl: string;
        name: string;
        price: number;
    }>();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get('https://6425b5ce9e0a30d92b39f227.mockapi.io/burgers/' + id);
                setProduct(data);
            } catch (error) {
                alert('Ошибка, данный товар не найден!')
                navigate('/');
            }
        }
         fetchProducts();
    }, []);

    if (!product) {
        return <h3>Идёт загрузка...</h3>
    }

    return (
        <div className='container'>
            <Link to='/'>
                <div className='container__button-to-home'>
                    <button className="button-go_home">
                        <span>Назад</span>
                    </button>
                </div>
            </Link>
            <div className='main__description main-description'>
                <img src={product.imageUrl} alt=''/>
                    <div>
                        <h2>{product.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor.</p>
                        <h4>{product.price} ₽</h4>
                    </div>
            </div>
        </div>
  )
}

export default FullProducts;