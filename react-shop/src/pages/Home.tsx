import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';


import { selectFilter, setCategoryId } from '../redux/slices/filterSlice';
import { Categories } from "../components";
import { Sort } from "../components"

import { ProductBlock } from '../components';
import { Loader } from '../components';
import { fetchProducts, selectProductData } from '../redux/slices/productsSlice';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);

  const { items, status } = useSelector(selectProductData);
  const { categoryId, sort, searchValue } = useSelector(selectFilter);

  // category selection
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const categories = ['Все', 'Бургеры', 'Комбо', 'Закуски', 'Соусы'];

  const onCategory = (id: number) => {
    setSelectedCategory(categories[id]);
    dispatch(setCategoryId(id));
  }
 
  const getProducts = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchProducts({
        category,
        sortBy,
        order,
        search,
      })
    );
    
    window.scrollTo(0, 0)
  };

  useEffect(() => {
    if (!isSearch.current) {
      getProducts();
    } else {
      isSearch.current = false;
    };
  }, [categoryId, sort, searchValue]);

  const products = items.map((obj: any) => <ProductBlock key={obj.id} {...obj} />)
  const skeleton = [...new Array(8)].map((_, index) => <Loader key={index} />)

  return (
    <div className="container">
      <div className="navigation">
        <Categories value={categoryId} onCategory={onCategory} categories={categories} />
        <Sort />
      </div>
      <div className="content_items">
        <h2 className="content_title">{products.length > 0 ? selectedCategory : ''}</h2>
        {status === 'error' && searchValue ? (
          <div className='content__error-info'>
            <h2>Произошла ошибка</h2>
            <p>К сожалению, не удалось загрузить товар. Попробуйте повторить попытку чуть позже.</p>
          </div>
        ) : (
          <div>
            {status === 'loading' ? <div className='content_burger main_content'>{skeleton}</div> : products.length > 0 ? <div className='content_burger main_content'>{products}</div> : <h3 style={{textAlign: 'center', padding: '50px 100px 100px 100px'}}>Ничего не найдено</h3>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;